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
        'working_day_from', 'working_day_to', 'contact', 'image'
    ];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}