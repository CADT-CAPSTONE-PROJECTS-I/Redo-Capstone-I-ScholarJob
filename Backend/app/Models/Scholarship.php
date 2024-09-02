<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scholarship extends Model
{
    use HasFactory;

    protected $fillable = [
        'organization_id', 'degree', 'eligibility', 'qualification',
        'deadline', 'offer', 'award', 'available_position', 'image',
        'english_proficiency','major','location','age','gpa','program_duration',
    ];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        if (empty($this->attributes['image'])) {
            return null;
        }
        return asset($this->attributes['image']);
    }
}