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
                </div>

                <div class="bg-white p-6 mt-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4">Jobs, Scholarships, and Users by Month</h3>
                    <div id="bar-chart"></div>
                </div>

                <div class="bg-white p-6 mt-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4">User and Client Distribution</h3>
                    <div id="pie-chart"></div>
                </div>
            </div>
        </div>
    </div>





    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script>
        var barOptions = {
            series: [{
                name: "Jobs",
                data: @json(array_values($jobsByMonth->toArray()))
            }, {
                name: "Scholarships",
                data: @json(array_values($scholarshipsByMonth->toArray()))
            }, {
                name: "Users",
                data: @json(array_values($clientsByMonth->toArray()))
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
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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

        var pieOptions = {
            series: @json(array_values($userDistribution->toArray())),
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: @json(array_keys($userDistribution->toArray())),
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
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
