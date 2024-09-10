<x-app-layout>
    <x-slot name="header">
        {{ __('Create Organization') }}
    </x-slot>

    <div class="flex mb-2 space-x-2">
        <a href="{{ route('organizations.index') }}" class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 shadow-lg flex items-center">
            <i class="fas fa-arrow-left px-1"></i>
            <span>Back</span>
        </a>
        <button type="submit" form="organizationForm" class="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
            <i class="fas fa-save px-1"></i>
            <span>Save</span>
        </button>
    </div>
    
    <div class="flex flex-col">
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                <form id="organizationForm" action="{{ route('organizations.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @include('components.message-error')
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter Name"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>

                        <div>
                            <label for="industry_type" class="block text-gray-700 font-medium mb-2">Industry Type</label>
                            <select id="industry_type" name="industry_type" class="form-select mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="" disabled selected>Select Type</option>
                                <option value="bank" {{ old('industry_type') == 'bank' ? 'selected' : '' }}>Bank</option>
                                <option value="school" {{ old('industry_type') == 'school' ? 'selected' : '' }}>School</option>
                                <option value="startup" {{ old('industry_type') == 'startup' ? 'selected' : '' }}>Startup</option>
                                <option value="goverment" {{ old('industry_type') == 'goverment' ? 'selected' : '' }}>Gov</option>
                            </select>
                        </div>

                        <div>
                            <label for="website" class="block text-gray-700 font-medium mb-2">Media</label>
                            <input type="text" id="website" name="website" placeholder="Enter Website"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="address" class="block text-gray-700 font-medium mb-2">Address</label>
                            <input type="text" id="address" name="address" placeholder="Enter Address"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="phone_number" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input type="text" id="phone_number" name="phone_number" placeholder="Enter Phone Number"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="contact" class="block text-gray-700 font-medium mb-2">Contact Person</label>
                            <input type="text" id="contact" name="contact" placeholder="Enter Contact Person"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="image" class="block text-gray-700 font-medium mb-2">Image</label>
                            <input type="file" id="image" name="image"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
