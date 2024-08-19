<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{

    public function list(Request $request)
    {
        $query = Job::query();
    
   
        if ($request->filled('title')) {
            $query->where('title', 'like', '%' . $request->title . '%');
        }
    
        if ($request->filled('organization_id')) {
            $query->where('organization_id', $request->organization_id);
        }
    
        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }
    
        if ($request->filled('salary_min')) {
            $query->whereRaw('CAST(salary AS UNSIGNED) >= ?', [$request->salary_min]);
        }

        if ($request->filled('salary_max')) {
            $query->whereRaw('CAST(salary AS UNSIGNED) <= ?', [$request->salary_max]);
        }
    
        if ($request->filled('job_type')) {
            $query->where('job_type', $request->job_type);
        }
    
        if ($request->filled('experience')) {
       
            $query->where('experience', '<=', $request->experience);
        }
    
        $jobs = $query->with(['organization', 'category'])->get();

        return response()->json([
            'success' => true,
            'data' => $jobs,
        ]);
    }
    

    public function detail($id)
    {
        $job = Job::with(['organization', 'category'])->find($id);

        if (!$job) {
            return response()->json([
                'success' => false,
                'message' => 'Job not found.',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $job,
        ]);
    }
}