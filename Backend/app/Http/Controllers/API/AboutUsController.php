<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AboutUs;
use Illuminate\Http\JsonResponse;

class AboutUsController extends Controller
{
    public function index(): JsonResponse
    {
        $about = AboutUs::first();
        return response()->json($about);
    }
}