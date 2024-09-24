import React from 'react';
import '../Light.css';


function AdminUserContent() {
    return (
        <div>
            <div class="container-fluid p-0">
    <h1 class="h3 mb-3"><strong>Admin User List</strong></h1>

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2" onclick="location.href=''">Add Admin user</button>
                    </div>
                </div>
                <div class="card-body">
                    <table id="datatables-reponsive" class="table table-striped" style={{width: '100%'}}>
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Active</th>
                                <th>IsApproved</th>
                                <th>CreatedDate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                <tr>
                                    <td> Lissha</td>
                                    <td> Gasper</td>
                                    <td> lisshagc@gmail.com</td>
                                    <td>
                                       
                                            <text>&nbsp;</text>
                                        
                                        
                                            8765478999
                                        
                                    </td>
                                    <td>
                                        
                                            <text>True</text>
                                        
                                            
                                        
                                    </td>
                                    <td>
                                        
                                        
                                            <text>True</text>
                                        
                                        
                                        
                                    </td>
                                    <td> CreatedDate</td>

                                    <td>
                                        <a asp-action="Edit" asp-route-id="@item.Id">Edit</a> |
                                        <a asp-action="Details" asp-route-id="@item.Id">View</a>
                                        
                                            <text>|</text> <a asp-action="Delete" asp-route-id="@item.Id"> Delete </a>
                                        
                                    </td>
                                </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="sizedModalSm" tabindex="-1" style={{ display: 'none' }} aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><strong>Delete admin</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body m-3">
                <p class="mb-0">

                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}

export default AdminUserContent;