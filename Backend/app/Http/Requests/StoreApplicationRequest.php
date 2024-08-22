<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'client_id' => 'required|exists:clients,id',
            'job_id' => 'nullable|integer|exists:jobs,id|different:scholarship_id',
            'scholarship_id' => 'nullable|integer|exists:scholarships,id|different:job_id',
            'status' => 'nullable|string|max:255',
            'attach_file' => 'nullable|file|mimes:pdf|max:2048',
        ];
    }

    public function messages()
    {
        return [
            'job_id.different' => 'Job ID and Scholarship ID cannot both be provided.',
            'scholarship_id.different' => 'Scholarship ID and Job ID cannot both be provided.',
        ];
    }
}