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


    useEffect(() => {
        const isExist = database.find(i => i.atomicNumber == id);
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
                                                            <div className="col-6">
                                                                <p>Nhóm: </p>
                                                                <p>Chu kì </p>
                                                                <p>Phân lớp </p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p>{data ? data.Nhom : 'Đang cập nhật'}</p>
                                                                <p>{data ? data.ChuKi : 'Đang cập nhật'}</p>
                                                                <p>{data && data.PhanLop ? data.PhanLop : '###'}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="alert alert-primary mt-3" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>
                                                <p className="headerOutline">TÍNH CHẤT CHUNG </p>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <p>Số nguyên tử </p>
                                                        <p>Nguyên tử khối </p>
                                                        <p>Số khối </p>
                                                        <p>Danh mục </p>
                                                        <p>Màu sắc </p>
                                                        <p>Có tính phóng xạ </p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p>{data ? data.SoHieuNguyenTu : ''}</p>
                                                        <p>{data ? data.NguyenTuKhoi : ''}</p>
                                                        <p>{data && data.SoKhoi ? data.SoKhoi : '###'}</p>
                                                        <p>{data && data.DanhMuc ? data.DanhMuc : '###'}</p>
                                                        <p>{data && data.MauSac ? data.MauSac : '###'}</p>
                                                        <p>{data && data.CoTinhPhongXa ? data.CoTinhPhongXa : '###'}</p>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="alert alert-primary mt-3" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>

                                                <p className="headerOutline">Lịch sử </p>
                                                <p>{data ? data.LichSu : ''}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-sm-12">
                                            <div className="alert alert-primary" role="alert" style={{ textAlign: 'left', overflow: 'hidden', height: 'auto' }}>

                                                <div className="row">
                                                    <div className="col-8">
                                                        <p>Số electron mỗi phân lớp</p>
                                                        <p>Cấu hình electron</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p>{data && data.SoElectronMoiPhanLop ? data.SoElectronMoiPhanLop : '###'}</p>
                                                        <p dangerouslySetInnerHTML={{ __html: data ? data.CauHinhE : '' }} />
                                                    </div>
                                                </div>
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
                                                <p className="headerOutline">TÍNH CHẤT VẬT LÝ </p>

                                                <div className="row">
                                                    <div className="col-8">
                                                        <p>Trạng thái vật chất </p>
                                                        <p>Mật độ </p>
                                                        <p>Nhiệt độ nóng chảy </p>
                                                        <p>Nhiệt độ sôi </p>
                                                        <p>Nhiệt lượng nóng chảy </p>
                                                        <p>Nhiệt bay hơi </p>
                                                        <p>Nhiệt dung</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p>{data && data.TrangThaiVatChat ? data.TrangThaiVatChat : '###'}</p>
                                                        <p>{data && data.MatDo ? data.MatDo : '###'}</p>
                                                        <p>{data && data.NhietDoNongChay ? data.NhietDoNongChay : '###'} </p>
                                                        <p>{data && data.NhietDoSoi ? data.NhietDoSoi : '###'}</p>
                                                        <p>{data && data.NhietLuongNongChay ? data.NhietLuongNongChay : '###'}</p>
                                                        <p>{data && data.NhietBayHoi ? data.NhietBayHoi : '###'}</p>
                                                        <p>{data && data.NhietDung ? data.NhietDung : '###'}</p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="alert alert-primary" role="alert">
                                                This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                                            </div>

                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className="alert alert-primary" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>
                                                <p className="headerOutline">TÍNH CHẤT NGUYÊN TỬ </p>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <p>Bán kính nguyên tử </p>
                                                        <p>Bán kính cộng hoá trị </p>
                                                        <p>Độ âm điện </p>
                                                        <p>Năng lượng ion hóa </p>
                                                        <p>Nguyên tử khối  </p>
                                                        <p>Độ dẫn nhiệt </p>
                                                        <p>Trạng thái ôxy hóa</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p>{data && data.BanKinhNguyenTu ? data.BanKinhNguyenTu : '###'}</p>
                                                        <p>{data && data.BanKinhCongHoaTri ? data.BanKinhCongHoaTri : '###'}</p>
                                                        <p>{data && data.DoAmDien ? data.DoAmDien : '###'} </p>
                                                        <p>{data ? data.NangLuongIonHoa : ''}</p>
                                                        <p>{data ? data.NguyenTuKhoi : ''}</p>
                                                        <p>{data && data.DoDanNhiet ? data.DoDanNhiet : '###'} </p>
                                                        <p>{data && data.TrangThaiOxyHoa ? data.TrangThaiOxyHoa : '###'} </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="alert alert-primary" role="alert" style={{ textAlign: 'left', overflow: 'hidden' }}>
                                                <p className="headerOutline">ỨNG DỤNG </p>
                                                <p>{data ? data.UngDung : ''}</p>
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