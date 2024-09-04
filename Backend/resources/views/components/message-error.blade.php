@if ($errors->any())
    <div id="errorModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div class="bg-black bg-opacity-50 absolute inset-0"></div>
        <div class="bg-white rounded-lg shadow-lg p-6 relative z-10 max-w-md mx-auto" style="width: 400px;">
            <div class="flex items-center justify-between mb-4">
                <div class="text-2xl font-bold text-red-600">⚠️ Message!</div>
                <div id="closeModalIcon" class="text-gray-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div class="text-gray-700 mb-4">
                <p class="text-lg">Your form contains errors:</p>
                <ul class="mt-3 list-disc list-inside text-base text-red-600 space-y-2">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var errorsExist = @json($errors->any());
            if (errorsExist) {
                document.getElementById('errorModal').classList.remove('hidden');
            }

            document.getElementById('closeModalIcon').addEventListener('click', function() {
                document.getElementById('errorModal').classList.add('hidden');
            });
        });
    </script>
@endif
