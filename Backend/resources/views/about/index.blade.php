<x-app-layout>
    <x-slot name="header">
        {{ __('About Us') }}
    </x-slot>

    <div class="flex mb-2 space-x-2">
        <button type="submit" form="aboutUsForm" class="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded hover:bg-blue-600 shadow-lg flex items-center">
            <i class="fas fa-save px-1"></i>
            <span>Save</span>
        </button>
    </div>
    
    <div class="flex flex-col">
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                <form id="aboutUsForm" method="POST" action="{{ route('about.storeOrUpdate') }}" enctype="multipart/form-data">
                    @csrf
                    @include('components.message-error')
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div class="md:col-span-2">
                            <label for="mission" class="block text-gray-700 font-medium mb-2">Mission</label>
                            <textarea id="mission" name="mission" placeholder="Enter the mission"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 required">
                                {{ old('mission', $about->mission ?? '') }}
                            </textarea>
                        </div>

                        <div class="md:col-span-2">
                            <label for="vision" class="block text-gray-700 font-medium mb-2">Vision</label>
                            <textarea id="vision" name="vision" placeholder="Enter the vision"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 required">
                                {{ old('vision', $about->vision ?? '') }}
                            </textarea>
                        </div>
                        
                        <div class="md:col-span-2">
                            <label for="content" class="block text-gray-700 font-medium mb-2">Content</label>
                            <textarea id="content" name="content" placeholder="Enter the content"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 required">
                                {{ old('content', $about->content ?? '') }}
                            </textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>

    <script>
        ClassicEditor
            .create(document.querySelector('#mission'))
            .catch(error => {
                console.error(error);
            });

        ClassicEditor
            .create(document.querySelector('#vision'))
            .catch(error => {
                console.error(error);
            });

        ClassicEditor
            .create(document.querySelector('#content'))
            .catch(error => {
                console.error(error);
            });
    </script>
</x-app-layout>
