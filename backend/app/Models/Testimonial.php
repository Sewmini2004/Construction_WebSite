<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $table = 'tesimonials';
   protected $fillable = [
        'testimonial',
        'citation',
        'image',
        'status',
    ];
}
