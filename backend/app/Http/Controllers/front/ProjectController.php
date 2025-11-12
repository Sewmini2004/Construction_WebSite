<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function latestProjects(Request $request)
    {
        $projects = Project::orderBy('created_at', 'desc')
        ->where('status', 1)
        ->limit($request->limit)
        ->get();

        return response()->json([
            'status' => true,
            'data' => $projects
        ]);



    }


    public function allProjects()
    {
        $projects = Project::orderBy('created_at', 'desc')
        ->where('status', 1)
        ->get();

        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }


    public function project($id)
    {
        $projects = Project::find($id);

        if ($projects == null) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }
}
