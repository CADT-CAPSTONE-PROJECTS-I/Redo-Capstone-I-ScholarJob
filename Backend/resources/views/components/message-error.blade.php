@if ($errors->any())
        <div id="errorModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div class="bg-black bg-opacity-50 absolute inset-0"></div>
        <div class="bg-white rounded-lg shadow-lg p-6 relative z-10 max-w-md mx-auto" style="width:400px;">
            <div class="text-xl font-semibold mb-4">Message!</div>
            <div class="text-gray-700 mb-4">
                <p>Your form contains errors:</p>
                <ul class="mt-2 list-disc list-inside text-sm text-red-600">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            <a id="closeModalBtn" class="bg-gray-200 text-gray-700 rounded py-2 px-4 hover:bg-gray-300">Close</a>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var errorsExist = @json($errors->any());
            if (errorsExist) {
                document.getElementById('errorModal').classList.remove('hidden');
            }

            document.getElementById('closeModalBtn').addEventListener('click', function() {
                document.getElementById('errorModal').classList.add('hidden');
            });
        });
    </script>
@endif
