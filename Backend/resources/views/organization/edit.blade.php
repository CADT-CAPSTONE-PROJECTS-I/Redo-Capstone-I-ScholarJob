<x-app-layout>
    <x-slot name="header">
        {{ __('Edit Organization') }}
    </x-slot>

    <div class="flex mb-2 space-x-2">
        <a href="{{ route('organizations.index') }}" class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 shadow-lg flex items-center">
            <i class="fas fa-arrow-left px-1"></i>
            <span>Back</span>
        </a>
        <button type="submit" form="organizationForm" class="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
            <i class="fas fa-save px-1"></i>
            <span>Update</span>
        </button>
    </div>
    
    <div class="flex flex-col">
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                <form id="organizationForm" action="{{ route('organizations.update', $organization) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" value="{{ $organization->name }}" placeholder="Enter Name"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="industry_type" class="block text-gray-700 font-medium mb-2">Industry Type</label>
                            <input type="text" id="industry_type" name="industry_type" value="{{ $organization->industry_type }}" placeholder="Enter Industry Type"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="website" class="block text-gray-700 font-medium mb-2">Media</label>
                            <input type="text" id="website" name="website" value="{{ $organization->website }}" placeholder="Enter Website"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="address" class="block text-gray-700 font-medium mb-2">Address</label>
                            <input type="text" id="address" name="address" value="{{ $organization->address }}" placeholder="Enter Address"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="phone_number" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input type="text" id="phone_number" name="phone_number" value="{{ $organization->phone_number }}" placeholder="Enter Phone Number"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="contact" class="block text-gray-700 font-medium mb-2">Contact Person</label>
                            <input type="text" id="contact" name="contact" value="{{ $organization->contact }}" placeholder="Enter Contact Person"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="image" class="block text-gray-700 font-medium mb-2">Image</label>
                            <input type="file" id="image" name="image"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                            @if ($organization->image)
                                <img src="{{ Storage::url($organization->image) }}" alt="{{ $organization->name }}" class="mt-2 h-20 w-20 object-cover rounded-md">
                            @endif
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
