<x-app-layout>
    <x-slot name="header">
        {{ __('Users') }}
    </x-slot>

    <div class="mb-4 d-inline-flex overflow-hidden w-100 bg-white rounded shadow">
        <div class="d-flex justify-content-center align-items-center w-12 bg-primary">
            <svg class="w-6 h-6 text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
            </svg>
        </div>

        <div class="px-4 py-2">
            <div>
                <span class="font-weight-bold text-primary">Info</span>
                <p class="text-muted">Sample table page</p>
            </div>
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th class="text-left text-uppercase bg-light">Name</th>
                <th class="text-left text-uppercase bg-light">Email</th>
            </tr>
            </thead>
            <tbody>
            @foreach($users as $user)
                <tr>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->email }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>

        <div class="d-flex justify-content-between align-items-center px-5 py-5 bg-white border-top">
            {{ $users->links('pagination::bootstrap-4') }}
        </div>
    </div>

</x-app-layout>
