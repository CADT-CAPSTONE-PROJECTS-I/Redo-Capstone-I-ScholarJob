<?php
namespace App\Http\Controllers\Backend;

use App\Models\Role;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::paginate(10);
        return view('role.index', compact('roles'));
    }

    public function create()
    {
        $permissions = Permission::all()->groupBy('panel');
        return view('role.create', compact('permissions'));
    }

    public function store(Request $request)
    {
        $role = Role::create($request->only('name', 'guard_name'));
        $role->permissions()->sync($request->input('permissions', []));
        return redirect()->route('roles.index')->with('success', 'Role created successfully.');
    }

    public function show($id)
    {
        $role = Role::findOrFail($id);
        $permissions = Permission::all()->groupBy('panel');
        return view('role.edit', compact('role', 'permissions'));
    }

    public function update(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        $role->update($request->only('name', 'guard_name'));
        $role->permissions()->sync($request->input('permissions', []));
        return redirect()->route('roles.index')->with('success', 'Role updated successfully.');
    }

    public function destroy($id)
    {
        $role = Role::findOrFail($id);
        $role->delete();
        return redirect()->route('roles.index')->with('success', 'Role deleted successfully.');
    }
}