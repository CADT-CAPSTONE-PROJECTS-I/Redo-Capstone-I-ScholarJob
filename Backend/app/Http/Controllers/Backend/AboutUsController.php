<?php

namespace App\Http\Controllers\Backend;

use App\Models\AboutUs;
use App\Models\Team;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AboutUsController extends Controller
{
    public function index() {
        $aboutUs = DB::table('about_us')->select('content', 'mission', 'vision')->first();
        $teamMembers = Team::all(); // Fetch all team members
    
        return view('aboutus.index', compact('aboutUs', 'teamMembers'));
    }    

    public function store(Request $request)
    {
        // Validate the incoming data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'description' => 'nullable|string',
            'contact' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle the image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('team_images', 'public');
        } else {
            $imagePath = null;
        }

        // Store the data in the database
        Team::create([
            'name' => $validated['name'],
            'position' => $validated['position'],
            'description' => $validated['description'] ?? null,
            'contact' => $validated['contact'] ?? null,
            'image' => $imagePath,
        ]);

        return redirect()->route('about_us.index')->with('success', 'Team member added successfully');
    }

    public function update(Request $request)
    {
        $request->validate([
            'content' => 'nullable|string',
            'mission' => 'nullable|string',
            'vision' => 'nullable|string',
            'name' => 'nullable|string|max:255',
            'position' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'contact' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        // Check if there is already a record with ID 1
        $aboutUs = \App\Models\AboutUs::find(1);
    
        // Handle image upload
        if ($request->hasFile('image')) {
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        } else {
            $imageName = $aboutUs ? $aboutUs->image : null;  // Keep existing image if not updated
        }
    
        if ($aboutUs) {
            // Update the existing record with ID 1
            $aboutUs->update([
                'content' => $request->content,
                'mission' => $request->mission,
                'vision' => $request->vision,
                'name' => $request->name,
                'position' => $request->position,
                'description' => $request->description,
                'contact' => $request->contact,
                'image' => $imageName,
            ]);
        } else {
            // Create a new record with fixed ID 1 if it doesn't exist
            \App\Models\AboutUs::create([
                'id' => 1,  // Fix the ID to 1
                'content' => $request->content,
                'mission' => $request->mission,
                'vision' => $request->vision,
                'name' => $request->name,
                'position' => $request->position,
                'description' => $request->description,
                'contact' => $request->contact,
                'image' => $imageName,
            ]);
        }
    
        return redirect()->back()->with('success', 'About Us section updated successfully.');
    }
}