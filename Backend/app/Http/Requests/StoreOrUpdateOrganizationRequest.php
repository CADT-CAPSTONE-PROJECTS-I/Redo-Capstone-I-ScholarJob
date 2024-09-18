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
            'name' => 'required',
            'industry_type' => 'nullable',
            'website' => 'nullable',
            'address' => 'required',
            'phone_number' => 'required|string|max:15',
            'contact' => 'required',
            'email' => 'nullable|email',
            'about' => 'nullable',
            'location' => 'nullable',
            'offer_policy' => 'nullable',
            'founded' => 'nullable|date',
            'hour_of_operation' => 'nullable',
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