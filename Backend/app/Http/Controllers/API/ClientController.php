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
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:clients,email',
            'password' => 'required|string|min:8',
        ]);

        $client = Client::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'You have registered successfully!',
            'client' => $client,
        ], 200);
    }

    public function login(Request $request)
    {
        $validateLogin = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validateLogin->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validateLogin->errors()
            ]);
        }

        $client = Client::where('email', $request->email)->first();

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
            'data' => $client
        ]);
    }

    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required|string|email',
    //         'password' => 'required|string',
    //     ]);

    //     if (!Auth::attempt($request->only('email', 'password'))) {
    //         throw ValidationException::withMessages([
    //             'email' => ['The provided credentials are incorrect.'],
    //         ]);
    //     }

    //     $client = Auth::user();
    //     $token = $client->createToken('Personal Access Token')->plainTextToken;

    //     return response()->json([
    //         'message' => 'Login successful!',
    //         'token' => $token,
    //     ]);
    // }

    public function profile(Request $request)
    {
        return response()->json($request->user());
    }

    public function updateProfile(Request $request)
    {
        $client = $request->user();

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:clients,email,' . $client->id,
            'password' => 'sometimes|nullable|string|min:8|confirmed',
        ]);

        if ($request->has('name')) {
            $client->name = $request->name;
        }

        if ($request->has('email')) {
            $client->email = $request->email;
        }

        if ($request->has('password')) {
            $client->password = Hash::make($request->password);
        }

        $client->save();

        return response()->json([
            'message' => 'Profile updated successfully!',
            'client' => $client,
        ]);
    }
}