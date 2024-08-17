<?php
namespace App\Http\Controllers\Backend;

use App\Models\Scholarship;
use App\Models\Organization;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ScholarshipController extends Controller
{
    public function index()
    {
        $scholarships = Scholarship::paginate(10);
        return view('scholarship.index', compact('scholarships'));
    }

    public function create()
    {
        $organizations = Organization::all();
        return view('scholarship.create', compact('organizations'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'organization_id' => 'required|exists:organizations,id',
            'degree' => 'required|string|max:255',
            'eligibility' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'deadline' => 'required|date',
            'offer' => 'required|string|max:255',
            'award' => 'required|numeric',
            'available_position' => 'required|numeric',
            'image' => 'nullable|image|max:2048',
        ]);
    
        try {
            if ($request->hasFile('image')) {
                $path = $request->file('image')->move(public_path('image'), $request->file('image')->getClientOriginalName());
                $validatedData['image'] = 'image/' . $request->file('image')->getClientOriginalName();
            }
    
            Scholarship::create($validatedData);
    
            return redirect()->route('scholarships.index')->with('success', 'Scholarship created successfully.');
        } catch (\Exception $e) {
            return back()->withInput()->with('error', 'Failed to create scholarship. Please try again.');
        }
    }
    
    

    public function show($id)
    {
        $scholarship = Scholarship::findOrFail($id);
        $organizations = Organization::all();
        return view('scholarship.edit', compact('scholarship', 'organizations'));
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'organization_id' => 'required|exists:organizations,id',
            'degree' => 'required|string|max:255',
            'eligibility' => 'required|string|max:255',
            'qualification' => 'required|string|max:255',
            'deadline' => 'required|date',
            'offer' => 'required|string|max:255',
            'award' => 'required|numeric',
            'available_position' => 'required|numeric',
            'image' => 'nullable|image|max:2048',
        ]);

        try {
            $scholarship = Scholarship::findOrFail($id);
            $scholarship->update($validatedData);
            return redirect()->route('scholarships.index')->with('success', 'Scholarship updated successfully.');
        } catch (\Exception $e) {
            return back()->withInput()->with('error', 'Failed to update scholarship. Please try again.');
        }
    }

    public function destroy($id)
    {
        try {
            $scholarship = Scholarship::findOrFail($id);
            $scholarship->delete();
            return redirect()->route('scholarships.index')->with('success', 'Scholarship deleted successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to delete scholarship. Please try again.');
        }
    }
}