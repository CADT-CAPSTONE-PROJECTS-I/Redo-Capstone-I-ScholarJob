<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrUpdateOrganizationRequest extends FormRequest
{
    public function authorize()
    {
        return true; 
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'industry_type' => 'nullable|string|max:255',
            'website' => 'nullable|url',
            'address' => 'required|string',
            'phone_number' => 'required|string|max:15',
            'contact' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'The name field is required.',
            'address.required' => 'The address field is required.',
            'phone_number.required' => 'The phone number field is required.',
            'contact.required' => 'The contact field is required.',
            'image.image' => 'The image must be a valid image file.',
            'image.max' => 'The image size must not exceed 2MB.',
        ];
    }
}