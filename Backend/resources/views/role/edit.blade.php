<x-app-layout>
    <x-slot name="header">
        {{ __('Edit Role') }}
    </x-slot>

    <div class="flex mb-2 space-x-2">
        <a href="{{ route('roles.index') }}" class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 shadow-lg flex items-center">
            <i class="fas fa-arrow-left px-1"></i>
            <span>Back</span>
        </a>
        <button type="submit" form="roleForm" class="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
            <i class="fas fa-save px-1"></i>
            <span>Save</span>
        </button>
    </div>

    <div class="flex flex-col">
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                <form id="roleForm" action="{{ route('roles.update', $role) }}" method="POST">
                    @csrf
                    @include('components.message-error')
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div>
                            <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" value="{{ old('name', $role->name) }}" placeholder="Enter Name"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>

                        <div>
                            <label for="guard_name" class="block text-gray-700 font-medium mb-2">Guard Name</label>
                            <input type="text" id="guard_name" name="guard_name" value="{{ old('guard_name', $role->guard_name) }}" placeholder="Enter Guard Name"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                    </div>

                    <div class="mt-6">
                        <h4 class="text-lg font-semibold mb-4">Assign Permissions</h4>

                        <div class="row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            @foreach($permissions as $panel => $panelPermissions)
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-header bg-light flex items-center justify-between">
                                            <label class="mr-5"><i class="fas fa-bookmark"></i> {{ ucfirst($panel) }}</label>
                                            <div class="ml-5">
                                                <input type="checkbox" id="select-all-{{ $panel }}" class="select-all d-none" data-panel="{{ $panel }}">
                                                <label for="select-all-{{ $panel }}" class="text-gray-600">Select All</label>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            @foreach($panelPermissions as $permission)
                                                <div class="form-group my-2">
                                                    <div class="checkbox">
                                                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                                            <input type="checkbox" class="custom-control-input permission-checkbox" id="{{ $permission->name }}" name="permissions[]" value="{{ $permission->id }}" data-panel="{{ $panel }}" {{ $role->permissions->contains($permission->id) ? 'checked' : '' }}>
                                                            <label class="custom-control-label" for="{{ $permission->name }}">{{ ucfirst($permission->name) }}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function () {
        
        document.querySelectorAll('.select-all').forEach(function (selectAllCheckbox) {
            selectAllCheckbox.addEventListener('change', function () {
                let panel = this.getAttribute('data-panel');
                let checkboxes = document.querySelectorAll(`input[type="checkbox"][data-panel="${panel}"]`);
                
                checkboxes.forEach(function (checkbox) {
                    checkbox.checked = selectAllCheckbox.checked;
                });
            });
        });
        document.querySelectorAll('.permission-checkbox').forEach(function (permissionCheckbox) {
            permissionCheckbox.addEventListener('change', function () {
                let panel = this.getAttribute('data-panel');
                
                let allPanelCheckboxes = document.querySelectorAll(`input[type="checkbox"][data-panel="${panel}"]`);
                
                let allPanelChecked = Array.from(allPanelCheckboxes).every(function (checkbox) {
                    return checkbox.checked;
                });

                document.querySelector(`#select-all-${panel}`).checked = allPanelChecked;
            });
        });
    });
    </script>
</x-app-layout>
