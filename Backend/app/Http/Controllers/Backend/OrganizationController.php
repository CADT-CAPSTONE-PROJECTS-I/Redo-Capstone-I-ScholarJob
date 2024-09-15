<?php

namespace App\Http\Controllers\Backend;

use App\Models\Organization;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

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

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'industry_type' => 'nullable',
            'website' => 'nullable',
            'address' => 'required',
            'phone_number' => 'required',
            'contact' => 'required',
            'email' => 'nullable|email',
            'about' => 'nullable',
            'location' => 'nullable',
            'offer_policy' => 'nullable',
            'founded' => 'nullable|date',
            'hour_of_operation' => 'nullable',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images/organizations', 'public');
        }

        Organization::create([
            'name' => $request->name,
            'industry_type' => $request->industry_type,
            'website' => $request->website,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'contact' => $request->contact,
            'email' => $request->email,
            'about' => $request->about,
            'location' => $request->location,
            'offer_policy' => $request->offer_policy,
            'founded' => $request->founded,
            'hour_of_operation' => $request->hour_of_operation,
            'image' => $imagePath ?? null,
        ]);

        return redirect()->route('organizations.index')->with('success', 'Organization created successfully!');
    }

    public function show($id)
    {
        $organization = Organization::findOrFail($id);
        return view('organization.edit', compact('organization'));
    }

    public function update(Request $request, $id)
    {
        $organization = Organization::findOrFail($id);

        $request->validate([
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
        ]);

        if ($request->hasFile('image')) {
            if ($organization->image) {
                Storage::disk('public')->delete($organization->image);
            }
            $imagePath = $request->file('image')->store('images/organizations', 'public');
        }

        $organization->update([
            'name' => $request->name,
            'industry_type' => $request->industry_type,
            'website' => $request->website,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'contact' => $request->contact,
            'email' => $request->email,
            'about' => $request->about,
            'location' => $request->location,
            'offer_policy' => $request->offer_policy,
            'founded' => $request->founded,
            'hour_of_operation' => $request->hour_of_operation,
            'image' => $imagePath ?? $organization->image,
        ]);

        return redirect()->route('organizations.index')->with('success', 'Organization updated successfully!');
    }

    public function destroy($id)
    {
        $organization = Organization::findOrFail($id);

        if ($organization->image) {
            Storage::disk('public')->delete($organization->image);
        }

        $organization->delete();

        return redirect()->route('organizations.index')->with('success', 'Organization deleted successfully!');
    }
}