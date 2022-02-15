<?php include('header.php'); ?>
<div class=" d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="post" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="row content">
                <div class="col">
                    <div class="card mb-5 mb-xl-8">
                        <!--begin::Header-->
                        <div class="card-header border-0 pt-5 align-items-center">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fs-3 mb-1">Add sub category</span>
                            </h3>
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body py-3">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-5">
                                        <label class="mb-2">Category Name</label>
                                        <input type="text" disabled class="form-control" value="Category 1" placeholder="enter category name" />
                                    </div>
                                    <div class="mb-5">
                                        <label class="mb-2">Name</label>
                                        <input type="text" class="form-control" placeholder="enter category name" />
                                    </div>
                                    <div class="mb-5">
                                        <label class="mb-2">description</label>
                                        <textarea rows="4"  class="form-control" placeholder="enter category name" ></textarea>
                                    </div>
                                    <div class="mb-5">
                                        <label class="mb-2">Image / video / GIF</label>
                                        <div class="dropzone" id="kt_modal_create_project_settings_logo">
                                            <!--begin::Message-->
                                            <div class="dz-message   align-items-center" style="flex-direction: column">
                                                <!--begin::Icon-->
                                                <!--begin::Svg Icon | path: icons/duotune/files/fil010.svg-->
                                                <span class="svg-icon svg-icon-3hx svg-icon-primary mb-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z" fill="black"></path>
                                                        <path d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z" fill="black"></path>
                                                        <path d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z" fill="black"></path>
                                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black"></path>
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                                <!--end::Icon-->
                                                <!--begin::Info-->
                                                <div class="mx-4">
                                                    <h3 class="dfs-5 fs-5 text-gray-500 fw-light mb-0">Drop files here or click to upload.</h3>
                                                </div>
                                                <!--end::Info-->
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-info mb-4">Add Sub  category</button>
                                </div>
                            </div>
                        </div>
                        <!--begin::Body-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include('footer.php'); ?>