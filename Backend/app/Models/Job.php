<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id', 'organization_id', 'title', 'description',
        'age_require', 'qualification', 'salary', 'deadline', 'available_position',
        'contact', 'image','responsible','experience','job_type'
    ];
    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return asset($this->attributes['image']);
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}