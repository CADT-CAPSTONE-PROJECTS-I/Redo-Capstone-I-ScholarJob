<?php

namespace App\Http\Controllers\Backend;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class AccountController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->get('search');
    
        $users = User::when($query, function ($queryBuilder, $query) {
            return $queryBuilder->where('name', 'like', "%{$query}%")
                                ->orWhere('email', 'like', "%{$query}%");
        })->paginate(10);
    
        return view('account.index', compact('users'));
    }

    public function create(){
        return view('account.create');
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $role = Role::where('name', 'Scholarship Offer')->first();
        $user->roles()->attach($role->id);

        return redirect()->route('users.index')->with('success', 'Scholarship Offer account created successfully.');
    }


    public function createJobRecruiterAccount(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // Create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Assign role
        $role = Role::where('name', 'Job Recruiter')->first();
        $user->roles()->attach($role->id);

        return redirect()->route('users.index')->with('success', 'Job Recruiter account created successfully.');
    }
} 