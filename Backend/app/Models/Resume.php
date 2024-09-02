<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $table = 'resumes';
    
    protected $fillable = [
        'name',
        'position',
        'phone_number',
        'email',
        'address',
        'hard_skill',
        'soft_skill',   
        'language',
        'image',
        'about',
        'education',
        'experience',
        'reference',
        'client_id'
    ];

    protected $casts = [
        'phone_number' => 'integer',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }


}