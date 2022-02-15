<?php include('header.php');?>
<div class=" d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="post" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="row content">
                <div class="col">
                    <div class="card mb-5 mb-xl-8">
                        <!--begin::Header-->
                        <div class="card-header border-0 pt-5 align-items-center">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-light fs-3 mb-1">Choose Quiz </span>
                            </h3>
                        </div>
                        <div class="card-body pt-0 pb-5">
                            <div class="row mb-4">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="Quiz name" />
                                </div>
                                <div class="col-md-6 text-right">
                                    <button class="btn btn-primary float-end">Add Question</button>
                                </div>
                            </div>
                            <hr>
                            <div class="row mb-4 justify-content-between">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="Question Name" />
                                </div>
                                <div class="col-md-3">
                                    <select class="form-select">
                                        <option>Select Type</option>
                                        <option value="1">Multiple Choice</option>
                                        <option value="2">Fill in the blank</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-select">
                                        <option>Select Level</option>
                                        <option value="1">Level 1</option>
                                        <option value="2">Level 2</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mcq-answer">
                                <div>
                                    <div class="row mb-4">
                                        <div class="col-md-8">
                                            <div class="d-flex align-items-center">
                                                <input type="radio" class="mx-2" />&nbsp;&nbsp;<input type="text" class="form-control w-md-75" placeholder="answer (option 1)" /><i class="fa fa-trash text-danger mx-4 p-4 border border-danger rounded"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col-md-8">
                                            <div class="d-flex align-items-center">
                                                <input type="radio" class="mx-2" />&nbsp;&nbsp;<input type="text" class="form-control w-md-75" placeholder="answer (option 2)" /><i class="fa fa-trash text-danger mx-4 p-4 border border-danger rounded"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col-md-8">
                                            <div class="d-flex align-items-center">
                                                <input type="radio" class="mx-2" />&nbsp;&nbsp;<input type="text" class="form-control w-md-75" placeholder="answer (option 3)" /><i class="fa fa-trash text-danger mx-4 p-4 border border-danger rounded"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="mb-5 btn btn-outline-dark border border-dark btn-sm" id="add-option">Add Option</button>
                            </div>
                            <div class="fill-blank-answer mb-5">
                                <input type="text" class="form-control" placeholder="type answer" />
                            </div>
                            <div class="row mb-4 justify-content-between">
                                <div class="col-md-6">
                                    <button class="btn btn-outline-info border border-info">Save & Proceed Next</button>
                                </div>
                                <div class="col-md-6 text-right">
                                    <button class="btn btn-info">Submit Quiz</button>
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
<script>
    
    document.querySelector('#add-option').onclick = function() {
        var clength =  document.querySelector('.mcq-answer div').children.length;    
        var htm = '<div class="col-md-8"><div class="d-flex align-items-center"><input type="radio" class="mx-2" />&nbsp;&nbsp;<input type="text" class="form-control w-md-75" placeholder="answer (option '+ (++clength) +')" /><i class="fa fa-trash text-danger mx-4 p-4 border border-danger rounded"></i></div></div>';
        var rw = document.createElement('div');
        rw.classList.add('row');
        rw.classList.add('mb-4');
        rw.innerHTML = htm;
        document.querySelector('.mcq-answer > div').appendChild(rw);
    }

</script>