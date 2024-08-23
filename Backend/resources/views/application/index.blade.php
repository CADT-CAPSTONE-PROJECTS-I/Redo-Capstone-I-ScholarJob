<x-app-layout>
    <x-slot name="header">
        {{ __('Application') }}
    </x-slot>

    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary card-outline">
                <div class="card-header">
                @if (auth()->user()->hasPermission('DownloadZip'))
                    <div class="card-tools">
                        <a href="{{ route('applications.downloadAllFiles') }}" class="btn btn-secondary">
                            <i class="fas fa-download"></i> Download All Files
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
                                <a href="{{ route('applications.index') }}" class="btn btn-danger">
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
                                    <th>{{ __('Applicant') }}</th>
                                    <th>{{ __('Email') }}</th>
                                    <th>{{ __('Position') }}</th>
                                    <th>{{ __('Major') }}</th>
                                    <th>{{ __('Apply At') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    <th>{{ __('Attach File') }}</th>
                                    @if (auth()->user()->hasPermission('DownloadCV'))
                                    <th style="width:10%; text-align:center">{{ __('Actions') }}</th>  
                                    @endif
                                    
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($applications as $index => $application)
                                    <tr>
                                        <td>{{ $applications->firstItem() + $index }}</td>
                                        <td>{{ $application->client->name ?? '--' }}</td>
                                        <td>{{ $application->client->email ?? '--'}}</td>
                                        <td>{{ $application->job->title ?? '--' }}</td>
                                        <td>{{ $application->scholarship->major ?? '--' }}</td>
                                        <td>{{ $application->created_at ? $application->created_at->format('j F, Y, g:i A') : '--' }}</td>
                                        <td>{{ $application->status }}</td>
                                        <td>{{ $application->attach_file ??'--' }}</td>
                                        @if (auth()->user()->hasPermission('DownloadCV'))
                                        <td style="width:10%;">
                                            @if ($application->attach_file != null)
                                                <a href="{{ route('applications.downloadFile', $application->id) }}" class="btn btn-primary">
                                                    <i class="fas fa-download"></i> Download File
                                                </a>
                                            @endif
                                        </td>
                                        @endif
                         
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        <div class="pagination mt-3">
                            {!! $applications->links() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('components.modal-delete')
</x-app-layout>
