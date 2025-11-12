<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    // this method will return all testimonials
    public function index()
    {
        $testimonials = Testimonial::orderBy('created_at', 'desc')
            ->where('status', 1)
            ->get();
        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }


    
}
