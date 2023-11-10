import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarker } from 'react-icons/fa';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container pt-0 my-nav" >
                        <div className='row' style={{alignItems: 'center'}}>
                        <div class="col-md-8 col-sm-8 align-items-center">
                        <div className='row'>
                            <div className='col-md-3 col-sm-3 t-logo'>
                                <img style={{maxWidth: '100%'}} class="logo-header" alt="Trường THPT Nguyễn Hiền - Đà Nẵng" src="https://thpt-nguyenhien-danang.edu.vn/images/logo.png"/>
                            </div>
                            <div className='col-md-9 col-sm-9 t-logo-2'>
                                <h3 class="titel-truong text-center">SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ ĐÀ NẴNG</h3>
                                    <h4 class="titel-dn text-center">TRƯỜNG THPT NGUYỄN HIỀN</h4>
                                    <p class="mb-0 web small" style={{textAlign: 'left'}}>  <FaMapMarker />
                                        <strong>Địa chỉ: </strong>61 Phan Đăng Lưu - Hòa Cường Nam - Hải Châu - Đà Nẵng</p>
                                    <p class="web small " style={{textAlign: 'left', paddingTop: '10px'}}>
                                        <FaPhone />
                                        <strong>Điện thoại: (0236) 3615986</strong>
                                    </p>
                            </div>
                            
                               
                        </div>
                        
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-lg-5 me-lg-auto">
                                    <li className="nav-item">
                                        <Link to={'./'} className="nav-link click-scroll" href="#section_1" style={{ color: 'black' }}>Trang chủ</Link>
                                    </li>



                                    <li className="nav-item">
                                        <a className="nav-link click-scroll" href="#section_5" style={{ color: 'black' }}>Liên hệ</a>
                                    </li>


                                </ul>

                                {/* <div className="d-none d-lg-block">
                                    <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
                                </div> */}
                            </div>
                    </div>

                        </div>
                   
                        {/* <div className="d-lg-none ms-auto me-4">
                            <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
                        </div> */}

                        
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;