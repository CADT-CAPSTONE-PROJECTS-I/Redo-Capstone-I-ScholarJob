<x-app-layout>
    <x-slot name="header">
        {{ __('Accounts') }}
        
    </x-slot>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <div class="card-tools">
                        <a href="{{ route('accounts.create') }}" class="btn btn-primary" >
                            <i class="fas fa-plus-circle"></i>
                            {{__("Create New")}}
                        </a>
                    </div>
                </div>
                <div class="card-body"> 
                    <form action="" id="form_filter">
                        <div class="flex items-center">
                            <div class=" md:w-1/2">
                                <label class="block text-gray-700 font-medium mb-1">{{ __("Search") }}</label>
                                <div class="flex">
                                    <input type="text" name="search" placeholder="Search"
                                        value="{{ request('search') }}"
                                        class="form-input w-full rounded-l-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                    <button type="submit" class="bg-gray-200 text-gray-700 hover:bg-gray-300 font-bold py-2 px-4 rounded-r-md">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <button class="btn btn-info text-white" id="btn_filter">{{__("Filter")}} <i class="fas fa-filter"></i></button>
                                <a href="{{ route('accounts.index') }}" class="btn btn-danger">
                                    {{__('Clear')}}
                                    <i class="fas fa-sync-alt"></i>
                                </a>
                            </div>
                        </div>
                    </form>
    
                    <div class="table-responsive mt-3 px-2 py-2">
                        <table class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th class="text-left text-uppercase bg-light">Name</th>
                                <th class="text-left text-uppercase bg-light">Email</th>
                                <th >Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($users as $user)
                                <tr>
                                    <td>{{ $user->name }}</td>
                                    <td>{{ $user->email }}</td>
                                    <td><a data-toggle="modal" data-target="#delete_user" class="btn btn-danger btn-sm" title="Delete"><i class="fa fa-trash"></i></a></td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
