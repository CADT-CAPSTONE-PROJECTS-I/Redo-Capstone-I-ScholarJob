<x-app-layout>
    <x-slot name="header">
        {{ __('Job') }}
    </x-slot>

    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <div class="card-tools">
                    @if(auth()->user()->hasPermission('CreateJob'))
                        <a href="{{ route('jobs.create') }}" class="btn btn-primary">
                            <i class="fas fa-plus-circle"></i>
                            {{ __('Create New') }}
                        </a>
                    @endif
                    </div>
                </div>
                <div class="card-body"> 
                    <form action="" id="form_filter">
                        <div class="flex items-center">
                            <div class="md:w-1/2">
                                <label class="block text-gray-700 font-medium mb-1">{{ __('Search') }}</label>
                                <div class="flex">
                                    <input type="text" name="search" placeholder="Search"
                                        value="{{ request('search') }}"
                                        class="form-input w-full rounded-l-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
                                    <button type="submit"
                                        class="bg-gray-200 text-gray-700 hover:bg-gray-300 font-bold py-2 px-4 rounded-r-md">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <button class="btn btn-info text-white" id="btn_filter">{{ __('Filter') }} <i
                                        class="fas fa-filter"></i></button>
                                <a href="{{ route('jobs.index') }}" class="btn btn-danger">
                                    {{ __('Clear') }}
                                    <i class="fas fa-sync-alt"></i>
                                </a>
                            </div>
                        </div>
                    </form>

                    @include('components.modal-success')

                    <div class="table-responsive text-nowrap mt-3 px-2 py-2">
                        <table class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>{{ __('#') }}</th>
                                    <th>{{ __('Image') }}</th>
                                    <th>{{ __('Title') }}</th>
                                    <th>{{ __('Organization') }}</th>
                                    <th>{{ __('Category') }}</th>
                                    <th>{{ __('Salary') }}</th>
                                    <th>{{ __('Job Type') }}</th>
                                    <th>{{ __('Available') }}</th>
                                    <th>{{ __('Deadline') }}</th>
                                    @if (auth()->user()->hasPermission('UpdateJob'))
                                         <th style="width:10%; text-align:center">{{ __('Actions') }}</th>
                                    @endif
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($jobs as $index => $job)
                                    <tr>
                                        <td>{{ $jobs->firstItem() + $index }}</td>
                                        <td>
                                            @if ($job->image && file_exists(public_path($job->image)))
                                                <img src="{{ asset($job->image) }}" alt="Scholarship Image"
                                                    style="width:70px; height:50px; border-radius:5px;">
                                            @else
                                                <img src="{{ asset('image/default.png') }}" alt="Default Image"
                                                    style="width:70px; height:50px; border-radius:5px;">
                                            @endif
                                        </td>

                                        <td>{{ $job->title }}</td>
                                        <td>{{ $job->organization->name ?? '--' }}</td>
                                        <td>{{ $job->category->title ?? '--' }}</td>
                                        <td>{{ $job->salary }}</td>
                                        <td>{{ $job->job_type }}</td>
                                        <td>{{ $job->available_position }}</td>
                                        <td>{{ \Carbon\Carbon::parse($job->deadline)->format('d - M - Y') }}</td>
                                        @if (auth()->user()->hasPermission('UpdateJob')|| auth()->user()->hasPermission('DeleteJob'))
                                        <td style="width:10%;">
                                            @if (auth()->user()->hasPermission('UpdateJob'))
                                            <a href="{{ route('jobs.show', $job) }}" class="btn btn-warning">
                                                <i class="fas fa-edit"></i>
                                            </a>
                                            @endif
                                            @if (auth()->user()->hasPermission('DeleteJob'))
                                            <button type="button" class="btn btn-danger"
                                                onclick="confirmDelete({{ $job->id }})">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <form id="delete-form-{{ $job->id }}"
                                                action="{{ route('jobs.destroy', $job) }}" method="POST"
                                                style="display:none;">
                                                @csrf
                                            </form>
                                            @endif
                                    
                                
                                        </td>
                                        @endif

                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>

                    <div class="pagination mt-3">
                        {!! $jobs->links('components.pagination') !!}
                    </div>
                </div>
            </div>
        </div>
    </div>


    @include('components.modal-delete')

</x-app-layout>
