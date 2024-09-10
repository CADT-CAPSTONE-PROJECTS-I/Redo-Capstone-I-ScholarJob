<x-app-layout>
    <x-slot name="header">
        {{ __('') }}
    </x-slot>
    <h3>Edit About Us Page</h3>
        <div class="mt-4 mb-3">
            <button type="submit" form="" class="bg-blue-500 text-white font-bold ml-3 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
                <i class="fas fa-save px-1"></i>
                <span>Save</span>
            </button>
        </div>
    <div class="container">
        <div class="card shadow-sm">
            <div class="card-body">
                <form id="aboutus" action="{{ route('about_us.update') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    <div class="form-group mb-3">
                        <label for="content" class="form-label">Content</label>
                        <textarea id="content" name="content" class="form-control" rows="3" placeholder="Enter content"></textarea>
                    </div>

                    <div class="form-group mb-3">
                        <label for="mission" class="form-label">Mission</label>
                        <textarea id="mission" name="mission" class="form-control" rows="3" placeholder="Enter mission"></textarea>
                    </div>

                    <div class="form-group mb-3">
                        <label for="vision" class="form-label">Vision</label>
                        <textarea id="vision" name="vision" class="form-control" rows="3" placeholder="Enter vision"></textarea>
                    </div>

                    <div class="form-group mb-3">
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#teamModal">
                            Add Team Information
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>

    <!-- Modal popup for Team Information -->
    <div class="modal fade" id="teamModal" tabindex="-1" aria-labelledby="teamModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="teamModalLabel">Team Information</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="teamForm">
                        <div class="form-group mb-3">
                            <label for="teamName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="teamName" name="teamName" placeholder="Enter name">
                        </div>
                        <div class="form-group mb-3">
                            <label for="teamPosition" class="form-label">Position</label>
                            <input type="text" class="form-control" id="teamPosition" name="teamPosition" placeholder="Enter position">
                        </div>
                        <div class="form-group mb-3">
                            <label for="teamDescription" class="form-label">Description</label>
                            <textarea class="form-control" id="teamDescription" name="teamDescription" rows="3" placeholder="Enter description"></textarea>
                        </div>
                        <div class="form-group mb-3">
                            <label for="teamContact" class="form-label">Contact</label>
                            <input type="text" class="form-control" id="teamContact" name="teamContact" placeholder="Enter contact info">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="saveTeam">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Include Bootstrap CSS and JS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>

    <script>
        // Handle saving team information
        document.getElementById('saveTeam').addEventListener('click', function() {
            const teamName = document.getElementById('teamName').value;
            const teamPosition = document.getElementById('teamPosition').value;
            const teamDescription = document.getElementById('teamDescription').value;
            const teamContact = document.getElementById('teamContact').value;

            // For now, log the values
            console.log('Team Name:', teamName);
            console.log('Team Position:', teamPosition);
            console.log('Team Description:', teamDescription);
            console.log('Team Contact:', teamContact);

            // Close the modal after saving
            var teamModal = new bootstrap.Modal(document.getElementById('teamModal'));
            teamModal.hide();
        });
    </script>

</x-app-layout>
