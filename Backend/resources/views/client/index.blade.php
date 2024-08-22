<x-app-layout>
    <x-slot name="header">
        {{ __('User') }}
    </x-slot>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary card-outline">
                <div class="card-header">
                @if (auth()->user()->hasPermission('CreateUser'))
                    <div class="card-tools">
                        <a href="{{ route('clients.create') }}" class="btn btn-primary">
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
                                <a href="{{ route('clients.index') }}" class="btn btn-danger">
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
                                    <th>{{ __('Email') }}</th>
                                    @if (auth()->user()->hasPermission('UpdateUser') || auth()->user()->hasPermission('DeleteUser'))
                                        <th style="width:10%; text-align:center">{{ __('Actions') }}</th>
                                    @endif
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($clients as $index => $client)
                                    <tr>
                                        <td>{{ $clients->firstItem() + $index }}</td>
                                        <td>{{ $client->name }}</td>
                                        <td>{{ $client->email }}</td>
                                        @if (auth()->user()->hasPermission('UpdateUser') || auth()->user()->hasPermission('DeleteUser'))
                                        <td style="width:10%;">
                                            @if (auth()->user()->hasPermission('UpdateUser'))
                                                <a href="{{ route('clients.show', $client) }}" class="btn btn-warning">
                                                    <i class="fas fa-edit"></i>
                                                </a> 
                                            @endif
                                            @if (auth()->user()->hasPermission('DeleteUser'))    
                                                <button type="button" class="btn btn-danger" onclick="confirmDelete({{ $client->id }})">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                                <form id="delete-form-{{ $client->id }}" action="{{ route('clients.destroy', $client) }}" method="POST" style="display:none;">
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
                            {!! $clients->links() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    @include('components.modal-delete')
    
</x-app-layout>
