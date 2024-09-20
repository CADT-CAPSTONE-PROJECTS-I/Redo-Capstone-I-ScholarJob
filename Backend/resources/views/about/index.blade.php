<x-app-layout>
    <x-slot name="header">
        {{ __('About Us') }}
    </x-slot>

    <div class="flex mb-2 space-x-2">
        <button type="submit" form="aboutUsForm"
            class="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
            <i class="fas fa-save px-1"></i>
            <span>Save</span>
        </button>
        <button type="button" onclick="openAddTeamModal()"
            class="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-green-600 shadow-lg flex items-center">
            <i class="fas fa-plus px-1"></i>
            <span>Add Team</span>
        </button>
    </div>

     <div class="flex flex-col">
        <!-- Mission, Vision, and Content -->
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                <form id="aboutUsForm" method="POST" action="{{ route('about.storeOrUpdate') }}" enctype="multipart/form-data">
                    @csrf
                    @include('components.message-error')
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Mission Section -->
                        <div class="md:col-span-2">
                            <label for="mission" class="block text-gray-700 font-medium mb-2">Mission</label>
                            <textarea id="mission" name="mission" class="form-input mt-1 block w-full rounded-md">{{ old('mission', $about->mission ?? '') }}</textarea>
                        </div>
                        <!-- Vision Section -->
                        <div class="md:col-span-2">
                            <label for="vision" class="block text-gray-700 font-medium mb-2">Vision</label>
                            <textarea id="vision" name="vision" class="form-input mt-1 block w-full rounded-md">{{ old('vision', $about->vision ?? '') }}</textarea>
                        </div>
                        <!-- Content Section -->
                        <div class="md:col-span-2">
                            <label for="content" class="block text-gray-700 font-medium mb-2">Content</label>
                            <textarea id="content" name="content" class="form-input mt-1 block w-full rounded-md">{{ old('content', $about->content ?? '') }}</textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="mt-10">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="team-list">
            @foreach ($team as $member)
                <div class="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden" data-id="{{ $member->id }}">
                    <!-- Image Container -->
                    <div class="relative w-full h-64 bg-gray-100 border border-gray-300 rounded-t-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                        <div id="imagePreview" class="w-full h-full relative">
                            @if ($member->image)
                                <img src="{{ asset($member->image) }}" alt="{{ $member->name }}" class="w-full h-full object-cover rounded-t-lg">
                            @else
                                <img id="imageDisplay" src="/path-to-placeholder-image.png" alt="Placeholder Image" class="w-full h-full object-cover rounded-t-lg">
                            @endif

                            <!-- Edit Button (Always Visible) -->
                            <button type="button" onclick="openEditTeamModal({{ $member->id }})"
                                    class="absolute top-2 right-2 bg-gray-400 text-white p-2 rounded opacity-100 transition-opacity duration-300">
                                    <i class="fas fa-edit mr-2"></i>Edit
                            </button>
                        </div>
                    </div>
                    <!-- Content Container -->
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-gray-800">{{ $member->name }}</h3>
                        <p class="text-sm text-gray-500 mb-1">{{ $member->position }}</p>
                        <p class="mt-2 text-gray-700 leading-relaxed">{{ $member->description }}</p>
                        <a href="mailto:{{ $member->contact }}" class="block mt-4 text-dark-gray-500 hover:text-blue-700 font-medium">{{ $member->contact }}</a>
                    </div>
                </div>
            @endforeach
        </div>
    </div>


    <div id="addTeamModal" class="fixed z-10 inset-0 overflow-y-auto hidden">
        <div class="flex items-center justify-center min-h-screen px-4 text-center">
            <div class="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div
                class="inline-block bg-white rounded-lg px-4 pt-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                    <p id="modalTitle" class="text-lg font-medium text-gray-900">Add Team Member</p>
                </div>
                <form id="teamForm" enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" id="teamId" name="teamId">
                    <div class="mt-4 mb-4">
                        <label for="name" class="block text-gray-700 font-medium">Name</label>
                        <input type="text" id="name" name="name" class="form-input mt-1 block w-full rounded-md">
                    </div>
                    <div class="mb-4">
                        <label for="position" class="block text-gray-700 font-medium">Position</label>
                        <input type="text" id="position" name="position" class="form-input mt-1 block w-full rounded-md">
                    </div>
                    <div class="mb-4">
                        <label for="description" class="block text-gray-700 font-medium">Description</label>
                        <textarea id="description" name="description" class="form-input mt-1 block w-full rounded-md"></textarea>
                    </div>
                    <div class="mb-4">
                        <label for="contact" class="block text-gray-700 font-medium">Contact</label>
                        <input type="text" id="contact" name="contact" class="form-input mt-1 block w-full rounded-md">
                    </div>
                    <div>
                        <label for="image" class="block text-gray-700 font-medium mb-2">Image</label>
                        <div
                            class="relative w-full h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                            <input type="file" id="image" name="image"
                                class="absolute inset-0 opacity-0 cursor-pointer" onchange="previewImage(event)">
                            <div id="imagePreview" class="flex items-center justify-center">
                                <img id="imageDisplay" src="#" alt="Image Preview"
                                    class="hidden w-full h-full object-cover rounded-lg" style="height:300px">
                                <span class="text-gray-400" id="placeholder">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-16 w-16 mx-auto text-gray-300" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L10 3M21 7L14 3M14 3V7M10 3V7M5 19H19" />
                                    </svg>
                                    Upload Image
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 sm:mt-6 flex justify-end space-x-2">
                        <button type="button" onclick="closeAddTeamModal()"
                            class="inline-flex items-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:text-sm">
                            <i class="fas fa-times mr-2"></i>
                            {{ __('Cancel') }}
                        </button>
                        <button type="button" onclick="saveTeam()"
                            class="inline-flex items-center rounded-md border border-transparent shadow-sm px-3 py-2 bg-warning text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm">
                            <i class="fas fa-check mr-2"></i>
                            {{ __('Save') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>
    <script>
        ClassicEditor.create(document.querySelector('#mission')).catch(error => { console.error(error); });
        ClassicEditor.create(document.querySelector('#vision')).catch(error => { console.error(error); });
        ClassicEditor.create(document.querySelector('#content')).catch(error => { console.error(error); });


        let editingTeamId = null;

        function openAddTeamModal() {
            document.getElementById('teamForm').reset();
            document.getElementById('teamId').value = ''; 
            document.getElementById('modalTitle').innerText = 'Add Team Member';
            document.getElementById('addTeamModal').classList.remove('hidden');
            editingTeamId = null; 
        }

        function openEditTeamModal(id) {
            editingTeamId = id;

            fetch(`/team/show/${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        document.getElementById('teamId').value = data.team.id;
                        document.getElementById('name').value = data.team.name;
                        document.getElementById('position').value = data.team.position;
                        document.getElementById('description').value = data.team.description;
                        document.getElementById('contact').value = data.team.contact;
                        // Handle image preview if necessary
                        // document.getElementById('image').value = data.team.image;

                        document.getElementById('modalTitle').innerText = 'Edit Team Member';
                        document.getElementById('addTeamModal').classList.remove('hidden');
                    } else {
                        alert(data.message || 'Error fetching team member data');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error while fetching the team member data.');
                });
        }

        function closeAddTeamModal() {
            document.getElementById('addTeamModal').classList.add('hidden');
        }

        function storeTeam() {
            let formData = new FormData(document.getElementById('teamForm'));

            fetch('{{ route('team.store') }}', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        const teamList = document.getElementById('team-list');
                        const member = `
                            <div class="bg-white shadow-lg rounded-lg overflow-hidden" data-id="${data.team.id}">
                                <img src="/storage/${data.team.image}" alt="${data.team.name}" class="w-full h-56 object-cover">
                                <div class="p-6">
                                    <h3 class="text-xl font-semibold">${data.team.name}</h3>
                                    <p class="text-gray-600">${data.team.position}</p>
                                    <p class="mt-2">${data.team.description}</p>
                                    <p class="mt-4 text-blue-500">${data.team.contact}</p>
                                    <button type="button" onclick="openEditTeamModal(${data.team.id})" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                                        <i class="fas fa-edit"></i> Edit
                                    </button>
                                </div>
                            </div>
                        `;
                        teamList.innerHTML += member;
                        closeAddTeamModal();
                    } else {
                        alert(data.message || 'Error saving team member');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error while saving the team member.');
                });
        }

        function updateTeam() {
            let formData = new FormData(document.getElementById('teamForm'));

            fetch(`/team/update/${editingTeamId}`, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        const memberCard = document.querySelector(`#team-list .bg-white[data-id="${editingTeamId}"]`);
                        if (memberCard) {
                            memberCard.querySelector('img').src = `/storage/${data.team.image}`;
                            memberCard.querySelector('h3').innerText = data.team.name;
                            memberCard.querySelector('p.text-gray-600').innerText = data.team.position;
                            memberCard.querySelector('p.mt-2').innerText = data.team.description;
                            memberCard.querySelector('p.mt-4.text-blue-500').innerText = data.team.contact;
                        }
                        closeAddTeamModal();
                    } else {
                        alert(data.message || 'Error updating team member');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error while updating the team member.');
                });
        }

        function saveTeam() {
            if (editingTeamId) {
                updateTeam();
            } else {
                storeTeam();
            }
        }


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
