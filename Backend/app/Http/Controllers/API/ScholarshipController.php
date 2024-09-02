<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Scholarship;
use Illuminate\Http\Request;

class ScholarshipController extends Controller
{
    public function list(Request $request)
    {
        $query = Scholarship::query();

        if ($request->has('degree')) {
            $query->where('degree', $request->input('degree'));
        }

        if ($request->has('major')) {
            $query->where('major', 'like', '%' . $request->input('major') . '%');
        }

        if ($request->has('organization_id')) {
            $query->where('organization_id', $request->input('organization_id'));
        }

        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function($q) use ($search) {
                $q->where('degree', 'like', '%' . $search . '%')
                  ->orWhere('major', 'like', '%' . $search . '%')
                  ->orWhere('gpa', 'like', '%' . $search . '%');
            });
        }

        // Get pagination parameters from the request
        $perPage = $request->input('per_page', 10); // Default to 10 per page if not specified
        $page = $request->input('page', 1);

        // Paginate the query result
        $scholarships = $query->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'success' => true,
            'data' => $scholarships->items(),  // The items for the current page
            'total' => $scholarships->total(), // The total number of records
            'current_page' => $scholarships->currentPage(), // The current page
            'last_page' => $scholarships->lastPage(), // The last page number
            'per_page' => $scholarships->perPage(), // The number of items per page
        ]);
    }

    public function detail($id)
    {
        $scholarship = Scholarship::findOrFail($id);
        return response()->json([
            'success' => true,
            'data' => $scholarship,
        ]);
    }
}