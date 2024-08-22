<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreApplicationRequest;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApplicationController extends Controller
{

    public function store(StoreApplicationRequest $request)
    {
        $application = new Application();
        $application->client_id = $request->client_id;
        $application->job_id = $request->job_id;
        $application->scholarship_id = $request->scholarship_id;
        $application->status = $request->status;

        if ($request->hasFile('attach_file')) {
            $file = $request->file('attach_file');
            $filename = time() . '_' . $file->getClieqntOriginalName();
            $path = $file->storeAs('applications', $filename, 'public');
            $application->attach_file = $path;
        }

        $application->save();

        return response()->json([
            'success' => true,
            'message' => 'Application created successfully.',
            'data' => $application,
        ], 201);
    }


    public function index()
    {
        $applications = Application::with(['client', 'job', 'scholarship'])->get();

        return response()->json([
            'success' => true,
            'data' => $applications,
        ]);
    }
}