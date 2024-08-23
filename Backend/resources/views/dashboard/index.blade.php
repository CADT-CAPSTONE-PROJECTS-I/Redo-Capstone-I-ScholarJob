<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary card-outline">

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    
                    @if (auth()->user()->hasPermission('DashboardJob'))
                        <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <div class="bg-blue-100 rounded-full p-3 mb-3">
                                <i class="fas fa-briefcase text-blue-500 fa-2x"></i>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-800">Jobs</h2>
                            <p class="text-2xl font-bold text-gray-900">{{ $jobCount }}</p>
                        </div>

 
                        <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <div class="bg-orange-100 rounded-full p-3 mb-3">
                                <i class="fas fa-file-alt text-orange-500 fa-2x"></i>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-800">Job Applications</h2>
                            <p class="text-2xl font-bold text-gray-900">{{ $applicationDistribution['Applied for Job'] }}</p>
                        </div>
                    @endif
                    <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <div class="bg-yellow-100 rounded-full p-3 mb-3">
                            <i class="fas fa-users text-yellow-500 fa-2x"></i>
                        </div>
                        <h2 class="text-lg font-semibold text-gray-800">Users</h2>
                        <p class="text-2xl font-bold text-gray-900">{{ $clientCount }}</p>
                    </div>

                    @if (auth()->user()->hasPermission('DashboardScholarship'))
                        <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <div class="bg-green-100 rounded-full p-3 mb-3">
                                <i class="fas fa-graduation-cap text-green-500 fa-2x"></i>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-800">Scholarships</h2>
                            <p class="text-2xl font-bold text-gray-900">{{ $scholarshipCount }}</p>
                        </div>

                        <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <div class="bg-orange-100 rounded-full p-3 mb-3">
                                <i class="fas fa-file-alt text-orange-500 fa-2x"></i>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-800">Scholarship Applications</h2>
                            <p class="text-2xl font-bold text-gray-900">{{ $applicationDistribution['Applied for Scholarship'] }}</p>
                        </div>
                    @endif

                  
                    @if (auth()->user()->hasPermission('SuperAdmin'))
                        <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <div class="bg-red-100 rounded-full p-3 mb-3">
                                <i class="fas fa-user text-red-500 fa-2x"></i>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-800">Accounts</h2>
                            <p class="text-2xl font-bold text-gray-900">{{ $userCount }}</p>
                        </div>

                        <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <div class="bg-purple-100 rounded-full p-3 mb-3">
                                <i class="fas fa-building text-purple-500 fa-2x"></i>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-800">Organizations</h2>
                            <p class="text-2xl font-bold text-gray-900">{{ $organizationCount }}</p>
                        </div>
                    @endif
                </div>

                @if (auth()->user()->hasPermission('DashboardScholarship'))
                    <div class="bg-white p-6 mt-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold mb-4">Users, Scholarships, and Scholarship Applications</h3>
                        <div id="scholarship-bar-chart"></div>
                    </div>
                @endif

                @if (auth()->user()->hasPermission('DashboardJob'))
                    <div class="bg-white p-6 mt-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold mb-4">Users, Jobs, and Job Applications</h3>
                        <div id="job-bar-chart"></div>
                    </div>
                @endif
                @if (auth()->user()->hasPermission('SuperAdmin'))
                <div class="bg-white p-6 mt-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4">Applications Distribution</h3>
                    <div id="pie-chart" class="flex justify-center"></div>
                </div>
                @endif
       
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

    <script>
        var startMonth = 7;
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var rotatedMonths = months.slice(startMonth).concat(months.slice(0, startMonth));

        var usersData = @json(array_values($clientsByMonth->toArray()));
        var scholarshipsData = @json(array_values($scholarshipsByMonth->toArray()));
        var jobsData = @json(array_values($jobsByMonth->toArray()));
        var applicationsJobData = @json(array_values($applicationsJobByMonth->toArray()));
        var applicationsScholarshipData = @json(array_values($applicationsScholarshipByMonth->toArray()));

        usersData = usersData.slice(startMonth).concat(usersData.slice(0, startMonth));
        scholarshipsData = scholarshipsData.slice(startMonth).concat(scholarshipsData.slice(0, startMonth));
        jobsData = jobsData.slice(startMonth).concat(jobsData.slice(0, startMonth));
        applicationsJobData = applicationsJobData.slice(startMonth).concat(applicationsJobData.slice(0, startMonth));
        applicationsScholarshipData = applicationsScholarshipData.slice(startMonth).concat(applicationsScholarshipData.slice(0, startMonth));

        @if (auth()->user()->hasPermission('DashboardScholarship'))
            var scholarshipBarOptions = {
                series: [{
                    name: "Users",
                    data: usersData
                }, {
                    name: "Scholarships",
                    data: scholarshipsData
                }, {
                    name: "Scholarship Applications",
                    data: applicationsScholarshipData
                }],
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: rotatedMonths,
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val + " entries";
                        }
                    }
                }
            };
            var scholarshipBarChart = new ApexCharts(document.querySelector("#scholarship-bar-chart"), scholarshipBarOptions);
            scholarshipBarChart.render();
        @endif

        @if (auth()->user()->hasPermission('DashboardJob'))
            var jobBarOptions = {
                series: [{
                    name: "Users",
                    data: usersData
                }, {
                    name: "Jobs",
                    data: jobsData
                }, {
                    name: "Job Applications",
                    data: applicationsJobData
                }],
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: rotatedMonths,
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val + " entries";
                        }
                    }
                }
            };
            var jobBarChart = new ApexCharts(document.querySelector("#job-bar-chart"), jobBarOptions);
            jobBarChart.render();
        @endif

        var jobApplications = {{ $applicationDistribution['Applied for Job'] }};
        var scholarshipApplications = {{ $applicationDistribution['Applied for Scholarship'] }};
        var totalApplications = jobApplications + scholarshipApplications;
        var totalUsers = {{ $clientCount }};

        var pieOptions = {
            series: [
                jobApplications,
                scholarshipApplications,
                totalUsers,
                totalApplications
            ],
            chart: {
                width: 480,
                type: 'pie',
            },
            labels: [
                "Applied for Job (" + jobApplications + ")",
                "Applied for Scholarship (" + scholarshipApplications + ")",
                "Users (" + totalUsers + ")",
                "Total Applications (" + totalApplications + ")"
            ],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 400
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        var pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieOptions);
        pieChart.render();

    </script>
</x-app-layout>
