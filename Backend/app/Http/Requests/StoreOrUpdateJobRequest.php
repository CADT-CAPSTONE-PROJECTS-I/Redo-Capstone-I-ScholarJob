<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrUpdateJobRequest extends FormRequest
{
    public function authorize()
    {
        return true; 
    }

    public function rules()
    {
        return [
            'category_id' => 'required|exists:categories,id',
            'organization_id' => 'required|exists:organizations,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'age_require' => 'nullable|string',
            'qualification' => 'nullable|string|max:255',
            'salary' => 'required|numeric',
            'deadline' => 'required|date',
            'available_position' => 'required|integer',
            'experience' => 'nullable|string',
            'responsible' => 'nullable|string',
            'job_type' => 'required|string',
            'contact' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
        ];
    }

    public function messages()
    {
        return [
            'category_id.required' => 'The category field is required.',
            'organization_id.required' => 'The organization field is required.',
            'title.required' => 'The title field is required.',
            'description.required' => 'The description field is required.',
            'salary.required' => 'The salary field is required.',
            'deadline.required' => 'The deadline field is required.',
            'available_position.required' => 'The available positions field is required.',
            'job_type.required' => 'The job type field is required.',
            'image.image' => 'The image must be a valid image file.',
            'image.max' => 'The image size must not exceed 2MB.',
        ];
    }
}