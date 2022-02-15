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
    }

    .category-wrapper .category--action i{
        margin-top :1rem;
        padding :2px 4px;
        color: var(--bs-active-info)
    }

    .category-wrapper .category--action i:hover{
        color: #aaa;
    }

    .category-wrapper .category--action{
        display:inline-flex;
        float:right;
        justify-content:flex-end;
    }

    .hour-spend{
        max-width: 500px;
        position:relative;
        width:100%;
        height: 20px;
        border-radius: 20px;
        border:2px solid #000;
        display: block;
       
    }

    .hour-spend:before{
        content:'0 Hrs.';
        position:absolute;
        left: 0;
        top: 20px;
    }
    .hour-spend:after{
        content:'1 Hrs';
        position:absolute;
        right: 0;
        top: 20px;
    }

    .hour-spend span{
        max-width: calc(100% / 4.09);
        width:100%;
        height:100%;
        display: inline-block;
        background: #eee;
    }

    .hour-spend span:not(:last-child){
    }

    .hour-spend span:first-child{
        border-radius: 20px 0 0 20px;
    }
    .hour-spend span:last-child{
        border-radius: 0 20px 20px 0;
    }

    .hour-spend span.filled{
        background: orange;
    }
</style>
<div class=" d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="post" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="d-flex justify-content-center align-items-center mt-5">
                <label class="mb-0 me-3 fw-bolder">Hour Used:</label>
                <div class="hour-spend">
                    <span class='filled'></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="row content">
                <div class="col">
                    <div class="card mb-5 mb-xl-8">
                        <!--begin::Header-->
                        <div class="card-header border-0 pt-5 align-items-center">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fs-3 mb-1">Categories List</span>
                            </h3>
                            <a href="add-category.php" class="btn btn-outline-info border border-info btn-sm">Add Category</a>
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body py-3">
                            <div class="row">
                                <div class="col-md-4 col-sm-6">
                                    <div class="category-wrapper">
                                        <h4>Category 1</h4>
                                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati </p>
                                        <a href="sub-categories.php" class="btn btn-link text-info"><i class="fa fa-list text-info me-0"></i>Sub Categories</button>
                                    
                                       <div class="category--action">
                                            <a href="javascript:;" class="px-1"><i class="fa fa-eye"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-edit"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="category-wrapper">
                                        <h4>Category 1</h4>
                                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati </p>
                                        <a href="sub-categories.php" class="btn btn-link text-info"><i class="fa fa-list text-info me-0"></i>Sub Categories</button>
                                        <div class="category--action">
                                            <a href="javascript:;" class="px-1"><i class="fa fa-eye"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-edit"></i></a>
                                            <a href="javascript:;" class="px-1"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="category-wrapper">
                                        <h4>Category 1</h4>
                                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati </p>
                                        <a href="sub-categories.php" class="btn btn-link text-info"><i class="fa fa-list text-info me-0"></i>Sub Categories</button>
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