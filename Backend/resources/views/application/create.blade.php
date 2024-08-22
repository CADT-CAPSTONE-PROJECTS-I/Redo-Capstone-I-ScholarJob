<x-app-layout>
    <x-slot name="header">
        {{ __('Create application') }}
    </x-slot>
    <form action="{{ route('applications.store') }}" method="POST" enctype="multipart/form-data">
        @csrf


        <div class="form-group">
            <label for="client_id">{{ __('Client') }}</label>
            <select name="client_id" id="client_id" class="form-control" required>
                <option value="">Select Client</option>
                @foreach($clients as $client)
                    <option value="{{ $client->id }}">{{ $client->name }}</option>
                @endforeach
            </select>
        </div>


        <div class="form-group">
            <label for="job_id">{{ __('Job') }}</label>
            <input type="number" name="job_id" id="job_id" class="form-control" >
        </div>


        <div class="form-group">
            <label for="scholarship_id">{{ __('Scholarship') }}</label>
            <input type="number" name="scholarship_id" id="scholarship_id" class="form-control" >
        </div>

    
        <div class="form-group">
            <label class="required" for="status">{{ __('Status') }}</label>
            <input type="text" name="status" id="status" class="form-control" required>
        </div>

        <div class="form-group">
            <label for="attach_file">{{ __('Attach File (PDF only)') }}</label>
            <input type="file" name="attach_file" class="form-control" id="attach_file">
        </div>

        <button type="submit" class="btn btn-primary">{{ __('Submit') }}</button>
    </form>

</x-app-layout>
