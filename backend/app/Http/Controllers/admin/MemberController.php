<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;
use Illuminate\Support\Facades\Validator;
use App\Models\TempImage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;

class MemberController extends Controller
{
    // This method will return all members
    public function index()
    {
        $members = Member::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $members
        ]);
    }

    // This method will store a member
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'job_title' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $member = new Member();
        $member->name = $request->name;
        $member->image = $request->image;
        $member->job_title = $request->job_title;
        $member->linkedin_link = $request->linkedin_link;
        $member->status = $request->status;
        $member->save();


        //Save Temp Image

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $member->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/members/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/members/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $member->image = $fileName;
                $member->save();
            }
        }


        return response()->json([
            'status' => true,
            'message' => 'Member created successfully'
        ]);
    }

    // This method will update a member
    public function update(Request $request, $id)
    {
        $member = Member::find($id);
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found'
            ]);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'job_title' => 'required',
            
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $member->name = $request->name;
        $member->image = $request->image;
        $member->job_title = $request->job_title;
        $member->linkedin_link = $request->linkedin_link;
        $member->status = $request->status;
        $member->save();


        if ($request->imageId > 0) {
            $oldImage = $member->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {

                $extArray = explode(".", $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $member->id . '.' . $ext;

                // create small thumbnail here 
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destinationPath = public_path('uploads/members/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                // create large thumbnail here 

                $destinationPath = public_path('uploads/members/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $member->image = $fileName;
                $member->save();

                // delete old image
                if ($oldImage != '') {
                    File::delete(public_path('uploads/members/small/' . $oldImage));
                    File::delete(public_path('uploads/members/large/' . $oldImage));
                }
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Member updated successfully'
        ]);
    }


    // This method will delete a member
    public function destroy($id)
    {
        $member = Member::find($id);
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found'
            ]);
        }
        $member->delete();

        return response()->json([
            'status' => true,
            'message' => 'Member deleted successfully'
        ]);
    }


    // This method will show a member
    public function show($id)
    {
        $member = Member::find($id);
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found'
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $member
        ]);
    }
}
