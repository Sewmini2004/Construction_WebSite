<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $table = 'members';
    protected $fillable = [
        'name',
        'image',
        'job_title',
        'linkedin_link',
        'status'
    ];
}
