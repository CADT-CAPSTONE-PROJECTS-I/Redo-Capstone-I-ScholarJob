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

        if ($request->filled('salary')) {
            $salary = $request->salary;
            if ($salary === '1000') {
                $query->whereRaw('CAST(salary AS UNSIGNED) < ?', [1000]);
            } elseif ($salary === '5000') {
                $query->whereRaw('CAST(salary AS UNSIGNED) BETWEEN ? AND ?', [1000, 5000]);
            } elseif ($salary === '5001') {
                $query->whereRaw('CAST(salary AS UNSIGNED) > ?', [5000]);
            }
        }

        if ($request->filled('job_type')) {
            $query->where('job_type', $request->job_type);
        }

        if ($request->filled('experience')) {
            $query->where('experience', '<=', $request->experience);
        }

        if ($request->filled('organization_address')) {
            $query->whereHas('organization', function ($q) use ($request) {
                $q->where('address', 'like', '%' . $request->organization_address . '%');
            });
        }

        $perPage = $request->input('per_page', 10); 
        $page = $request->input('page', 1);

        $jobs = $query->with(['organization', 'category'])
                      ->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'success' => true,
            'data' => $jobs->items(),
            'total' => $jobs->total(),
            'current_page' => $jobs->currentPage(), 
            'last_page' => $jobs->lastPage(), 
            'per_page' => $jobs->perPage(), 
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

    public function getAddress()
    {
        $addresses = Job::with('organization')
            ->select('organization_id')
            ->distinct()
            ->get()
            ->map(function ($job) {
                return $job->organization->address;
            })
            ->unique();

        return response()->json([
            'success' => true,
            'data' => $addresses,
        ]);
    }
}