
<div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
     class="fixed inset-0 z-20 bg-black lg:hidden"></div>

<aside :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
       class="fixed inset-y-0 left-0 z-30 w-64 transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0">
    <a href="{{ route('dashboard') }}" class="flex items-center justify-center py-4 border-b border-gray-700">
    <img src="{{ asset('image/scholarJob_logo_green.png') }}" alt="Scholar Job Logo" style="width:50px; height:50px;">
        <span class="text-white text-2xl font-semibold ">{{ __('SCHOLARJOB') }}</span>
    </a>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
            data-accordion="false">
           
            @if (auth()->user()->hasPermission('ViewDashboard'))
            <li class=" nav-item">
                <a href="{{ route('dashboard') }}"
                   class="nav-link {{ request()->routeIs('dashboard') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>{{ __('Dashboard') }}</p>
                </a>
            </li> 
            @endif
   

            @if (auth()->user()->hasPermission('ViewUser'))
            <li class="nav-item">
                <a href="{{ route('clients.index') }}"
                   class="nav-link {{ request()->routeIs('clients.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-users"></i>
                    <p>{{ __('User') }}</p>
                </a>
            </li> 
            @endif


            @if (auth()->user()->hasPermission('ViewJob'))
            <li class="nav-item">
                <a href="{{ route('jobs.index') }}" 
                   class="nav-link {{ request()->routeIs('jobs.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-user-md"></i>
                    <p>{{ __('Job') }}</p>
                </a>
            </li> 
            @endif


            @if (auth()->user()->hasPermission('ViewScholarship'))
            <li class="nav-item">
                <a href="{{ route('scholarships.index') }}"
                class="nav-link {{ request()->routeIs('scholarships.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-graduation-cap"></i>
                    <p>{{ __('Scholarship') }}</p>
                </a>
            </li>         
            @endif


            @if (auth()->user()->hasPermission('ViewApplication'))
            <li class="nav-item">
                <a href="{{ route('applications.index') }}"
                   class="nav-link {{ request()->routeIs('applications.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-book"></i>
                    <p>{{ __('Application') }}</p>
                </a>
            </li>
            @endif


            @if (auth()->user()->hasPermission('ViewOrganization'))
            <li class="nav-item">
                <a href="{{ route('organizations.index') }}"
                class="nav-link {{ request()->routeIs('organizations.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-school"></i>
                    <p>{{ __('Organization') }}</p>
                </a>
            </li> 
            @endif


            @if (auth()->user()->hasPermission('ViewAboutUs'))
            <li class="nav-item">
                <a href="{{ route('about_us.index') }}"
                class="nav-link {{ request()->routeIs('about_us.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-school"></i>
                    <p>{{ __('AboutUs') }}</p>
                </a>
            </li> 
            @endif

        </ul>
    </nav>

    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
           
            @if (auth()->user()->hasPermission('ViewAccount'))
            <li class="nav-header">{{ __('User and Privilege') }}</li>
            <li class="nav-item">
                <a href="{{ route('accounts.index') }}"
                class="nav-link {{ request()->routeIs('accounts.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-briefcase"></i>
                    <p>{{ __('Account') }}</p>
                </a>
            </li>
            @endif

            @if (auth()->user()->hasPermission('ViewRoles'))
            <li class="nav-item">
                <a href="{{ route('roles.index') }}"
                class="nav-link {{ request()->routeIs('roles.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-user-tag"></i>
                    <p>{{ __('Roles') }}</p>
                </a>
            </li>  
            @endif

            @if (auth()->user()->hasPermission('ViewPermissions'))
            <li class="nav-item">
                <a href="{{ route('permissions.index') }}"
                class="nav-link {{ request()->routeIs('permissions.index') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-lock"></i>
                    <p>{{ __('Permissions') }}</p>
                </a>
            </li>     
            @endif

        </ul>
    </nav>
</aside>

