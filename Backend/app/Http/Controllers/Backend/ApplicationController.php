<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\Client;
use App\Models\Job;
use App\Models\Scholarship;
use ZipArchive;
use Illuminate\Support\Facades\Storage;


class ApplicationController extends Controller
{
    public function index(Request $request)
    {
       
        $query = Application::query();


        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->whereHas('client', function($q) use ($searchTerm) {
                $q->where('name', 'like', '%' . $searchTerm . '%');
            })
            ->orWhereHas('jobs', function($q) use ($searchTerm) {
                $q->where('title', 'like', '%' . $searchTerm . '%');
            })
            ->orWhereHas('scholarship', function($q) use ($searchTerm) {
                $q->where('name', 'like', '%' . $searchTerm . '%');
            });
        }

        $applications = $query->with(['client', 'job', 'scholarship'])->paginate(10);

        return view('application.index', compact('applications'));
    }

    
    public function downloadFile($id)
    {
        $application = Application::findOrFail($id);

        if ($application->attach_file) {
            $filePath = storage_path('app/public/' . $application->attach_file);

            if (file_exists($filePath)) {
                return response()->download($filePath);
            } else {
                return redirect()->back()->with('error', 'File not found.');
            }
        } else {
            return redirect()->back()->with('error', 'No file attached.');
        }
    }

    public function downloadAllFiles()
    {
        $applications = Application::whereNotNull('attach_file')->get();
        $zipFileName = 'All_User_Attachment_files.zip';
        $zipFilePath = storage_path('app/public/' . $zipFileName);

        $zip = new ZipArchive;

        if ($zip->open($zipFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
            foreach ($applications as $application) {
                $filePath = storage_path('app/public/' . $application->attach_file);
                if (file_exists($filePath)) {
                    $relativeNameInZipFile = basename($filePath);
                    $zip->addFile($filePath, $relativeNameInZipFile);
                }
            }
            $zip->close();
        } else {
            return redirect()->back()->with('error', 'Could not create ZIP file.');
        }

        return response()->download($zipFilePath)->deleteFileAfterSend(true);
    }



    public function create()
    {
        
        $clients = Client::all();
        $jobs = Job::all();
        $scholarships = Scholarship::all(); 

        return view('application.create', compact('clients', 'jobs', 'scholarships'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'client_id' => 'required',
            'job_id' => 'nullable',
            'scholarship_id' => 'nullable',
            'status' => 'required',
            'attach_file' => 'nullable|file|mimes:pdf|max:2048',
        ]);

        $application = new Application();
        $application->client_id = $request->client_id;
        $application->job_id = $request->job_id;
        $application->scholarship_id = $request->scholarship_id;
        $application->status = $request->status;

        if ($request->hasFile('attach_file')) {
            $file = $request->file('attach_file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('applications', $filename, 'public');
            $application->attach_file = $path;
        }

        $application->save();

        return redirect()->route('applications.index')->with('success', 'Application created successfully.');
    }

}