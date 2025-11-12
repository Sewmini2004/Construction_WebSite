<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Testimonial;
use App\Models\TempImage;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\File;
use Intervention\Image\Drivers\Gd\Driver;


class TestimonialController extends Controller
{
    //this method will return all testimonials
    public function index()
    {
        $testimonials = Testimonial::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }

    //this method will return a single testimonial
    public function show($id)
    {
        $testimonials = Testimonial::find($id);

        if ($testimonials == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonial not found'
            ]);
          
        }

        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }

    //this method will store a new testimonial
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'testimonial' => 'required',
            'citation' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ]);
        }

        $testimonial = new Testimonial();
        $testimonial->testimonial = $request->testimonial;
        $testimonial->citation = $request->citation;
        $testimonial->image = $request->image;
        $testimonial->designation = $request->designation;

        $testimonial->save();



        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $testimonial->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/testimonials/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/testimonials/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $testimonial->image = $fileName;
                $testimonial->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Testimonial created successfully',
        ]);
    }

    //this method will update a testimonial
    public function update(Request $request, $id)
    {

        $testimonial = Testimonial::find($id);
        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonial not found'
            ]);
        }
        $validator = Validator::make($request->all(), [
            'testimonial' => 'required',
            'citation' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ]);
        }


        $testimonial->testimonial = $request->testimonial;
        $testimonial->citation = $request->citation;
        $testimonial->image = $request->image;
        $testimonial->designation = $request->designation;
        $testimonial->save();



        if ($request->imageId > 0) {
            $oldImage = $testimonial->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $testimonial->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/testimonials/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/testimonials/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $testimonial->image = $fileName;
                $testimonial->save();

                // delete old image
                if ($oldImage != '') {
                    File::delete(public_path('uploads/testimonials/small/' . $oldImage));
                    File::delete(public_path('uploads/testimonials/large/' . $oldImage));
                }
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Testimonial updated successfully',
        ]);
    }

    //this method will delete a testimonial
    public function destroy($id) {

        $testimonial = Testimonial::find($id);
        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonial not found'
            ]);
        }

        $testimonial->delete();

        return response()->json([
            'status' => true,
            'message' => 'Testimonial deleted successfully',
        ]);
    }
}
