<?php

namespace App\Http\Controllers\Backend;

use App\Models\Organization;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreOrUpdateOrganizationRequest; 

class OrganizationController extends Controller

{
    public function index(Request $request)
    {
        $search = $request->input('search');
        
        $organizations = Organization::query()
            ->when($search, function ($query, $search) {
                return $query->where('name', 'LIKE', "%{$search}%")
                             ->orWhere('industry_type', 'LIKE', "%{$search}%");
            })
            ->paginate(10);

        return view('organization.index', compact('organizations'));
    }

    public function create()
    {
    
        return view('organization.create');
    }
    
    public function store(StoreOrUpdateOrganizationRequest $request)
    {
        $validatedData = $request->validated();
        
        try {
            if ($request->hasFile('image')) {
                $path = $request->file('image')->move(public_path('image'), $request->file('image')->getClientOriginalName());
                $validatedData['image'] = 'image/' . $request->file('image')->getClientOriginalName();
            }

            Organization::create($validatedData);

            return redirect()->route('organizations.index')->with('success', 'Organization created successfully.');
        } catch (\Exception $e) {
            return back()->withInput()->with('error', 'Failed to create Organization. Please try again.');
        }
    }

    public function show($id)
    {
        $organization = Organization::findOrFail($id);
        
        return view('organization.edit',compact('organization'));
    }

    public function update(StoreOrUpdateOrganizationRequest $request, $id)
    {
        $validatedData = $request->validated();

        try {
            $organization = Organization::findOrFail($id);
            
            if ($request->hasFile('image')) {
                $path = $request->file('image')->move(public_path('image'), $request->file('image')->getClientOriginalName());
                $validatedData['image'] = 'image/' . $request->file('image')->getClientOriginalName();
            }

            $organization->update($validatedData);

            return redirect()->route('organizations.index')->with('success', 'organization updated successfully.');
        } catch (\Exception $e) {
            return back()->withInput()->with('error', 'Failed to update organization. Please try again.');
        }
    }

    public function destroy($id)
    {
        try {
            $organization = Organization::findOrFail($id);
            $organization->delete();
            return redirect()->route('organizations.index')->with('success', 'organization deleted successfully.');
        } catch (\Exception $e) {
            
            return back()->with('error', 'Failed to delete organization. Please try again.');
        }
    }
}