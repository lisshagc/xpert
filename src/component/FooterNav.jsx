import React from 'react';
import './Light.css';
function FooterNav() {
  return (

        <footer class="footer">
        <div class="container-fluid">
            <div class="row text-muted">
                <div class="col-6 text-start">
                    <p class="mb-0">
                        <a class="text-muted" href="https://njtechinc.com" target="_blank"><strong>NJTech</strong></a> &copy;
                    </p>
                </div>
                <div class="col-6 text-end">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a class="text-muted" href="https://njtechinc.com/about_us.html" target="_blank">About us</a>
                        </li>
                        <li class="list-inline-item">
                            <a class="text-muted" href="https://njtechinc.com/contact_us.html" target="_blank">Help Center</a>
                        </li>
                        <li class="list-inline-item">
                            <a class="text-muted" href="https://njtechinc.com/services.html" target="_blank">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>


  );
}

export default FooterNav;