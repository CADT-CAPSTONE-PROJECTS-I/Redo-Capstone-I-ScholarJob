<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $table = 'members';
        
    protected $fillable = ['name', 'position', 'description', 'contact', 'image'];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        if (empty($this->attributes['image'])) {
            return null;
        }
        return asset($this->attributes['image']);
    }
}