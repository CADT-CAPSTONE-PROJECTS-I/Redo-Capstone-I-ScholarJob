<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scholarship extends Model
{
    use HasFactory;

    protected $fillable = [
        'organization_id', 'degree', 'eligibility', 'qualification',
        'deadline', 'offer', 'award', 'available_position', 'image'
    ];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}