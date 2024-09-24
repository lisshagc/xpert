import React from 'react';
import './Light.css';
import { useNavigate } from 'react-router-dom';

function Login (){
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate('/home'); // Redirect to the home page on click
  };

  return (
    <div>
    <link href="light.css" rel="stylesheet" asp-append-version="true" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="~/lib/jquery-validation/dist/jquery.validate.min.js"></script>
    <script src="~/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js"></script>
    <script type="text/javascript" src="~/js/app.js"></script>

    <main class="d-flex w-100">
        <div class="container d-flex flex-column">
            <div class="row vh-100">
                <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div class="d-table-cell align-middle">

                        <div class="text-center mt-4">
                            <h1 class="h2">Welcome back!</h1>
                            <p class="lead">
                                Sign in to your account to continue
                            </p>
                        </div>

                        <form asp-action="Index">
                            <div class="card">
                                <div class="card-body">
                                    <div class="text-center">
                                        <img src="~/img/avatars/avatar-6.jpg" alt="Charles Hall" class="img-fluid rounded-circle" width="132" height="132" />
                                    </div>
                                    <div asp-validation-summary="ModelOnly" class="text-danger"></div>

                                    <div class="mb-3">
                                        <label asp-for="Email" class="form-label"></label>
                                        <input asp-for="Email" class="form-control form-control-lg" type="email" name="Email" placeholder="Enter your email" />
                                        <span asp-validation-for="Email" class="text-danger"></span>
                                    </div>
                                    <div class="mb-3">
                                        <label asp-for="Password" class="form-label">Password</label>
                                        <input asp-for="Password" class="form-control form-control-lg" type="password" name="Password" placeholder="Enter your password" />
                                        <span asp-validation-for="Password" class="text-danger"></span><br />
                                        <small>
                                            <a href="/en/forgot">Forgot password?</a>
                                        </small>
                                    </div>

                                    <div class="text-center mt-3">
                                        <button class="btn btn-primary" type="submit" value="Index" onClick={handleLoginClick} >Log In</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
  );
};

export default Login;



