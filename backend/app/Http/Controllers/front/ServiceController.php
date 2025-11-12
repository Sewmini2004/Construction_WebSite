<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
    // this method will return all active services
    public function index()
    {
        $services = Service::where('status', 1)->orderBy('created_at', 'desc')->get();

        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    // this method will return all latest active services
    public function latestServices(Request $request)
    {
        $services = Service::where('status', 1)
            ->take($request->limit)
            ->orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }


    // this method will return a single services
    public function service($id)
    {
        $services = Service::find($id);

        if ($services == null) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }
}
