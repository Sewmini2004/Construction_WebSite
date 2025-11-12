<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\TempImage;  
use Intervention\Image\ImageManager;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;



class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $services = Service::orderBy('created_at', 'desc')->get();
       return response()->json([
           'status' => 'true',
           'services' => $services,
       ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'title' => 'required',

        ]);

        if ($validated->fails()) {
            return response()->json([
                'status' => 'false',
                'errors' => $validated->errors(),
            ]);
        }

        $model = new Service();
        $model->title = $request->title;
        $model->short_desc = $request->short_desc;
        $model->content = $request->content;
        $model->image = $request->image;
        $model->status = $request->status;
        $model->save();

        //Save Temp Image

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $model->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/services/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/services/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $model->image = $fileName;
                $model->save();

            }
        }


        return response()->json([
            'status' => 'true',
            'message' => 'Service created successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $service = Service::find($id);

        if ($service == null) {
           return response()->json([
                'status' => 'false',
                'message' => 'Service not found',
            ]);
        }

        return response()->json([
            'status' => 'true',
            'service' => $service,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $service = Service::find($id);

        if ($service == null) {
           return response()->json([
                'status' => 'false',
                'message' => 'Service not found',
            ]);
        }
               $validated = Validator::make($request->all(), [
            'title' => 'required',

        ]);

        if ($validated->fails()) {
            return response()->json([
                'status' => 'false',
                'errors' => $validated->errors(),
            ]);
        }

        $service->title = $request->title;
        $service->short_desc = $request->short_desc;
        $service->content = $request->content;
        $service->image = $request->image;
        $service->status = $request->status;
        $service->save();

        //Save Temp Image

        if($request->imageId > 0){
            $oldImage = $service->image;
            $tempImage = TempImage::find($request->imageId);
          if($tempImage != null){
           
            $extArray = explode(".", $tempImage->name);
            $ext = last($extArray);
            $fileName = strtotime('now').$service->id.'.'.$ext;

            // create small thumbnail here 
            $sourcePath = public_path('uploads/temp/'.$tempImage->name);
            $destinationPath = public_path('uploads/services/small/'.$fileName);
            $manager = new ImageManager(Driver::class);
            $image = $manager->read($sourcePath);
            $image->coverDown(500,600);
            $image->save($destinationPath);

            // create large thumbnail here 
        
            $destinationPath = public_path('uploads/services/large/' . $fileName);
            $manager = new ImageManager(Driver::class);
            $image = $manager->read($sourcePath);
            $image->scaleDown(1200);
            $image->save($destinationPath);

            $service->image = $fileName;
            $service->save();

            // delete old image
            if($oldImage != ''){
                File::delete(public_path('uploads/services/small/'.$oldImage));
                File::delete(public_path('uploads/services/large/'.$oldImage));
                
            }          
          }
        }

        return response()->json([
            'status' => 'true',
            'message' => 'Service updated successfully',
        ]); 
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service = Service::find($id);

        if ($service == null) {
           return response()->json([
                'status' => 'false',
                'message' => 'Service not found',
            ]);
        }

        $service->delete();

        return response()->json([
            'status' => 'true',
            'message' => 'Service deleted successfully',
        ]);
    }
}
