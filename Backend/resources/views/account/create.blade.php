<x-app-layout>
    <x-slot name="header">
        {{ __('Create Accounts') }}
    </x-slot>
    <div class="flex mb-2 space-x-2">
        <a href="{{ route('accounts.index') }}" class="bg-gray-500 text-white font-bold  py-2 px-2 rounded hover:bg-gray-600 shadow-lg flex items-center">
            <i class="fas fa-arrow-left px-1"></i>
            <span>Back</span>
        </a>
        <button type="submit" form="accountForm" class="bg-blue-500 text-white font-bold ml-2 py-2 px-2 rounded hover:bg-blue-600 shadow-lg flex items-center ">
            <i class="fas fa-save px-1"></i>
            <span>Save</span>
        </button>
    </div>
    
    <div class="flex flex-col">
        <div class="w-full">
            <div class="bg-white shadow-md rounded-lg p-6">
                {{-- <form action="{{ route('accounts.store') }}" method="POST"> --}}
                    @csrf
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="first_name" class="block text-gray-700 font-medium mb-2">First Name</label>
                            <input type="text" id="first_name" name="first_name" placeholder="Enter First Name"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
        
                        <div>
                            <label for="last_name" class="block text-gray-700 font-medium mb-2">Last Name</label>
                            <input type="text" id="last_name" name="last_name" placeholder="Enter Last Name"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter Email"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
               
                        <div>
                            <label for="phone" class="block text-gray-700 font-medium mb-2">Phone</label>
                            <input type="text" id="phone" name="phone" placeholder="Enter Phone Number"
                                class="form-input mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</x-app-layout>
