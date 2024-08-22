<?php

namespace App\Http\Controllers\Backend;
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;
use App\Models\User;
use App\Models\Client; 
use App\Models\Organization;
use App\Models\Scholarship; 
use App\Models\Application; 
use DB;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $jobCount = Job::count();
        $scholarshipCount = Scholarship::count();
        $userCount = User::count();
        $organizationCount = Organization::count();
        $clientCount = Client::count(); 

     
        $jobsByMonth = Job::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
                        ->groupBy('month')
                        ->pluck('count', 'month');

        $scholarshipsByMonth = Scholarship::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
                                        ->groupBy('month')
                                        ->pluck('count', 'month');

        $userDistribution = User::select(DB::raw('roles.name as role, COUNT(users.id) as count'))
                                ->join('roles', 'users.role_id', '=', 'roles.id')
                                ->groupBy('roles.name')
                                ->pluck('count', 'role');
                                
        $clientsByMonth = Client::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
                                ->groupBy('month')
                                ->pluck('count', 'month');
        $applicationsJobByMonth = Application::whereNotNull('job_id')
            ->selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->groupBy('month')
            ->pluck('count', 'month');
        
        $applicationsScholarshipByMonth = Application::whereNotNull('scholarship_id')
            ->selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->groupBy('month')
            ->pluck('count', 'month');
        
        $applicationDistribution = [
            'Applied for Job' => Application::whereNotNull('job_id')->count(),
            'Applied for Scholarship' => Application::whereNotNull('scholarship_id')->count(),
        ];
                            

        return view('dashboard.index', compact(
            'jobCount', 
            'scholarshipCount', 
            'userCount', 
            'organizationCount', 
            'clientCount',  
            'jobsByMonth', 
            'scholarshipsByMonth', 
            'userDistribution', 
            'clientsByMonth',
            'applicationsJobByMonth',
            'applicationsScholarshipByMonth',
            'applicationDistribution',
        ));
    }
}