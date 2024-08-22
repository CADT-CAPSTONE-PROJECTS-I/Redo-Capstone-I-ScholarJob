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
                    <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <div class="bg-blue-100 rounded-full p-3 mb-3">
                            <i class="fas fa-briefcase text-blue-500 fa-2x"></i>
                        </div>
                        <h2 class="text-lg font-semibold text-gray-800">Jobs</h2>
                        <p class="text-2xl font-bold text-gray-900">{{ $jobCount }}</p>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <div class="bg-green-100 rounded-full p-3 mb-3">
                            <i class="fas fa-graduation-cap text-green-500 fa-2x"></i>
                        </div>
                        <h2 class="text-lg font-semibold text-gray-800">Scholarships</h2>
                        <p class="text-2xl font-bold text-gray-900">{{ $scholarshipCount }}</p>
                    </div>
                    
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
                    
                    <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <div class="bg-yellow-100 rounded-full p-3 mb-3">
                            <i class="fas fa-users text-yellow-500 fa-2x"></i>
                        </div>
                        <h2 class="text-lg font-semibold text-gray-800">User</h2>
                        <p class="text-2xl font-bold text-gray-900">{{ $clientCount }}</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <div class="bg-orange-100 rounded-full p-3 mb-3">
                            <i class="fas fa-file-alt text-orange-500 fa-2x"></i>
                        </div>
                        <h2 class="text-lg font-semibold text-gray-800">Applications</h2>
                        <p class="text-2xl font-bold text-gray-900">{{ $applicationDistribution['Applied for Job'] + $applicationDistribution['Applied for Scholarship'] }}</p>
                    </div>
                </div>

                <div class="bg-white p-6 mt-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4">Jobs, Scholarships, and Users by Month</h3>
                    <div id="bar-chart"></div>
                </div>

                <div class="bg-white p-6 mt-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4">Applications Distribution</h3>
                    <div id="pie-chart" class="flex justify-center"></div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script>

    var startMonth = 7;


    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    
    var rotatedMonths = months.slice(startMonth).concat(months.slice(0, startMonth));


    var jobsData = @json(array_values($jobsByMonth->toArray()));
    var scholarshipsData = @json(array_values($scholarshipsByMonth->toArray()));
    var usersData = @json(array_values($clientsByMonth->toArray()));
    var applicationsJobData = @json(array_values($applicationsJobByMonth->toArray()));
    var applicationsScholarshipData = @json(array_values($applicationsScholarshipByMonth->toArray()));

   
    jobsData = jobsData.slice(startMonth).concat(jobsData.slice(0, startMonth));
    scholarshipsData = scholarshipsData.slice(startMonth).concat(scholarshipsData.slice(0, startMonth));
    usersData = usersData.slice(startMonth).concat(usersData.slice(0, startMonth));
    applicationsJobData = applicationsJobData.slice(startMonth).concat(applicationsJobData.slice(0, startMonth));
    applicationsScholarshipData = applicationsScholarshipData.slice(startMonth).concat(applicationsScholarshipData.slice(0, startMonth));

    var barOptions = {
        series: [{
            name: "Jobs",
            data: jobsData
        }, {
            name: "Scholarships",
            data: scholarshipsData
        }, {
            name: "Users",
            data: usersData
        }, {
            name: "Applications for Jobs",
            data: applicationsJobData
        }, {
            name: "Applications for Scholarships",
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

    var barChart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);
    barChart.render();
    </script>


    <script>
        
        var totalApplications = {{ $applicationDistribution['Applied for Job'] }} + {{ $applicationDistribution['Applied for Scholarship'] }};

        var pieOptions = {
            series: [
                {{ $applicationDistribution['Applied for Job'] }},
                {{ $applicationDistribution['Applied for Scholarship'] }},
                totalApplications
            ],
            chart: {
                width: 480,
                type: 'pie',
            },
            labels: [
                "Applied for Job (" + {{ $applicationDistribution['Applied for Job'] }} + ")",
                "Applied for Scholarship (" + {{ $applicationDistribution['Applied for Scholarship'] }} + ")",
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
