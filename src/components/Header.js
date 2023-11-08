import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <i className="bi-back"></i>
                            <span>Topic</span>
                        </a>

                        <div className="d-lg-none ms-auto me-4">
                            <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-lg-5 me-lg-auto">
                                <li className="nav-item">
                                    <Link to={'./'} className="nav-link click-scroll" href="#section_1" style={{ color: 'black' }}>Home</Link>
                                </li>



                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="#section_5" style={{ color: 'black' }}>Contact</a>
                                </li>


                            </ul>

                            <div className="d-none d-lg-block">
                                <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;