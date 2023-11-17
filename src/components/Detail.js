import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from '../database/data.json'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useNavigate } from 'react-router-dom';
import "react-loading-skeleton/dist/skeleton.css";
import '../css/custom.css'
import '../css/electron.css'

function Detail(params) {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate();

    // https://docs.google.com/spreadsheets/d/1GMmK95MPBJdFGFvKLz-LTPvDvjMcfRmWb_mmIp5Yrz0/edit#gid=0
    const endpoint = 'https://script.google.com/macros/s/AKfycbyDO7clO6GPbA3P3WxLipeFBo56HpIZz8Woa5zAINKq_b3WXoI7Wd7Rt9Q2ytZmefREUA/exec'
    console.log('Detail');

    useEffect(() => {
        const isExist = database.find(i => i.SoHieuNguyenTu == id);
        if (isExist == undefined) {
            console.log('vao day');
            navigate('/');
            return;
        }

        if (isLoading) {
            try {
                axios.get(endpoint, { params: { id: id } }).then(response => {
                    if (response.status === 200) {
                        console.log(response.data);
                        setData(response.data);
                        setLoading(false);
                    }
                })
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }, [])

    return (
        <div>
            <section className="faq-section" id="section_4">
                <div className="container">
                    {
                        isLoading ? (<SkeletonTheme baseColor="#dee2e6" highlightColor="#444">
                            <p>
                                <Skeleton count={3} />
                            </p>
                        </SkeletonTheme>) : (

                            <div className="row">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="alert alert-primary text-center" role="alert">
                                                <h4>{data ? data.TenNguyenTo : ''}</h4>
                                            </div>
                                            <div className="row">

                                                <div className="col-6">
                                                    <div className="alert alert-primary text-center" role="alert" style={{ height: '100%' }}>
                                                        <p style={{ textAlign: 'left' }}><strong>{data ? data.SoHieuNguyenTu : ''}</strong></p>
                                                        <h2>{data ? data.KiHieuHoaHoc : ''}</h2>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="alert alert-primary" role="alert" style={{ textAlign: 'left', height: '100%' }}>
                                                        <div className="row">
                                                            {/* <div className="col-7">
                                                                <p>Nhóm: </p>
                                                                <p>Chu kì </p>
                                                                <p>Phân lớp </p>
                                                            </div>
                                                            <div className="col-5">
                                                                <p>{data && data.Nhom ? data.Nhom : '###'}</p>
                                                                <p>{data && data.ChuKi ? data.ChuKi : '###'}</p>
                                                                <p>{data && data.PhanLop ? data.PhanLop : '###'}</p>
                                                            </div> */}
                                                            <table >
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="col-7">Nhóm</th>
                                                                        <td className="col-5">{data && data.Nhom ? data.Nhom : '###'}</td>
                                                                       
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="col-7">Chu kỳ</th>
                                                                        <td className="col-5">{data && data.ChuKi ? data.ChuKi : '###'}</td>
                                                                       
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="col-7">Loại nguyên tố</th>
                                                                        <td className="col-5">{data && data.PhanLop ? data.PhanLop : '###'}</td>    
                                                                    </tr>
                                                                       
                                                                    <tr>
                                                                        
                                                                       
                                                                        
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="alert alert-primary mt-3" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>
                                                <p className="headerOutline">TÍNH CHẤT CHUNG </p>
                                                <table className="custom-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Số nguyên tử</th>
                                                            <td>{data ? data.SoHieuNguyenTu : ''}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Nguyên tử khối</th>
                                                            <td>{data && data.NguyenTuKhoi ? data.NguyenTuKhoi : ''}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Số khối</th>
                                                            <td>{data && data.SoKhoi ? data.SoKhoi : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Danh mục</th>
                                                            <td>{data && data.DanhMuc ? data.DanhMuc : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Màu sắc</th>
                                                            <td>{data && data.MauSac ? data.MauSac : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Có tính phóng xạ</th>
                                                            <td>{data && data.CoTinhPhongXa ? data.CoTinhPhongXa : '###'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>



                                            </div>

                                            <div className="alert alert-primary mt-3" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>

                                                <p className="headerOutline">Lịch sử </p>
                                                <p className="alert alert-primary" dangerouslySetInnerHTML={{ __html: data ? data.LichSu : '###' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-sm-12">
                                            <div className="alert alert-primary" role="alert" style={{ textAlign: 'left', overflow: 'hidden', height: 'auto' }}>

                                            <table className="custom-table">
                                                <tbody>
                                                    <tr>
                                                        <th>Số electron mỗi phân lớp</th>
                                                        <td>{data && data.SoElectronMoiPhanLop ? data.SoElectronMoiPhanLop : '###'}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cấu hình electron</th>
                                                        <td dangerouslySetInnerHTML={{ __html: data ? data.CauHinhE : '###' }} />
                                                    </tr>
                                                </tbody>
                                            </table>

                                                <div style={{ color: 'black' }} className="mt-3" dangerouslySetInnerHTML={{ __html: data && data.HinhAnh ? data.HinhAnh : '###' }}>
                                                    {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-800 -320 1600 640" className="atom pt-6" width={'100%'}>
                                                        <g className="g">
                                                            <circle className="nucleus" r="130"></circle>
                                                            <text className="font-fam" x="0" y="0" fill="#ffffff" alignmentBaseline="middle" dominantBaseline="middle" textAnchor="middle">He</text>
                                                            <g className="one" style={{ color: 'black' }}>
                                                                <circle r="230" fill="none" stroke="currentColor" strokeWidth="8"></circle>
                                                                <circle className="electron" cx="0" cy="-230" r="25"></circle>
                                                                <circle className="electron" cx="0" cy="230" r="25"></circle>
                                                            </g>
                                                        </g>
                                                    </svg> */}
                                                </div>
                                            </div>

                                            <div className="alert alert-primary mt-3" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>
                                                <p className="headerOutline">Tình hình sản xuất và phân bố </p>
                                                <p className="alert alert-primary" dangerouslySetInnerHTML={{ __html: data ? data.TinhHinhSanXuatVaPhanBoQuangOVietNam : '###' }}/>
                                                {/* <p className="headerOutline">TÍNH CHẤT VẬT LÝ </p>

                                                <table className="custom-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Trạng thái vật chất</th>
                                                            <td>{data && data.TrangThaiVatChat ? data.TrangThaiVatChat : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mật độ</th>
                                                            <td>{data && data.MatDo ? data.MatDo : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Nhiệt độ nóng chảy</th>
                                                            <td>{data && data.NhietDoNongChay ? data.NhietDoNongChay : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Nhiệt độ sôi</th>
                                                            <td>{data && data.NhietDoSoi ? data.NhietDoSoi : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Nhiệt lượng nóng chảy</th>
                                                            <td>{data && data.NhietLuongNongChay ? data.NhietLuongNongChay : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Nhiệt bay hơi</th>
                                                            <td>{data && data.NhietBayHoi ? data.NhietBayHoi : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Nhiệt dung</th>
                                                            <td>{data && data.NhietDung ? data.NhietDung : '###'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table> */}


                                            </div>

                                            <div className="alert alert-primary" role="alert">
                                                This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                                            </div>

                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className="alert alert-primary" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>
                                                <p className="headerOutline">TÍNH CHẤT NGUYÊN TỬ </p>
                                                <table className="custom-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Bán kính nguyên tử</th>
                                                            <td>{data && data.BanKinhNguyenTu ? data.BanKinhNguyenTu : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Bán kính cộng hoá trị</th>
                                                            <td>{data && data.BanKinhCongHoaTri ? data.BanKinhCongHoaTri : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Độ âm điện</th>
                                                            <td>{data && data.DoAmDien ? data.DoAmDien : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Năng lượng ion hóa</th>
                                                            <td>{data ? data.NangLuongIonHoa : ''}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Nguyên tử khối</th>
                                                            <td>{data ? data.NguyenTuKhoi : ''}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Độ dẫn nhiệt</th>
                                                            <td>{data && data.DoDanNhiet ? data.DoDanNhiet : '###'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Trạng thái ôxy hóa</th>
                                                            <td>{data && data.TrangThaiOxyHoa ? data.TrangThaiOxyHoa : '###'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="alert alert-primary" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>
                                                <p className="headerOutline">ỨNG DỤNG </p>
                                                <p className="alert alert-primary" dangerouslySetInnerHTML={{ __html: data ? data.UngDung : '###' }}/>
                                            </div>
                                            {/* <div className="alert alert-primary" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>
                                                <p className="headerOutline">SỐ ĐỒNG VỊ </p>
                                                <p></p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                            </div>)}
                </div>
            </section>
        </div>

    )
}

export default Detail;