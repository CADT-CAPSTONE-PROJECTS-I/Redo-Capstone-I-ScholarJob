<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{

    public function listAll()
    {
        $organizations = Organization::paginate(20);

        return response()->json([
            'status' => true,
            'message' => 'Organizations retrieved successfully',
            'data' => $organizations
        ], 200);
    }
    public function list()
    {
        $organizations = Organization::orderBy('created_at', 'desc')->take(10)->get();

        return response()->json([
            'status' => true,
            'message' => 'Recent organizations retrieved successfully',
            'data' => $organizations
        ], 200);
    }

    public function detail($id)
    {
        $organization = Organization::find($id);

        if (!$organization) {
            return response()->json([
                'status' => false,
                'message' => 'Organization not found',
                'data' => null
            ], 404);
        }

        return response()->json([
            'status' => true,
            'message' => 'Organization retrieved successfully',
            'data' => $organization
        ], 200);
    }


}