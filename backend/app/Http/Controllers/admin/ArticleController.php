<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\TempImage;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\File;
use Intervention\Image\Drivers\Gd\Driver;

class ArticleController extends Controller
{
    // this method will return all articles
    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
    }

    // this method will store a article
    public function store(Request $request)
    {
        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:articles,slug',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $article = new Article();
        $article->title = $request->title;
        $article->author = $request->author;
        $article->short_desc = $request->short_desc;
        $article->slug = Str::slug($request->slug);
        $article->content = $request->content;
        $article->image = $request->image;
        $article->status = $request->status;
        $article->save();




        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $article->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/articles/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/articles/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);
            
                $article->image = $fileName;
                $article->save();
            }
        }


        return response()->json([
            'status' => true,
            'message' => 'Article created successfully'
        ]);
    }


    public function show($id)
    {

        $article = Article::find($id);

        if ($article == null) {
            return response()->json([
                'status' => false,
                'message' => 'Article not found'
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $article
        ]);
    }


    public function update(Request $request, $id)
    {

        $article = Article::find($id);

        if ($article == null) {
            return response()->json([
                'status' => false,
                'message' => 'Article not found'
            ]);
        }

        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:articles,slug,' . $id . ',id'

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $article->title = $request->title;
        $article->author = $request->author;
        $article->short_desc = $request->short_desc;
        $article->slug = Str::slug($request->slug);
        $article->content = $request->content;
        $article->image = $request->image;
        $article->status = $request->status;
        $article->save();




        if ($request->imageId > 0) {
            $oldImage = $article->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $article->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/articles/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/articles/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);
                $article->image = $fileName;
                $article->save();

                // delete old image
                if ($oldImage != '') {
                    File::delete(public_path('uploads/articles/small/' . $oldImage));
                    File::delete(public_path('uploads/articles/large/' . $oldImage));
                }
            }
        }


        return response()->json([
            'status' => true,
            'message' => 'Article updated successfully'
        ]);
    }


    public function destroy($id)
    {
        $article = Article::find($id);

        if ($article == null) {
            return response()->json([
                'status' => false,
                'message' => 'Article not found'
            ]);
        }

      

        // delete image
        if ($article->image != '') {
            File::delete(public_path('uploads/articles/small/' . $article->image));
            File::delete(public_path('uploads/articles/large/' . $article->image));
        }

        $article->delete();

        return response()->json([
            'status' => true,
            'message' => 'Article deleted successfully'
        ]);
    }
}
