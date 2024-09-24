// import React from "react";

// function Delete() {
//     return (
//       <div>
//         <div class="container-fluid p-0">
//     <h1 class="h3 mb-3"><strong>DeleteDepartment</strong></h1>
//     <div class="row">
//         <div class="col-12 col-xl-6">
//             <div class="card">
//                 <div class="card-header">
//                     <h5 class="card-title">DepartmentForm</h5>
//                     <h6 class="card-subtitle text-muted"><strong class="text-danger">AreYouSureYouWantToDeleteThisDepartment?</strong></h6>
//                 </div>
//                 <div class="card-body">
//                     <div asp-validation-summary="ModelOnly" class="text-danger"></div>
//                     <div class="mb-3">
//                         <label asp-for="Name" class="form-label">Name</label>
//                         <input asp-for="Name" class="form-control" placeholder="DisabledInput" disabled />
//                         <span asp-validation-for="Name" class="text-danger"></span>
//                     </div>
//                     <div class="mb-3">
//                         <label asp-for="Active" class="form-label"></label><br />
//                         <label class="form-label">Active</label>
//                     </div>
//                     <div class="mb-3">
//                         <label asp-for="CreatedBy" class="form-label"></label>
//                         <input value="@(ViewBag.CreatedByName)" class="form-control" placeholder="DisabledInput" disabled />
//                     </div>
//                     <div class="mb-3">
//                         <label asp-for="CreatedDate" class="form-label"></label>
//                         <input asp-for="CreatedDate" class="form-control" placeholder="DisabledInput" disabled />
//                     </div>
//                     <div class="mb-3">
//                         <label asp-for="ModifiedBy" class="form-label"></label>
//                         <input value="@(ViewBag.ModifiedByName)" class="form-control" placeholder="NoData" disabled />
//                     </div>
//                     <div class="mb-3">
//                         <label asp-for="ModifiedDate" class="form-label"></label>
//                         <input asp-for="ModifiedDate" class="form-control" placeholder="NoData" disabled />
//                     </div>
                    
//                     <form asp-action="Delete" asp-route-id="@Model?.Id" method="post">
//                         <div class="mb-3">
//                             <label class="form-label">ReasonForDeletion</label>
//                             <textarea class="form-control" name="DeletionReason" placeholder="EnterReason" required maxlength="64"></textarea>
                            
//                         </div>
//                         <input type="submit" value=Delete class="btn btn-danger me-md-2" />
//                         <a href="@Url.Action("Index", "Department")" class="btn btn-primary">Cancel</a>
//                     </form>
                    
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//       </div>
//     );
//   }
  
//   export default Delete;