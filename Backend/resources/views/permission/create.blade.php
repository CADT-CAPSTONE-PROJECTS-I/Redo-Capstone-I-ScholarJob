<x-app-layout>
    <x-slot name="header">
        {{ __('Create Permission') }}
    </x-slot>

    <div class="flex mb-2 space-x-2">
        <a href="{{ route('permissions.index') }}" class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 shadow-lg flex items-center">
            <i class="fas fa-arrow-left px-1"></i>
            <span>Back</span>
        </a>
        <button type="submit" form="permissionForm" class="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
            <i class="fas fa-save px-1"></i>
            <span>Save</span>
        </button>
    </div>
    
    <div class="flex flex-col">
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                <form id="permissionForm" action="{{ route('permissions.store') }}" method="POST">
                    @csrf
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter Name"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="panel" class="block text-gray-700 font-medium mb-2">Panel</label>
                            <input type="text" id="panel" name="panel" placeholder="Enter Panel"
                                 class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
