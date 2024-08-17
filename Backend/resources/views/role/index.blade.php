<x-app-layout>
    <x-slot name="header">
        {{ __('Roles') }}
    </x-slot>

    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <div class="card-tools">
                        <a href="{{ route('roles.create') }}" class="btn btn-primary">
                            <i class="fas fa-plus-circle"></i>
                            {{ __("Create New") }}
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <form action="" id="form_filter">
                        <div class="flex items-center">
                            <div class="md:w-1/2">
                                <label class="block text-gray-700 font-medium mb-1">{{ __("Search") }}</label>
                                <div class="flex">
                                    <input type="text" name="search" placeholder="Search" value="{{ request('search') }}"
                                        class="form-input w-full rounded-l-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                    <button type="submit" class="bg-gray-200 text-gray-700 hover:bg-gray-300 font-bold py-2 px-4 rounded-r-md">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <button class="btn btn-info text-white" id="btn_filter">{{ __("Filter") }} <i class="fas fa-filter"></i></button>
                                <a href="{{ route('roles.index') }}" class="btn btn-danger">
                                    {{ __('Clear') }}
                                    <i class="fas fa-sync-alt"></i>
                                </a>
                            </div>
                        </div>
                    </form>
                    @if(session('success'))
                    <div id="successModal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
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
                    <div class="table-responsive text-nowrap  mt-3 px-2 py-2">
                        <table class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>{{ __('NO') }}</th>
                                    <th>{{ __('Name') }}</th>
                                    <th>{{ __('Guard Name') }}</th>
                                    <th style="width:10%; text-align:center">{{ __('Actions') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($roles as $index => $role)
                                    <tr>
                                        <td>{{ $roles->firstItem() + $index }}</td>
                                        <td>{{ $role->name }}</td>
                                        <td>{{ $role->guard_name }}</td>
                                        <td style="width:10%;">
                                            <a href="{{ route('roles.show', $role) }}" class="btn btn-warning">
                                                {{-- {{ __('Edit') }} --}}
                                                <i class="fas fa-edit"></i>
                                            </a>
                                            <button type="button" class="btn btn-danger" onclick="confirmDelete({{ $role->id }})">
                                                {{-- {{ __('Delete') }} --}}
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <form id="delete-form-{{ $role->id }}" action="{{ route('roles.destroy', $role) }}" method="POST" style="display:none;">
                                                @csrf
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        <div class="pagination mt-3">
                            {!! $roles->links() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

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
                            {{ __('Are you sure you want to delete this role?') }}
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
        let roleToDelete = null;

        function confirmDelete(roleId) {
            roleToDelete = roleId;
            document.getElementById('deleteModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('deleteModal').classList.add('hidden');
        }

        document.getElementById('confirmDeleteButton').addEventListener('click', function () {
            if (roleToDelete) {
                document.getElementById('delete-form-' + roleToDelete).submit();
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
</x-app-layout>
