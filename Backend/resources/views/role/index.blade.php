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

                     @include('components.modal-success')

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

    @include('components.modal-delete')

</x-app-layout>
