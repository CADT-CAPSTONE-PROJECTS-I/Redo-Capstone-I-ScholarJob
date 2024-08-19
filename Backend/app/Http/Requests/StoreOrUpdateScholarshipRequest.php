<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrUpdateScholarshipRequest extends FormRequest
{
    public function authorize()
    {
        return true; 
    }

    public function rules()
    {
        return [
            'organization_id' => 'required|exists:organizations,id',
            'degree' => 'required|string|max:255',
            'eligibility' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'deadline' => 'required|date',
            'offer' => 'required|string|max:255',
            'award' => 'nullable|numeric',
            'available_position' => 'required|numeric',
            'image' => 'nullable|image|max:2048',
            'major' => 'nullable|string|max:255',
            'english_proficiency' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'age' => 'nullable|string',
            'program_duration' => 'nullable|string|max:255',
            'gpa' => 'nullable|string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'organization_id.required' => 'The organization field is required.',
            'organization_id.exists' => 'The selected organization is invalid.',
            'degree.required' => 'The degree field is required.',
            'eligibility.required' => 'The eligibility field is required.',
            'qualification.required' => 'The qualification field is required.',
            'deadline.required' => 'The deadline field is required.',
            'offer.required' => 'The offer field is required.',
            'available_position.required' => 'The available positions field is required.',
            'available_position.numeric' => 'The available positions must be a number.',
            'image.image' => 'The image must be a valid image file.',
            'image.max' => 'The image size must not exceed 2MB.',
            'major.string' => 'The major must be a string.',
            'english_proficiency.string' => 'The English proficiency must be a string.',
            'location.string' => 'The location must be a string.',
            'age.string' => 'The age must be a string.',
            'program_duration.string' => 'The program duration must be a string.',
            'gpa.string' => 'The GPA must be a string.',
        ];
    }
}