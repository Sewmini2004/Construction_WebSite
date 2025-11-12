<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TempImageController extends Controller
{
    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'status' => 'false',
                'errors' => $validated->errors('image'),
            ]);
        }

        $image = $request->image;
        if(!empty($image)){
            
            $text = $image->getClientOriginalName();
            $imageName = strtotime('now'). '.' .$text;

            $model = new TempImage();
            $model->name = $imageName;
            $model->save();

            $image->move(public_path('uploads/temp'), $imageName);
            return response()->json([
                'status' => 'true',
                'data' => $model,
                'message' => 'Image uploaded successfully',
                
            ]);
        }else{
            return response()->json([
                'status' => 'false',
                'message' => 'Image not uploaded',
            ]);
        }

    }
}
