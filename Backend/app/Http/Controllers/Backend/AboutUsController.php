<?php

namespace App\Http\Controllers\Backend;

use App\Models\AboutUs;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AboutUsController extends Controller
{
    public function index() {
        $about = AboutUs::first(); 
        return view('about.index', compact('about'));
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
}