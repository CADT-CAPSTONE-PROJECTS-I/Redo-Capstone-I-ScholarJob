<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\Scholarship;
use App\Models\Organization;
use App\Models\Application;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function index()
    {
        $urgentJobs = Job::where('urgent', 1)->take(10)->get();

        $totalUrgentJobsCount = Job::where('urgent', 1)->count();

        $scholarships = Scholarship::orderBy('available_position', 'desc')->take(10)->get();

        $topOrganizations = Organization::withCount([
            'jobs as job_applications_count' => function($query) {
                $query->join('applications', 'jobs.id', '=', 'applications.job_id')
                      ->selectRaw('count(applications.id)');
            },
            'scholarships as scholarship_applications_count' => function($query) {
                $query->join('applications', 'scholarships.id', '=', 'applications.scholarship_id')
                      ->selectRaw('count(applications.id)');
            }
        ])
        ->orderBy('job_applications_count', 'desc')
        ->orderBy('scholarship_applications_count', 'desc')
        ->take(10)
        ->get();

        return response()->json([
            'urgent_jobs' => $urgentJobs,
            'total_urgent_jobs_count' => $totalUrgentJobsCount,
            'scholarships_with_most_positions' => $scholarships,
            'top_organizations' => $topOrganizations
        ]);
    }

    public function ListUrgentJobs()
    {
        $urgentJobs = Job::where('urgent', 1)->get();

        return response()->json([
            'urgent_jobs' => $urgentJobs
        ]);
    }
}