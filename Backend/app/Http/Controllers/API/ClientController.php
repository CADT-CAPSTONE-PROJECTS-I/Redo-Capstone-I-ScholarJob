<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ClientController extends Controller
{
    public function register(Request $request)
    {
        $validateClient = Validator::make($request->all(), [
            'name' => 'nullable',           
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($validateClient->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $validateClient->errors()
            ]);
        }

        $client = Client::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $client->createToken('authToken')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'client registered successfully',
            'token' => $token,
            'client_id' => $client->id,
            'data' => $client
        ]);
    }

    public function login(Request $request)
    {
        $validateLogin = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($validateLogin->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validateLogin->errors()
            ]);
        }

        $client = client::where('email', $request->email)->first();

        if (!$client || !Hash::check($request->password, $client->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid credentials',
            ], 401);
        }

        $token = $client->createToken('authToken')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'client logged in successfully',
            'token' => $token,
            'client_id' => $client->id,
            'data' => $client
        ]);
    }

    public function profile()
    {
        $client = auth()->user();
        return response()->json([
            'status' => true,
            'message' => 'Profile Information',
            'data' => $client,
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => true,
            'message' => 'client logged out successfully'
        ]);
    }

    public function updateProfile(Request $request)
    {
        $client = auth()->user();

        $validateclient = Validator::make($request->all(), [
            'name' => 'nullable',   
            'email' => 'nullable|email',
            'password' => 'nullable',
        ]);

     
        if ($validateclient->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validateclient->errors()
            ]);
        }

        $client->update([
            'name' => $request->name ?? $client->name,
            'email' => $request->email ?? $client->email,
            'password' => $request->password ? Hash::make($request->password) : $client->password,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Profile updated successfully',
            'data' => $client
        ]);
    }
}