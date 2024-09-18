<?php

namespace App\Http\Controllers\Backend;

use App\Models\Job;
use App\Models\Organization;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrUpdateJobRequest; 

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::with(['organization', 'category'])->paginate(10);
        return view('job.index', compact('jobs'));
    }

    public function create()
    {
        $organizations = Organization::pluck('name', 'id');
        $categories = Category::pluck('title', 'id');
    
        return view('job.create', compact('organizations', 'categories'));
    }
    
    public function store(StoreOrUpdateJobRequest $request)
    {
        $validatedData = $request->validated();
        
        try {
            if ($request->hasFile('image')) {
                $path = $request->file('image')->move(public_path('image'), $request->file('image')->getClientOriginalName());
                $validatedData['image'] = 'image/' . $request->file('image')->getClientOriginalName();
            }

            Job::create($validatedData);

            return redirect()->route('jobs.index')->with('success', 'Job created successfully.');
        } catch (\Exception $e) {
            return back()->withInput()->with('error', 'Failed to create job. Please try again.');
        }
    }

    public function show($id)
    {
        $job = Job::with(['organization', 'category'])->findOrFail($id);
        $organizations = Organization::pluck('name', 'id');
        $categories = Category::pluck('title', 'id');
 
        return view('job.edit', compact('job', 'organizations', 'categories'));
    }

    public function update(StoreOrUpdateJobRequest $request, $id)
    {
        $validatedData = $request->validated();

        try {
            $job = Job::findOrFail($id);
            
            if ($request->hasFile('image')) {
                $path = $request->file('image')->move(public_path('image'), $request->file('image')->getClientOriginalName());
                $validatedData['image'] = 'image/' . $request->file('image')->getClientOriginalName();
            }

            $job->update($validatedData);

            return redirect()->route('jobs.index')->with('success', 'Job updated successfully.');
        } catch (\Exception $e) {
            return back()->withInput()->with('error', 'Failed to update job. Please try again.');
        }
    }

    public function destroy($id)
    {
        try {
            $job = Job::findOrFail($id);
            $job->delete();
            return redirect()->route('jobs.index')->with('success', 'Job deleted successfully.');
        } catch (\Exception $e) {
            
            return back()->with('error', 'Failed to delete job. Please try again.');
        }
    }
}