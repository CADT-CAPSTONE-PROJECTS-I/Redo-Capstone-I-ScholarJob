<x-app-layout>
    <x-slot name="header">
        {{ __('Create Scholarship') }}
    </x-slot>

    <div class="flex mb-2 space-x-2">
        <a href="{{ route('scholarships.index') }}" class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 shadow-lg flex items-center">
            <i class="fas fa-arrow-left px-1"></i>
            <span>Back</span>
        </a>
        <button type="submit" form="scholarshipForm" class="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
            <i class="fas fa-save px-1"></i>
            <span>Save</span>
        </button>
    </div>
    
    <div class="flex flex-col">
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                <form id="scholarshipForm" action="{{ route('scholarships.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @include('components.message-error')
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="organization_id" class="block text-gray-700 font-medium mb-2">Organization</label>
                            <select id="organization_id" name="organization_id" class="form-select mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="" disabled selected>Select Organization</option>
                                @foreach($organizations as $organization)
                                    <option value="{{ $organization->id }}" {{ old('organization_id') == $organization->id ? 'selected' : '' }}>{{ $organization->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div>
                            <label for="degree" class="block text-gray-700 font-medium mb-2">Degree</label>
                            <select id="degree" name="degree" class="form-select mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="" disabled selected>Select Degree</option>
                                <option value="high_school" {{ old('degree') == 'high_school' ? 'selected' : '' }}>High School</option>
                                <option value="bachelor" {{ old('degree') == 'bachelor' ? 'selected' : '' }}>Bachelor</option>
                                <option value="master" {{ old('degree') == 'master' ? 'selected' : '' }}>Master</option>
                                <option value="phd" {{ old('degree') == 'phd' ? 'selected' : '' }}>PhD</option>
                            </select>
                        </div>

                        <div>
                            <label for="qualification" class="block text-gray-700 font-medium mb-2">Qualification</label>
                            <select id="qualification" name="qualification" class="form-select mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="" disabled selected>Select Qualification</option>
                                <option value="high_school" {{ old('qualification') == 'high_school' ? 'selected' : '' }}>High School</option>
                                <option value="bachelor" {{ old('qualification') == 'bachelor' ? 'selected' : '' }}>Bachelor</option>
                                <option value="master" {{ old('qualification') == 'master' ? 'selected' : '' }}>Master</option>
                                <option value="phd" {{ old('qualification') == 'phd' ? 'selected' : '' }}>PhD</option>
                            </select>
                        </div>

                        <div>
                            <label for="deadline" class="block text-gray-700 font-medium mb-2">Deadline</label>
                            <input type="date" id="deadline" name="deadline" value="{{ old('deadline') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="award" class="block text-gray-700 font-medium mb-2">Award</label>
                            <input type="text" id="award" name="award" placeholder="Enter Award Amount" value="{{ old('award') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="available_position" class="block text-gray-700 font-medium mb-2">Available Positions</label>
                            <input type="number" id="available_position" name="available_position" placeholder="Enter Available Positions" value="{{ old('available_position') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>

                        <div>
                            <label for="english_proficiency" class="block text-gray-700 font-medium mb-2">English Proficiency</label>
                            <input type="text" id="english_proficiency" name="english_proficiency" placeholder="Enter English Proficiency Requirement" value="{{ old('english_proficiency') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>

                        <div>
                            <label for="major" class="block text-gray-700 font-medium mb-2">Major</label>
                            <input type="text" id="major" name="major" placeholder="Enter Major" value="{{ old('major') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>

              
                        <div>
                            <label for="location" class="block text-gray-700 font-medium mb-2">Location</label>
                            <input type="text" id="location" name="location" placeholder="Enter Location" value="{{ old('location') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>

                        <div>
                            <label for="age" class="block text-gray-700 font-medium mb-2">Age</label>
                            <input type="number" id="age" name="age" placeholder="Enter Age Requirement" value="{{ old('age') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>

                        <div>
                            <label for="gpa" class="block text-gray-700 font-medium mb-2">GPA</label>
                            <input type="text" id="gpa" name="gpa" placeholder="Enter GPA Requirement" value="{{ old('gpa') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                                           
                        <div>
                            <label for="program_duration" class="block text-gray-700 font-medium mb-2">Program Duration</label>
                            <input type="number" id="program_duration" name="program_duration" placeholder="Enter Program Duration" value="{{ old('program_duration') }}"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>

                        <div class="md:col-span-2">
                            <label for="eligibility" class="block text-gray-700 font-medium mb-2">Eligibility</label>
                            <textarea id="eligibility" name="eligibility" placeholder="Enter Scholarship Eligibility"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 required">{{ old('eligibility') }}</textarea>
                        </div>

                        <div class="md:col-span-2">
                            <label for="offer" class="block text-gray-700 font-medium mb-2">Offer</label>
                            <textarea id="offer" name="offer" placeholder="Enter Scholarship offer"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 required">{{ old('offer') }}</textarea>
                        </div>

                        <div style="width:350px;">
                            <label for="image" class="block text-gray-700 font-medium mb-2">Image</label>
                            <div class="relative w-full h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                                <input type="file" id="image" name="image" class="absolute inset-0 opacity-0 cursor-pointer"
                                    onchange="previewImage(event)">
                                <div id="imagePreview" class="flex items-center justify-center">
                                    <img id="imageDisplay" src="#" alt="Image Preview" class="hidden w-full h-full object-cover rounded-lg" style="height:300px">
                                    <span class="text-gray-400" id="placeholder">
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

    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>

    <script>
        ClassicEditor
            .create(document.querySelector('#eligibility'))
            .catch(error => {
                console.error(error);
            });

        ClassicEditor
            .create(document.querySelector('#offer'))
            .catch(error => {
                console.error(error);
            });
    </script>
    <script>
    function previewImage(event) {
        const imagePreview = document.getElementById('imagePreview');
        const imageDisplay = document.getElementById('imageDisplay');
        const placeholder = document.getElementById('placeholder');
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageDisplay.src = e.target.result;
                imageDisplay.classList.remove('hidden');
                placeholder.classList.add('hidden');
            }
            reader.readAsDataURL(file);
        }
    }
    </script>
</x-app-layout>
