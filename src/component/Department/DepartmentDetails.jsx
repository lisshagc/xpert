import React from "react";

function DepartmentDetails() {
    return (
      <div>
        <div class="container-fluid p-0">
    <h1 class="h3 mb-3"><strong>ViewDepartment</strong></h1>
    <div class="row">
        <div class="col-12 col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">DepartmentForm</h5>
                    <h6 class="card-subtitle text-muted">ToViewDepartment</h6>
                </div>
                <div class="card-body">
                    <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                    <div class="mb-3">
                        <label asp-for="Name" class="form-label">Name</label>
                        <input asp-for="Name" class="form-control" placeholder="Disabledinput" disabled></input>
                        <span asp-validation-for="Name" class="text-danger"></span>
                    </div>
                    <div class="mb-3">
                        <label asp-for="Active" class="form-label"></label><br />
                        <label class="form-label">Active</label>
                    </div>
                    <div class="mb-3">
                        <label asp-for="CreatedBy" class="form-label"></label>
                        <input value="@(ViewBag.CreatedByName)" class="form-control" placeholder="Disabledinput" disabled></input>
                    </div>
                    <div class="mb-3">
                        <label asp-for="CreatedDate" class="form-label"></label>
                        <input asp-for="CreatedDate" class="form-control" placeholder="Disabledinput" disabled></input>
                    </div>
                    <div class="mb-3">
                        <label asp-for="ModifiedBy" class="form-label"></label>
                        <input value="@(ViewBag.ModifiedByName)" class="form-control" placeholder="NoData" disabled></input>
                    </div>
                    <div class="mb-3">
                        <label asp-for="ModifiedDate" class="form-label"></label>
                        <input asp-for="ModifiedDate" class="form-control" placeholder="NoData" disabled></input>
                    </div>
                    <button class="btn btn-primary me-md-2" type="submit" >Edit</button>
                    <button class="btn btn-primary" type="button" >Cancel</button>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    );
  }
  
  export default DepartmentDetails;