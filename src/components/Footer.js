import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="site-footer section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-12 mb-4 pb-2">
                                <a className="navbar-brand mb-2" href="index.html">
                                    <i className="bi-back"></i>
                                    <span>Topic</span>
                                </a>
                            </div>

                            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                                <h6 className="site-footer-title mb-3">Information</h6>

                                <p className="text-white d-flex mb-1">
                                    <a href="tel: 305-240-9671" className="site-footer-link">
                                        305-240-9671
                                    </a>
                                </p>

                                <p className="text-white d-flex">
                                    <a href="mailto:info@company.com" className="site-footer-link">
                                        info@company.com
                                    </a>
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        English</button>

                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" type="button">Thai</button></li>

                                        <li><button className="dropdown-item" type="button">Myanmar</button></li>

                                        <li><button className="dropdown-item" type="button">Arabic</button></li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;