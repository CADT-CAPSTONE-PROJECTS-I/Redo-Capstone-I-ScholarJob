<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id', 'scholarship_id', 'job_id', 'status', 'attach_file',
    ];

    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    public function scholarship()
    {
        return $this->belongsTo(Scholarship::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}