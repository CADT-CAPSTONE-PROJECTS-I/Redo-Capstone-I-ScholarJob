<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'industry_type', 'website', 'address', 'phone_number', 'contact', 'image'
    ];

    public function jobs()
    {
        return $this->hasMany(Job::class);
    }

    public function scholarships()
    {
        return $this->hasMany(Scholarship::class);
    }
    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}