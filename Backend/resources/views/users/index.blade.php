{{-- <x-app-layout>
    <x-slot name="header">
        {{ __('Users') }}
    </x-slot>

    <div class="inline-block overflow-hidden min-w-full rounded-lg shadow">
        <table class="min-w-full leading-normal">
            <thead>
            <tr>
                <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Name
                </th>
                <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Email
                </th>
            </tr>
            </thead>
            <tbody>
            @foreach($users as $user)
                <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p class="text-gray-900 whitespace-no-wrap">{{ $user->name }}</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p class="text-gray-900 whitespace-no-wrap">{{ $user->email }}</p>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>

        <div class="d-flexa justify-content-between align-items-center px-5 py-5 bg-white border-top">
            {{ $users->links('pagination::bootstrap-4') }}
        </div>
    </div>

</x-app-layout> --}}
