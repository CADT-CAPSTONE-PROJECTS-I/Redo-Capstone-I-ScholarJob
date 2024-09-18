<?php

namespace App\Http\Controllers\Backend;

use App\Models\AboutUs;
use App\Models\Team;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class AboutUsController extends Controller
{
    public function index() {
        $about = AboutUs::first(); 
        $team = Team::all();
        return view('about.index', compact('about', 'team'));
    }

    public function storeOrUpdate(Request $request) {
        $request->validate([
            'mission' => 'required',
            'vision' => 'required',
            'content' => 'required',
        ]);

        $about = AboutUs::first();
        
        if ($about) {
            $about->update([
                'mission' => $request->mission,
                'vision' => $request->vision,
                'content' => $request->content,
            ]);
        } else {
            AboutUs::create([
                'mission' => $request->mission,
                'vision' => $request->vision,
                'content' => $request->content,
            ]);
        }

        return redirect()->back()->with('success', 'About Us section updated successfully.');
    }

    public function storeTeam(Request $request)
    {
      
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'description' => 'nullable|string',
            'contact' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

            if ($request->hasFile('image')) {
                $path = $request->file('image')->move(public_path('image'), $request->file('image')->getClientOriginalName());
                $validated['image'] = 'image/' . $request->file('image')->getClientOriginalName();
            }

        
        $teamMember = Team::create($validated);

        return response()->json(['success' => true, 'team' => $teamMember]);
    }

    public function updateTeam(Request $request, $id)
    {
        $teamMember = Team::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'description' => 'nullable|string',
            'contact' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        if ($request->hasFile('image')) {
            $path = $request->file('image')->move(public_path('image'), $request->file('image')->getClientOriginalName());
            $validated['image'] = 'image/' . $request->file('image')->getClientOriginalName();
        }

        $teamMember->update($validated);

        return response()->json(['success' => true, 'team' => $teamMember]);
    }

    public function showTeam($id)
    {
        $teamMember = Team::findOrFail($id);
        return response()->json(['success' => true, 'team' => $teamMember]);
    }
}