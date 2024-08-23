@if(session('success'))
    <div id="successModal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
         <div class="fixed inset-0 bg-gray-500 opacity-75"></div>

        <div class="relative p-4 w-full max-w-md h-full md:h-auto flex justify-center items-center">
            <div class="relative p-8 text-center bg-gray-800 rounded-lg shadow-lg" style="width: 400px; height: 200px;">
            
                <div class="w-20 h-20 rounded-full border-4 border-green-500 bg-green-100 p-2 flex items-center justify-center mx-auto mb-2">
                    <svg aria-hidden="true" class="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <p class="mb-2 text-lg font-semibold text-white">{{ session('success') }}</p>
                <div class="loading-spinner mx-auto mt-2"></div>
            </div>
        </div>
    </div>

    <!-- Loading Animation -->
    <style>
        .loading-spinner {
            border: 4px solid rgba(255, 255, 255, 0.2);
            border-top: 4px solid #fff;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>

@endif