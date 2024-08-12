<!-- Overlay when sidebar is open on small screens -->
<div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
     class="fixed inset-0 z-20 bg-black lg:hidden"></div>

<aside :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
       class="fixed inset-y-0 left-0 z-30 w-64 transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0">
    <a href="{{ route('dashboard') }}" class="flex items-center justify-center py-4 border-b border-gray-700">
        <img src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png" alt="Logo" class="h-8 w-8 mr-2">
        <span class="text-white text-2xl font-semibold">{{ __('Dashboard') }}</span>
    </a>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
            data-accordion="false">
            <!-- Dashboard Link -->
            <li class=" nav-item">
                <a href="{{ route('dashboard') }}"
                   class="nav-link {{ request()->routeIs('dashboard') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>{{ __('Dashboard') }}</p>
                </a>
            </li>

            <!-- Users Link -->
            <li class="nav-item">
                <a href="{{ route('users.index') }}"
                   class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-users"></i>
                    <p>{{ __('Users') }}</p>
                </a>
            </li>
        </ul>
    </nav>

    <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    
        <li class="nav-header">{{ __('User and Privilege') }}</li>


        {{-- <!-- Scholarship Offer Link -->
        <li class="nav-item">
            <a href="{{ route('account.scholarship-offer') }}"
               class="nav-link {{ request()->routeIs('account.scholarship-offer') ? 'active' : '' }}">
                <i class="nav-icon fas fa-graduation-cap"></i>
                <p>{{ __('Scholarship Offer') }}</p>
            </a>
        </li> --}}

        <!-- Job Recruiter Link -->
        <li class="nav-item">
            <a href="{{ route('accounts.index') }}"
               class="nav-link {{ request()->routeIs('accounts.index') ? 'active' : '' }}">
                <i class="nav-icon fas fa-briefcase"></i>
                <p>{{ __('Account') }}</p>
            </a>
        </li>

        <!-- Roles Link -->
        <li class="nav-item">
            <a href="{{ route('roles.index') }}"
               class="nav-link {{ request()->routeIs('roles.index') ? 'active' : '' }}">
                <i class="nav-icon fas fa-user-tag"></i>
                <p>{{ __('Roles') }}</p>
            </a>
        </li>

        <!-- Permissions Link -->
        <li class="nav-item">
            <a href="{{ route('permissions.index') }}"
               class="nav-link {{ request()->routeIs('permissions.index') ? 'active' : '' }}">
                <i class="nav-icon fas fa-lock"></i>
                <p>{{ __('Permissions') }}</p>
            </a>
        </li>

        <!-- Existing navigation items -->
    </ul>
</nav>

    <!-- /.sidebar-menu -->
</aside>
<!-- /.sidebar -->
