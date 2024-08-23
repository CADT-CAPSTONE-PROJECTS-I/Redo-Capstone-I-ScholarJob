<div id="deleteModal" class="fixed z-10 inset-0 overflow-y-auto hidden">
    <div class="flex items-center justify-center min-h-screen px-4 text-center">
        <div class="fixed inset-0 bg-gray-500 opacity-75"></div>

        <div class="inline-block bg-white rounded-lg px-4 pt-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                <p class="text-lg font-medium text-gray-900">Delete</p>
            </div>

            <div class="mt-4 mb-1 border-b border-gray-200 pb-3">
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <i class="fas fa-exclamation-triangle text-red-600"></i>
                </div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 text-center">
                    {{ __('Are you sure you want to delete this record?') }}
                </h3>
                <div class="mt-2 text-center">
                    <p class="text-sm text-gray-500">
                        {{ __('This action cannot be undone.') }}
                    </p>
                </div>
            </div>

            <div class="mt-4 sm:mt-6 flex justify-end space-x-2">
                <button type="button" onclick="closeModal()" class="inline-flex items-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:text-sm">
                    <i class="fas fa-times mr-2"></i>
                    {{ __('Cancel') }}
                </button>
                <button type="button" id="confirmDeleteButton" class="inline-flex items-center rounded-md border border-transparent shadow-sm px-3 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:text-sm">
                    <i class="fas fa-check mr-2"></i>
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
