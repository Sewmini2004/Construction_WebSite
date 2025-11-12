<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\front\ArticleController as FrontArticleController;
use App\Http\Controllers\front\TestimonialController as FrontTestimonialController;
use App\Http\Controllers\front\MemberController as FrontMemberController;
use App\Http\Controllers\front\ContactController as FrontContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// --- PUBLIC ROUTES (No Authentication Required) ---
Route::post('authenticate', [AuthenticationController::class, 'authentication']);
Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-latest-services', [FrontServiceController::class, 'latestServices']);
Route::get('get-service/{id}', [FrontServiceController::class, 'service']);

// THIS IS YOUR PUBLIC PROJECT ROUTE
Route::get('get-latest-projects', [FrontProjectController::class, 'latestProjects']);

Route::get('get-all-projects', [FrontProjectController::class, 'allProjects']);
Route::get('get-project/{id}', [FrontProjectController::class, 'project']);

// THIS IS YOUR PUBLIC ARTICLE ROUTE
Route::get('get-latest-articles', [FrontArticleController::class, 'latestArticles']);
Route::get('get-all-articles', [FrontArticleController::class, 'index']);
Route::get('get-article/{id}', [FrontArticleController::class, 'article']);

Route::get('get-testimonials', [FrontTestimonialController::class, 'index']);

Route::get('get-members', [FrontMemberController::class, 'index']);

Route::post('contact', [FrontContactController::class, 'index']);

// --- PROTECTED ROUTES (Requires auth:sanctum) ---
Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    // Add all your protected routes here, like the admin version of project listings
    // Note: Use a different URI or Controller for admin access if necessary to avoid conflicts
    Route::get('/dashboard', [\App\Http\Controllers\admin\DashboardController::class, 'index']);
    Route::post('/logout', [AuthenticationController::class, 'logout']);

    // Admin/Protected Project Routes (Consider different names like 'admin/get-latest-projects')
    Route::get('admin/get-latest-projects', [\App\Http\Controllers\admin\ProjectController::class, 'latestProjects']);
    Route::get('admin/get-all-projects', [\App\Http\Controllers\admin\ProjectController::class, 'allProjects']);

    // ... all other admin routes (service, project store/update/delete, etc.)
    // service
    Route::post('/service/store', [\App\Http\Controllers\admin\ServiceController::class, 'store']);
    Route::get('/service/index', [\App\Http\Controllers\admin\ServiceController::class, 'index']);
    Route::put('/service/update/{id}', [\App\Http\Controllers\admin\ServiceController::class, 'update']);
    Route::get('/service/show/{id}', [\App\Http\Controllers\admin\ServiceController::class, 'show']);
    Route::delete('/service/delete/{id}', [\App\Http\Controllers\admin\ServiceController::class, 'destroy']);


    //temp image
    Route::post('/temp-image/store', [\App\Http\Controllers\admin\TempImageController::class, 'store']);


    //project Routes
    Route::post('/project/store', [\App\Http\Controllers\admin\ProjectController::class, 'store']);
    Route::get('/projects', [\App\Http\Controllers\admin\ProjectController::class, 'index']);
    Route::put('/project/update/{id}', [\App\Http\Controllers\admin\ProjectController::class, 'update']);
    Route::get('/project/show/{id}', [\App\Http\Controllers\admin\ProjectController::class, 'show']);
    Route::delete('/project/delete/{id}', [\App\Http\Controllers\admin\ProjectController::class, 'destroy']);


    //article Routes
    Route::post('/article/store', [\App\Http\Controllers\admin\ArticleController::class, 'store']);
    Route::get('/articles', [\App\Http\Controllers\admin\ArticleController::class, 'index']);
    Route::get('/article/show/{id}', [\App\Http\Controllers\admin\ArticleController::class, 'show']);
    Route::put('/article/update/{id}', [\App\Http\Controllers\admin\ArticleController::class, 'update']);
    Route::delete('/article/delete/{id}', [\App\Http\Controllers\admin\ArticleController::class, 'destroy']);


    //testimonial Routes
    Route::post('/testimonial/store', [\App\Http\Controllers\admin\TestimonialController::class, 'store']);
    Route::get('/testimonials', [\App\Http\Controllers\admin\TestimonialController::class, 'index']);
    Route::get('/testimonial/show/{id}', [\App\Http\Controllers\admin\TestimonialController::class, 'show']);
    Route::put('/testimonial/update/{id}', [\App\Http\Controllers\admin\TestimonialController::class, 'update']);
    Route::delete('/testimonial/delete/{id}', [\App\Http\Controllers\admin\TestimonialController::class, 'destroy']);




    //member Routes
    Route::post('/member/store', [\App\Http\Controllers\admin\MemberController::class, 'store']);
    Route::get('/members', [\App\Http\Controllers\admin\MemberController::class, 'index']);
    Route::get('/member/show/{id}', [\App\Http\Controllers\admin\MemberController::class, 'show']);
    Route::put('/member/update/{id}', [\App\Http\Controllers\admin\MemberController::class, 'update']);
    Route::delete('/member/delete/{id}', [\App\Http\Controllers\admin\MemberController::class, 'destroy']);
});
