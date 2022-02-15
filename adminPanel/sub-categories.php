<?php include('header.php');?>
<style>
    .category-wrapper {
        padding: 20px;
        margin-bottom: 1rem;
        border: 1px solid #4444;
        border-radius: 10px
    }

    .category-wrapper p{
        word-break: break-all;
    }

    .category-wrapper .btn-link{
        padding-bottom: 0 !important;
        color: var(--bs-info)
    }

    .category-wrapper .btn-link i{
        color: var(--bs-info)
    }

    .category-wrapper .category--action i{
        margin-top :1rem;
        padding :2px 4px;
        color: var(--bs-info)
    }

    .category-wrapper .category--action i:hover{
        color: #aaa;
    }

    .category-wrapper .category--action{
        display:inline-flex;
        float:right;
        justify-content:flex-end;
    }

</style>
<div class=" d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="post" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="row content">
                <div class="col">
                    <div class="card mb-5 mb-xl-8">
                        <!--begin::Header-->
                        <div class="card-header border-0 pt-5 align-items-center">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-light fs-3 mb-1">Sub Categories of <b class="text-info text-uppercase">Category 1</b></span>
                            </h3>
                            
                            <a href="add-sub-category.php" class="btn btn-outline-info border border-info btn-sm">Add sub category</a>
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body py-3">
                            <div class="row">
                                <div class="col-md-4 col-sm-6">
                                    <div class="category-wrapper">
                                        <h4>Sub-Category-1</h4>
                                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati </p>
                                        <a href="lessons.php" class="btn btn-link"><i class="fa fa-book-open me-0"></i> Lessions</button>
                                    
                                       <div class="category--action">
                                            <a href="javascript:;" class="px-1"><i class="fa fa-eye"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-edit"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="category-wrapper">
                                        <h4>Sub-Category-2</h4>
                                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati </p>
                                        <a href="lessons.php" class="btn btn-link"><i class="fa fa-book-open me-0"></i> Lessions</button>
                                        <div class="category--action">
                                            <a href="javascript:;" class="px-1"><i class="fa fa-eye"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-edit"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="category-wrapper">
                                        <h4>Sub-Category-3</h4>
                                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati </p>
                                        <a href="lessons.php" class="btn btn-link"><i class="fa fa-book-open me-0"></i> Lessions</button>
                                        <div class="category--action">
                                            <a href="javascript:;" class="px-1"><i class="fa fa-eye"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-edit"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </div>
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
<?php include('footer.php');?>