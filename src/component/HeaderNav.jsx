import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Light.css';
import usimage from '../img/flags/us.png';
import avatarImage from '../img/avatars/avatar-6.jpg'; 
import feather from 'feather-icons';



function HeaderNav() {
    
  
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      };

      useEffect(() => {
        feather.replace();
      }, []);
    


  return (


    <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle js-sidebar-toggle">
            <i class="hamburger align-self-center"></i>
        </a>
              
        <div class="navbar-collapse collapse">
            <ul class="navbar-nav ms-auto">
                <li  class="nav-item dropdown">
                    <a class="nav-link dropdown" href="https://njtechinc.com" target="_blank">
                    <img src="https://njtechinc.com/images/logo.png" style={{ width: '95px', height: '24px' }} />
                    </a>
                </li>
                <li class="nav-item dropdown">
                <a className="nav-link dropdown badge bg-dark text-white ms-2"  href="#"  style={{ marginTop: '10px' }}>

                Spanish
                </a>
                </li> 

                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                        <div class="position-relative">
                            <i class="align-middle" data-feather="bell"></i>
                            <span class="indicator">0</span>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                        <div class="dropdown-menu-header">
                           TopNotifications
                        </div>
                        <div class="list-group" id="notificationList">
       
                        </div>
                        <div class="list-group">
                        <a href="#" class="list-group-item">
                        <div class="row g-0 align-items-center">
                        <div class="col-2">
                        <i class="text-warning" data-feather="bell"></i>
                        </div>
                        <div class="col-10">
                        <div class="text-dark">New course added</div>
                        <div class="text-muted small mt-1">check under course section to access.</div>
                        <div class="text-muted small mt-1">30m ago</div>
                        </div>
                        </div>
                        </a>
                        </div> 
                        <div class="dropdown-menu-footer">
                            <a href="/notification" class="text-muted">ShowAllNotifications</a>
                        </div>
                    </div>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-flag dropdown-toggle" href="#" id="languageDropdown" data-bs-toggle="dropdown">
                        <img id="imgLang" src={usimage} />
                    </a>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                        <a class="dropdown-item" href="#" onclick="SetCulture('en')">
                            <img src="~/img/flags/us.png" alt="English" width="20" class="align-middle me-1" />
                            <span class="align-middle">English</span>
                        </a>
                        <a class="dropdown-item" href="#" onclick="SetCulture('es')">
                            <img src="~/img/flags/es.png" alt="Spanish" width="20" class="align-middle me-1" />
                            <span class="align-middle">Spanish</span>
                        </a>
                        <a class="dropdown-item" href="#" onclick="SetCulture('zh-CN')">
                            <img src="~/img/flags/cn.png" alt="Chinese" width="20" class="align-middle me-1" />
                            <span class="align-middle">Chinese</span>
                        </a>
                    </div>
                </li>

                <li className="nav-item">
                <button className="nav-icon js-fullscreen d-none d-lg-block" onClick={toggleFullScreen}>
                <div className="position-relative">
                <i className="align-middle" data-feather="maximize"></i>
                </div>
                </button>
                </li>

                {/* <li class="nav-item">
                    <a class="nav-icon js-fullscreen d-none d-lg-block" href="#">
                        <div class="position-relative">
                            <i class="align-middle" data-feather="maximize"></i>
                        </div>
                    </a>
                </li> */}

                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                        <i class="align-middle" data-feather="settings"></i>
                    </a>

                    <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                        <img src={avatarImage} alt='abc' class="avatar img-fluid rounded" id="imagePic_1" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="/profile"><i class="align-middle me-1" data-feather="user"></i> Profile</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/profile"><i class="align-middle me-1" data-feather="settings"></i> Settings&Privacy</a>
                        <a class="dropdown-item" href="/profile"><i class="align-middle me-1" data-feather="help-circle"></i> HelpCenter</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" asp-area="" asp-controller="Home" asp-action="Logout">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

  );
}

export default HeaderNav;