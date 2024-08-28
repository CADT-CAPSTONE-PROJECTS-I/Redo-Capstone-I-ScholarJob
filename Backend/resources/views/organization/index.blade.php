<x-app-layout>
    <x-slot name="header">
        {{ __('Organization') }}
    </x-slot>

    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary card-outline">
                <div class="card-header">
                @if (auth()->user()->hasPermission('CreateOrganization'))
                    <div class="card-tools">
                        <a href="{{ route('organizations.create') }}" class="btn btn-primary">
                            <i class="fas fa-plus-circle"></i>
                            {{ __("Create New") }}
                        </a>
                    </div>
                @endif
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
                                <a href="{{ route('organizations.index') }}" class="btn btn-danger">
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
                                    <th>{{ __('#') }}</th>
                                    <th>{{ __('Name') }}</th>
                                    <th>{{ __('Industry Type') }}</th>
                                    <th>{{ __('Media') }}</th>
                                    <th>{{ __('Phone Number') }}</th>
                                    <th>{{ __('Contact') }}</th>
                                    @if (auth()->user()->hasPermission('DeleteOrganization') || auth()->user()->hasPermission('UpdateOrganization'))
                                    <th>{{ __('Actions') }}</th>
                                    @endif
                               
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($organizations as $index => $organization)
                                    <tr>
                                        <td>{{ $organizations->firstItem() + $index }}</td>
                                        <td>{{ $organization->name }}</td>
                                        <td>{{ $organization->industry_type }}</td>
                                        <td><a href="{{ $organization->website }}" target="_blank">{{ $organization->website }}</a></td>
                                        <td>{{ $organization->phone_number }}</td>
                                        <td>{{ $organization->contact }}</td>
                                        @if (auth()->user()->hasPermission('DeleteOrganization') || auth()->user()->hasPermission('UpdateOrganization'))
                                        <td>
                                            @if (auth()->user()->hasPermission('UpdateOrganization'))
                                            <a href="{{ route('organizations.show', $organization) }}" class="btn btn-warning">
                                                <i class="fas fa-edit"></i>
                                            </a>
                                                        
                                            @endif
                                            @if (auth()->user()->hasPermission('DeleteOrganization'))
                                                <button type="button" class="btn btn-danger" onclick="confirmDelete({{ $organization->id }})">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                                <form id="delete-form-{{ $organization->id }}" action="{{ route('organizations.destroy', $organization->id) }}" method="POST" style="display:none;">
                                                    @csrf
                                                </form>
                                            @endif
                                        </td>
                                        @endif
                    
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        <div class="pagination mt-3">
                            {!! $organizations->links('components.pagination') !!}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     @include('components.modal-delete')
</x-app-layout>



