<!-- Delete Confirmation Modal -->
<div id="deleteModal" class="mt-5 fixed z-10 inset-0 overflow-y-auto hidden">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <i class="fas fa-exclamation-triangle text-red-600"></i>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {{ __('Are you sure you want to delete this user?') }}
                    </h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            {{ __('This action cannot be undone.') }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-5 sm:mt-6 flex">
                <button type="button" onclick="closeModal()" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    {{ __('Cancel') }}
                </button>
                <button type="button" id="confirmDeleteButton" class="mt-3 ml-1 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                    {{ __('Confirm') }}
                </button>
            </div>
        </div>
    </div>
</div>

<script>
    let userToDelete = null;

    function confirmDelete(userId) {
        userToDelete = userId;
        document.getElementById('deleteModal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('deleteModal').classList.add('hidden');
    }

    document.getElementById('confirmDeleteButton').addEventListener('click', function () {
        if (userToDelete) {
            document.getElementById('delete-form-' + userToDelete).submit();
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        @if(session('success'))
            const successModal = document.getElementById('successModal');
            successModal.classList.remove('hidden');

    
            setTimeout(() => {
                successModal.classList.add('hidden');
            }, 3000);
        @endif
    });
</script>