<?php include('header.php');?>
<style>
    .db-icons{
        width: 60px;
        height :60px;
        box-shadow: 0 10px 20px -5px #0004;
        display: flex;
        justify-content:center;
        align-items:center;
        background: #0091;
        border-radius: 50%;
        margin-right: 20px
    }
    
    .card .card-body{
        padding: 2rem 1.5rem;
    }
    </style>
<div class=" d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="post" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="row content">
                <div class="col">
                    <div class="card mb-5 mb-xl-8">
                        <!--begin::Header-->
                        <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fs-3 mb-1">All users</span>
                            </h3>
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body py-3">
                            <!--begin::Table container-->
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <!--begin::Table head-->
                                    <thead>
                                        <tr class="fw-bolder text-muted">
                                            <th class="w-25px">
                                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input class="form-check-input" type="checkbox" value="1" data-kt-check="true" data-kt-check-target=".widget-9-check" />
                                                </div>
                                            </th>
                                            <th class="min-w-10px"> S.No</th>
                                            <th class="min-w-140px">Name</th>
                                            <th class="min-w-140px">Email</th>
                                            <th class="min-w-140px">Added on</th>
                                            <th class="min-w-100px text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <!--end::Table head-->
                                    <!--begin::Table body-->
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input class="form-check-input widget-9-check" type="checkbox" value="1" />
                                                </div>
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                Aslam khan
                                            </td>
                                            <td>
                                                khanaslam123@gmail.com
                                            </td>
                                            <td>
                                                12-02-2022 10:00 PM 
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-end">
                                                    <a href="#" class="btn btn-info btn-sm">Edit</a>
                                                    <a href="#" class="btn btn-success btn-sm mx-2">Active</a>
                                                    <a href="#" class="btn btn-danger btn-sm">Delete</a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <!--end::Table body-->
                                </table>
                                <!--end::Table-->
                            </div>
                            <!--end::Table container-->
                        </div>
                        <!--begin::Body-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include('footer.php');?>