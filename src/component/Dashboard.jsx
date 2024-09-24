import React from 'react';
import './Light.css';
// import { useEffect, useRef } from 'react';

// import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import ChartComponent from './ChartComponent';

function Dashboard() {


 


  return (
    <div class="container-fluid p-0">
    <h1 class="h3 mb-3"><strong>Dashboard</strong></h1>
    <div class="row">
        <div class="col-xl-6 col-xxl-5 d-flex">
            <div class="w-100">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col mt-0">
                                        <h5 class="card-title">NoOfStudents</h5>
                                    </div>

                                    <div class="col-auto">
                                        <div class="stat text-primary">
                                            <i class="align-middle" data-feather="users"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 class="mt-1 mb-3">770</h1>
                                <div class="mb-0">
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> 2% </span>
                                    <span class="text-muted">SinceLastWeek</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col mt-0">
                                        <h5 class="card-title">Courses</h5>
                                    </div>

                                    <div class="col-auto">
                                        <div class="stat text-primary">
                                            <i class="align-middle" data-feather="map"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 class="mt-1 mb-3">345</h1>
                                <div class="mb-0">
                                    <span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i> 5.25% </span>
                                    <span class="text-muted">SinceLastWeek</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col mt-0">
                                        <h5 class="card-title">NoOfTeachers</h5>
                                    </div>

                                    <div class="col-auto">
                                        <div class="stat text-primary">
                                            <i class="align-middle" data-feather="users"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 class="mt-1 mb-3">120</h1>
                                <div class="mb-0">
                                    <span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i> 1.5% </span>
                                    <span class="text-muted">SinceLastWeek</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col mt-0">
                                        <h5 class="card-title">Exams</h5>
                                    </div>

                                    <div class="col-auto">
                                        <div class="stat text-primary">
                                            <i class="align-middle" data-feather="edit"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 class="mt-1 mb-3">150</h1>
                                <div class="mb-0">
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> 1% </span>
                                    <span class="text-muted">SinceLastWeek</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-6 col-xxl-7">
            <div class="card flex-fill w-100">
                <div class="card-header">

                    <h5 class="card-title mb-0">PassPercentage</h5>
                </div>
                <div class="card-body py-3">
                    <div class="chart chart-sm">
                        <canvas id="chartjs-dashboard-line"></canvas>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
            <div class="card flex-fill w-100">
                <div class="card-header">

                    <h5 class="card-title mb-0">TopCourses</h5>
                </div>
                <div class="card-body d-flex">
                    <div class="align-self-center w-100">
                        <div class="py-3">
                            <div class="chart chart-xs">
                                <canvas id="chartjs-dashboard-pie"></canvas>
                                
                            </div>
                        </div>

                        <table class="table mb-0">
                            <tbody>
                                <tr>
                                    <td>Azure Cloud</td>
                                    <td class="text-end">205</td>
                                </tr>
                                <tr>
                                    <td>Php</td>
                                    <td class="text-end">152</td>
                                </tr>
                                <tr>
                                    <td>Dynamics</td>
                                    <td class="text-end">99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
            <div class="card flex-fill w-100">
                <div class="card-header">
                    <h5 class="card-title">PassFailCount</h5>
                    <h6 class="card-subtitle text-muted">PassFailCountDesc</h6>
                </div>
                <div class="card-body">
                    <div class="chart">
                        <canvas id="chartjs-bar"></canvas>
                        
                        {/* <ChartComponent /> */}
      
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
            <div class="card flex-fill">
                <div class="card-header">

                    <h5 class="card-title mb-0">Calendar</h5>
                </div>
                <div class="card-body d-flex">
                    <div class="align-self-center w-100">
                        <div class="chart">
                            <div id="datetimepicker-dashboard"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 col-lg-8 col-xxl-9 d-flex">
            <div class="card flex-fill">
                <div class="card-header">

                    <h5 class="card-title mb-0">CourseStatus</h5>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th class="d-none d-xl-table-cell">StartDate</th>
                            <th class="d-none d-xl-table-cell">EndDate</th>
                            <th>Status</th>
                            <th class="d-none d-md-table-cell">Assignee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DotNet basics</td>
                            <td class="d-none d-xl-table-cell">01/01/2024</td>
                            <td class="d-none d-xl-table-cell">31/06/2024</td>
                            <td><span class="badge bg-success">Completed</span></td>
                            <td class="d-none d-md-table-cell">Ram</td>
                        </tr>
                        <tr>
                            <td>Dynamics 360</td>
                            <td class="d-none d-xl-table-cell">01/01/2024</td>
                            <td class="d-none d-xl-table-cell">31/06/2024</td>
                            <td><span class="badge bg-danger">Cancelled</span></td>
                            <td class="d-none d-md-table-cell">Harris</td>
                        </tr>
                        <tr>
                            <td>Core Java</td>
                            <td class="d-none d-xl-table-cell">01/01/2024</td>
                            <td class="d-none d-xl-table-cell">31/06/2024</td>
                            <td><span class="badge bg-success">Completed</span></td>
                            <td class="d-none d-md-table-cell">Arjun</td>
                        </tr>
                        <tr>
                            <td>Machine Engineering</td>
                            <td class="d-none d-xl-table-cell">01/01/2024</td>
                            <td class="d-none d-xl-table-cell">31/06/2024</td>
                            <td><span class="badge bg-warning">In progress</span></td>
                            <td class="d-none d-md-table-cell">Tucker</td>
                        </tr>
                        <tr>
                            <td>Php</td>
                            <td class="d-none d-xl-table-cell">01/01/2024</td>
                            <td class="d-none d-xl-table-cell">31/06/2024</td>
                            <td><span class="badge bg-success">Completed</span></td>
                            <td class="d-none d-md-table-cell">Harris</td>
                        </tr>
                        <tr>
                            <td>Azure fundamentals</td>
                            <td class="d-none d-xl-table-cell">01/01/2024</td>
                            <td class="d-none d-xl-table-cell">31/06/2024</td>
                            <td><span class="badge bg-success">Completed</span></td>
                            <td class="d-none d-md-table-cell">Shan</td>
                        </tr>
                        <tr>
                            <td>Kubernetes</td>
                            <td class="d-none d-xl-table-cell">01/01/2024</td>
                            <td class="d-none d-xl-table-cell">31/06/2024</td>
                            <td><span class="badge bg-success">Completed</span></td>
                            <td class="d-none d-md-table-cell">Larry</td>
                        </tr>
                        <tr>
                            <td>Google Cloud</td>
                            <td class="d-none d-xl-table-cell">01/01/2024</td>
                            <td class="d-none d-xl-table-cell">31/06/2024</td>
                            <td><span class="badge bg-warning">In progress</span></td>
                            <td class="d-none d-md-table-cell">Ram</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-xxl-3 d-flex">
            <div class="card flex-fill w-100">
                <div class="card-header">

                    <h5 class="card-title mb-0">MonthlyAccessCount</h5>
                </div>
                <div class="card-body d-flex w-100">
                    <div class="align-self-center chart chart-lg">
                        <canvas id="chartjs-dashboard-bar"></canvas>
                        {/* <canvas ref={barChartTwoRef} id="chartjs-bar"></canvas> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <Flatpickr
        data-enable-time
        value={date}
        options={{
          inline: true,
          defaultDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
        }}
        onChange={([newDate]) => setDate(newDate)}
      /> */}
</div>

  );
}

export default Dashboard;