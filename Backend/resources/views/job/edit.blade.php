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
                    @include('components.message-error')

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
                            <label for="job_type" class="block text-gray-700 font-medium mb-2">Job Type</label>
                            <select id="job_type" name="job_type" 
                                    class="form-select mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="" disabled selected>Select Job Type</option>
                                <option value="full_time" {{ $job->job_type == 'full_time' ? 'selected' : '' }}>Full Time</option>
                                <option value="part_time" {{ $job->job_type == 'part_time' ? 'selected' : '' }}>Part time</option>
                                <option value="remote" {{ $job->job_type == 'remote' ? 'selected' : '' }}>Remote</option>
                                <option value="on_site" {{ $job->job_type == 'on_site' ? 'selected' : '' }}>On Site</option>
                            </select>
                        </div>
                        <div>
                            <label for="salary" class="block text-gray-700 font-medium mb-2">Salary</label>
                            <input type="text" id="salary" name="salary" placeholder="Enter Salary" value="{{ old('salary', $job->salary) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="available_position" class="block text-gray-700 font-medium mb-2">Available Positions</label>
                            <input type="number" id="available_position" name="available_position" placeholder="Enter Number of Positions" value="{{ old('available_position', $job->available_position)}}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="deadline" class="block text-gray-700 font-medium mb-2">Deadline</label>
                            @php
                                $formattedDeadline = $job->deadline ? \Carbon\Carbon::parse($job->deadline)->format('Y-m-d') : '';
                            @endphp
                            <input type="date" id="deadline" name="deadline" value="{{ old('deadline', $formattedDeadline) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="age_require" class="block text-gray-700 font-medium mb-2">Age Requirement</label>
                            <input type="number" id="age_require" name="age_require" placeholder="Enter Age Requirement" value="{{ old('age_require', $job->age_require) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                         <div>
                            <label for="experience" class="block text-gray-700 font-medium mb-2">Experience</label>
                            <input type="number" id="experience" name="experience" placeholder="Enter Experience" value="{{ old('experience', $job->experience) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="contact" class="block text-gray-700 font-medium mb-2">Contact Information</label>
                            <input type="text" id="contact" name="contact" placeholder="Enter Contact Information" value="{{ old('contact', $job->contact) }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="urgent" class="block text-gray-700 font-medium mb-2">Urgent</label>
                            <select id="urgent" name="urgent"
                                class="form-select mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 required">
                                <option value="" disabled selected>Select Urgency</option>
                                <option value="1" {{ $job->urgent == '1' ? 'selected' : '' }}>Urgent</option>
                                <option value="0" {{ $job->urgent == '0' ? 'selected' : '' }}>Not Urgent</option>
                            </select>
                        </div>
              
          
                        <div class="md:col-span-2">
                            <label for="description" class="block text-gray-700 font-medium mb-2">Description</label>
                            <textarea id="description" name="description" placeholder="Enter Job Description"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">{{ old('description', $job->description) }}</textarea>
                        </div>
                        <div class="md:col-span-2">
                            <label for="responsible" class="block text-gray-700 font-medium mb-2">Responsible</label>
                            <textarea id="responsible" name="responsible" placeholder="Enter Job responsible"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">{{ old('description', $job->responsible) }}</textarea>
                        </div>

                        <div style="width: 350px;">
                            <label for="image" class="block text-gray-700 font-medium mb-2">Image</label>
                            <div class="relative w-full h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                                <input type="file" id="image" name="image" class="absolute inset-0 opacity-0 cursor-pointer"
                                    onchange="previewImage(event)">
                                <div id="imagePreview" class="flex items-center justify-center">
                        
                                    @if ($job->image)
                                        <img src="{{ asset($job->image) }}" alt="Current Image" class="mt-2 w-32">
                                    @else
                                        <img id="imageDisplay" src="#" alt="Image Preview" class="hidden w-full h-full object-cover rounded-lg" style="height: 300px;">
                                    @endif
                                    <span class="text-gray-400" id="placeholder" @if($job->image) style="display: none;" @endif>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L10 3M21 7L14 3M14 3V7M10 3V7M5 19H19" />
                                        </svg>
                                        Upload Image
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

        <script>
    function previewImage(event) {
        const imageDisplay = document.getElementById('imageDisplay');
        const placeholder = document.getElementById('placeholder');
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageDisplay.src = e.target.result;
                imageDisplay.classList.remove('hidden');
                placeholder.style.display = 'none';
            }
            reader.readAsDataURL(file);
        }
    }
    </script>
</x-app-layout>
