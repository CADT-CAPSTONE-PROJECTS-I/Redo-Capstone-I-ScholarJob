<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutUs extends Model
{
    use HasFactory;

    protected $table = 'about_us';

    // Disable auto-incrementing of the ID since we are fixing it to 1
    public $incrementing = false;

    protected $fillable = [
        'content',
        'mission',
        'vision',
        'name',
        'position',
        'description',
        'contact',
        'image',
    ];
}
