import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaVolumeUp } from 'react-icons/fa';


function ItemComponent(props) {
  const data = props.data ? props.data : {};
  const index = props.index ? props.index : 0;

  const divStyle = {
    verticalAlign: 'middle',
    display: 'inherit'
  };

  const playAudio = () => {
    const audio = new Audio(require(`./../database/Sounds/${data.SoHieuNguyenTu}.mp3`));
    audio.play();
  }


  useEffect(() => {

  }, []);


  let modelPath = props.data && parseInt(props.data.SoHieuNguyenTu) >= 100 ? `https://storage.googleapis.com/search-ar-edu/periodic-table/element_${data.SoHieuNguyenTu}_${data.TenNguyenTo.toLowerCase()}/element_${data.SoHieuNguyenTu}_${data.TenNguyenTo.toLowerCase()}.glb` :
    props.data && parseInt(props.data.SoHieuNguyenTu) >= 10 ? `https://storage.googleapis.com/search-ar-edu/periodic-table/element_0${data.SoHieuNguyenTu}_${data.TenNguyenTo.toLowerCase()}/element_0${data.SoHieuNguyenTu}_${data.TenNguyenTo.toLowerCase()}.glb`
      : `https://storage.googleapis.com/search-ar-edu/periodic-table/element_00${data.SoHieuNguyenTu}_${data.TenNguyenTo.toLowerCase()}/element_00${data.SoHieuNguyenTu}_${data.TenNguyenTo.toLowerCase()}.glb`;

  return (
    <div className="container data-item" style={{ marginTop: index !== 0 ? '10%' : '0' }}>
      <div className="row justify-content-center">

        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
          <div className="custom-block bg-white shadow-lg">

            <div className="d-flex" style={{ alignItems: 'center' }}>
              <div style={divStyle}>
                <h2 className="mb-2">{data.KiHieuHoaHoc}</h2>

                <button type="button" className="btn btn-default" onClick={() => playAudio()}><FaVolumeUp size={27} /></button>

                <p className="mb-0"></p>

              </div>
              <span className="badge bg-design rounded-pill ms-auto" style={{ backgroundColor: '#6bb7b7' }}>{data.SoHieuNguyenTu}</span>

            </div>

            {/* <img src="images/topics/undraw_Remote_design_team_re_urdx.png" className="custom-block-image img-fluid" alt="" /> */}
            <div>

              {/* <GLTFModel src={modelPath} width='300' height='200' scale={{x:8, y: 8 , z: 8}} autoplay >
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        <DirectionLight
          color={0xff00ff}
          position={{ x: -100, y: 200, z: -100 }}
        />
      </GLTFModel> */}
              <model-viewer
                ar
                ar-scale
                ar-modes="scene-viewer webxr quick-look"
                src={modelPath}
                ios-src="./cyawan.usdz"
                alt="Cyawan"
                autoplay

              ></model-viewer>
            </div>

          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className="custom-block custom-block-overlay">
            <div className="d-flex flex-column h-100">
              <img src="" className="custom-block-image img-fluid" alt="" />

              <div className="custom-block-overlay-text d-flex" style={{ textAlign: 'left' }}>
                <div className="container">
                  {/* <div className='row' style={{paddingTop: '66px'}}>
                    <div className='col-6'>
                      <h5 className="text-white mb-2">Tên tiếng Anh</h5>
                      <p className="text-white">Năm tìm thấy</p>
                      <p className="text-white">Khối lượng nguyên tử</p>
                      <p className="text-white">Độ âm điện</p>
                      <p className="text-white">Nhóm </p>
                      <p className="text-white">Cấu hình e</p>
                      <Link to={`/detail/${data.SoHieuNguyenTu}`} className="btn custom-btn mt-2 mt-lg-3">Xem Chi Tiết</Link>
                    </div>
                    <div className='col-6'>
                        <h5 className="text-white mb-2">{data.TenNguyenTo}</h5>
                        <p className="text-white">{data.NamTimThay ? data.NamTimThay : '###'}</p>
                        <p className="text-white">{data.NguyenTuKhoi}</p>
                        <p className="text-white">{data.DoAmDien ? data.DoAmDien : '###'}</p>
                        <p className="text-white">{data.Nhom ? data.Nhom: '###'}</p>
                        <p className="text-white"><span dangerouslySetInnerHTML={{ __html: data ? data.CauHinhE : '' }}/></p>

                    </div>
                  </div> */}
                  <div className='row' style={{ paddingTop: '66px' }}>
                    <table className="custom-table col-12">
                      <tbody>
                        <tr>
                          <th className="text-white" >Tên tiếng Anh</th>
                          <td className="text-white" >{data.TenNguyenTo}</td>
                        </tr>
                        <tr>
                          <th className="text-white">Năm tìm thấy</th>
                          <td className="text-white">{data.NamTimThay ? data.NamTimThay : '###'}</td>
                        </tr>
                        <tr>
                          <th className="text-white">Khối lượng nguyên tử</th>
                          <td className="text-white">{data.NguyenTuKhoi}</td>
                        </tr>
                        <tr>
                          <th className="text-white">Độ âm điện</th>
                          <td className="text-white">{data.DoAmDien ? data.DoAmDien : '###'}</td>
                        </tr>
                        <tr>
                          <th className="text-white">Nhóm</th>
                          <td className="text-white">{data.Nhom ? data.Nhom : '###'}</td>
                        </tr>
                        <tr>
                          <th className="text-white">Cấu hình e</th>
                          <td className="text-white"><span dangerouslySetInnerHTML={{ __html: data ? data.CauHinhE : '' }} /></td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <Link to={`/detail?id=${data.SoHieuNguyenTu}`} className="btn custom-btn mt-2 mt-lg-3">Xem Chi Tiết</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>



                </div>
              </div>
              <div className="section-overlay"></div>
            </div>
          </div>
        </div>

      </div>
    </div >

  );
}

export default ItemComponent;
