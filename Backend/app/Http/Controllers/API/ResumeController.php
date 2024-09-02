<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ResumeController extends Controller
{
    public function createOrUpdate(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'nullable|string|max:255',
            'phone_number' => 'nullable|string|max:20',
            'email' => 'nullable|string|email|max:255',
            'address' => 'nullable|string',
            'hard_skill' => 'nullable|string|max:255',
            'soft_skill' => 'nullable|string|max:255',
            'language' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'about' => 'nullable|string',
            'education' => 'nullable|string',
            'experience' => 'nullable|string',
            'reference' => 'nullable|string|max:255',
        ]);

   
        $client = $request->user(); 
        $clientId = $client->id;

        $resume = Resume::firstOrNew(['client_id' => $clientId]);


        if ($request->hasFile('image')) {
            if ($resume->image) {
                Storage::disk('public')->delete($resume->image); 
            }

            $imagePath = $request->file('image')->store('images/resumes', 'public');
            $validatedData['image'] = $imagePath;
        }

        $resume->fill($validatedData);
        $resume->save();

        return response()->json([
            'success' => true,
            'message' => $resume->wasRecentlyCreated ? 'Resume created successfully.' : 'Resume updated successfully.',
            'resume' => $resume,
        ]);
    }
}