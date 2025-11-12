<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\Project;
use App\Models\TempImage;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\File;
use Intervention\Image\Drivers\Gd\Driver;

class ProjectController extends Controller
{
    // this method will return all  projects
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $projects

        ]);
    }

    // this method will store a project
    public function store(Request $request)
    {

        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ]);
        }

        $project = new Project();
        $project->title = $request->title;
        $project->slug = Str::slug($request->slug);
        $project->short_desc = $request->short_desc;
        $project->content = $request->content;
        $project->construction_type = $request->construction_type;
        $project->sector = $request->sector;
        $project->location = $request->location;
        $project->image = $request->image;
        $project->status = $request->status;
        $project->save();


        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $project->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/projects/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/projects/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);
                $project->image = $fileName;


                $project->save();
            }
        }


        return response()->json([
            'status' => true,
            'errors' => $validator->errors(),
            'message' => 'Project created successfully'
        ]);
    }

    // this method will update a project

    public function update(Request $request, $id)
    {
        $project = Project::find($id);

        if ($project == null) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }

        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug,'.$id.',id'

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ]);
        }

        $project->title = $request->title;
        $project->slug = Str::slug($request->slug);
        $project->short_desc = $request->short_desc;
        $project->content = $request->content;
        $project->construction_type = $request->construction_type;
        $project->sector = $request->sector;
        $project->location = $request->location;
        $project->image = $request->image;
        $project->status = $request->status;
        $project->save();


        if ($request->imageId > 0) {
            $oldImage = $project->image;

            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $project->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/projects/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/projects/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $project->image = $fileName;
                $project->save();
            }

            // delete old image
            if ($oldImage != '') {
                File::delete(public_path('uploads/projects/small/' . $oldImage));
                File::delete(public_path('uploads/projects/large/' . $oldImage));
            }
        }


        return response()->json([
            'status' => true,
            'errors' => $validator->errors(),
            'message' => 'Project updated successfully'
        ]);
    }


    public function show($id)
    {
        $project = Project::find($id);

        if ($project == null) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'project' => $project,
        ]);
    

    }


    public function destroy($id)
    {
        $project = Project::find($id);

        if ($project == null) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }

        

        $project->delete();

        return response()->json([
            'status' => true,
            'message' => 'Project deleted successfully'
        ]);
    }
}
