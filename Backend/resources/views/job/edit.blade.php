<x-app-layout>
    <x-slot name="header">
        {{ __('Edit Job') }}
    </x-slot>

    <div class="flex mb-2 space-x-2">
        <a href="{{ route('jobs.index') }}" class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 shadow-lg flex items-center">
            <i class="fas fa-arrow-left px-1"></i>
            <span>Back</span>
        </a>
        <button type="submit" form="jobForm" class="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
            <i class="fas fa-save px-1"></i>
            <span>Update</span>
        </button>
    </div>
    
    <div class="flex flex-col">
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                <form id="jobForm" action="{{ route('jobs.update', $job->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="title" class="block text-gray-700 font-medium mb-2">Title</label>
                            <input type="text" id="title" name="title" placeholder="Enter Job Title" value="{{ old('title', $job->title) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="organization_id" class="block text-gray-700 font-medium mb-2">Organization</label>
                            <select id="organization_id" name="organization_id"
                                class="form-select mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="" disabled>Select Organization</option>
                                @foreach($organizations as $id => $name)
                                    <option value="{{ $id }}" {{ old('organization_id', $job->organization_id) == $id ? 'selected' : '' }}>{{ $name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <label for="category_id" class="block text-gray-700 font-medium mb-2">Category</label>
                            <select id="category_id" name="category_id"
                                class="form-select mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="" disabled>Select Category</option>
                                @foreach($categories as $id => $name)
                                    <option value="{{ $id }}" {{ old('category_id', $job->category_id) == $id ? 'selected' : '' }}>{{ $name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <label for="salary" class="block text-gray-700 font-medium mb-2">Salary</label>
                            <input type="text" id="salary" name="salary" placeholder="Enter Salary" value="{{ old('salary', $job->salary) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="available_position" class="block text-gray-700 font-medium mb-2">Available Positions</label>
                            <input type="number" id="available_position" name="available_position" placeholder="Enter Number of Positions" value="{{ old('available_position', $job->available_position) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="deadline" class="block text-gray-700 font-medium mb-2">Application Deadline</label>
                            <input type="date" id="deadline" name="deadline" value="{{ old('deadline', $job->deadline)}}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="age_require" class="block text-gray-700 font-medium mb-2">Age Requirement</label>
                            <input type="number" id="age_require" name="age_require" placeholder="Enter Age Requirement" value="{{ old('age_require', $job->age_require) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
              
                        <div>
                            <label for="working_day_from" class="block text-gray-700 font-medium mb-2">Working Day From</label>
                            <input type="date" id="working_day_from" name="working_day_from" value="{{ old('working_day_from', $job->working_day_from)}}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="working_day_to" class="block text-gray-700 font-medium mb-2">Working Day To</label>
                            <input type="date" id="working_day_to" name="working_day_to" value="{{ old('working_day_to', $job->working_day_to)}}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="contact" class="block text-gray-700 font-medium mb-2">Contact Information</label>
                            <input type="text" id="contact" name="contact" placeholder="Enter Contact Information" value="{{ old('contact', $job->contact) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="image" class="block text-gray-700 font-medium mb-2">Job Image</label>
                            <input type="file" id="image" name="image"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                            @if ($job->image)
                                <img src="{{ asset($job->image) }}" alt="Current Image" class="mt-2 w-32">
                            @endif
                        </div>
                        <div class="md:col-span-2">
                            <label for="description" class="block text-gray-700 font-medium mb-2">Job Description</label>
                            <textarea id="description" name="description" placeholder="Enter Job Description"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">{{ old('description', $job->description) }}</textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
