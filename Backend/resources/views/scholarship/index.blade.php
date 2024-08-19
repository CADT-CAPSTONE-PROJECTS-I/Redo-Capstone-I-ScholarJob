<x-app-layout>
    <x-slot name="header">
        {{ __('Scholarship') }}
    </x-slot>

    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <div class="card-tools">
                        <a href="{{ route('scholarships.create') }}" class="btn btn-primary">
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
                                <a href="{{ route('scholarships.index') }}" class="btn btn-danger">
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
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Organization</th>
                                    <th>Degree</th>
                                    <th>Eligibility</th>
                                    <th>Qualification</th>
                                    <th>Available</th>
                                    <th>Deadline</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($scholarships as $index => $scholarship)
                                    <tr>
                                        <td>{{ $scholarships->firstItem() + $index }}</td>
                                        <td>
                                            @if($scholarship->image && file_exists(public_path($scholarship->image)))
                                                <img src="{{ asset($scholarship->image) }}" alt="Scholarship Image" style="width:50px; height:50px; border-radius:10px;">
                                            @else
                                                <img src="{{ asset('image/default.png') }}" alt="Default Image" style="width:50px; height:50px; border-radius:10px;">
                                            @endif
                                        </td>

                                        <td>{{ $scholarship->organization->name }}</td>
                                        <td>{{ $scholarship->degree }}</td>
                                        <td>{{ $scholarship->eligibility }}</td>
                                        <td>{{ $scholarship->qualification }}</td>
                                        <td>{{ $scholarship->available_position }}</td>
                                        <td>{{ \Carbon\Carbon::parse($scholarship->deadline)->format('d - M - Y') }}</td>

                                       
                                        <td style="width:10%;">
                                                <a href="{{ route('scholarships.show', $scholarship) }}" class="btn btn-warning">
                                                    <i class="fas fa-edit"></i>
                                                </a>
                                                <button type="button" class="btn btn-danger" onclick="confirmDelete({{ $scholarship->id }})">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                                <form id="delete-form-{{ $scholarship->id }}" action="{{ route('scholarships.destroy', $scholarship) }}" method="POST" style="display:none;">
                                                    @csrf
                                                </form>
                                            </td>
                                        </tr>
                                @endforeach
                            </tbody>
                        </table>
                        <div class="pagination mt-3">
                            {!! $scholarships->links() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('components.modal-delete')

</x-app-layout>
