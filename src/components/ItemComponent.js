import React, { useState,useEffect } from 'react';
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import { Link } from 'react-router-dom';



function ItemComponent(props) {
  const data = props.data ? props.data : {};
  const index = props.index ? props.index : 0;

  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    // Tạo một interval ID để theo dõi setInterval
    const intervalId = setInterval(() => {
      // Tạo ra một bản sao của position và cập nhật nó
      const x = 100 * Math.sin(position[0]);
      const y = 100 * Math.cos(position[0]);
      setPosition([x, y, 0]);
    }, 100);

    // Làm sạch interval khi component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);


 let modelPath = props.data && props.data.atomicNumber >= 100 ? `https://storage.googleapis.com/search-ar-edu/periodic-table/element_${data.atomicNumber}_${data.name.toLowerCase()}/element_${data.atomicNumber}_${data.name.toLowerCase()}.glb` : 
    `https://storage.googleapis.com/search-ar-edu/periodic-table/element_0${data.atomicNumber}_${data.name.toLowerCase()}/element_0${data.atomicNumber}_${data.name.toLowerCase()}.glb`;
  
  return (
    <div className="container data-item" style={{ marginTop: index !== 0 ? '10%' : '0' }}>
      <div className="row justify-content-center">

        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
          <div className="custom-block bg-white shadow-lg">

              <div className="d-flex" style={{ alignItems: 'center' }}>
                <div style={{ verticalAlign: 'middle' }}>
                  <h2 className="mb-2">{data.symbol}</h2>

                  <p className="mb-0"></p>

                </div>
                <span className="badge bg-design rounded-pill ms-auto" style={{ backgroundColor: '#6bb7b7' }}>{data.atomicNumber}</span>

              </div>

              {/* <img src="images/topics/undraw_Remote_design_team_re_urdx.png" className="custom-block-image img-fluid" alt="" /> */}
              <div>
      
      <GLTFModel src={modelPath} width='300' height='200' scale={{x:8, y: 8 , z: 8}} position={position} >
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        <DirectionLight
          color={0xff00ff}
          position={{ x: -100, y: 200, z: -100 }}
        />
      </GLTFModel>
    </div>

          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className="custom-block custom-block-overlay">
            <div className="d-flex flex-column h-100">
              <img src="" className="custom-block-image img-fluid" alt="" />

              <div className="custom-block-overlay-text d-flex" style={{ textAlign: 'left' }}>
                <div>
                  <h5 className="text-white mb-2">Tên tiếng Anh: {data.name}</h5>
                  <p className="text-white">Năm tìm thấy : {data.yearDiscovered}</p>
                  <p className="text-white">Khối lượng nguyên tử  : {data.atomicMass}</p>
                  <p className="text-white">Độ âm điện   : {data.electronegativity}</p>
                  <p className="text-white">Nhóm   : {data.groupBlock}</p>
                  <p className="text-white">Số e lớp ngoài cùng: {data.electronicConfiguration}</p>
                  <Link to={`/detail/${data.atomicNumber}`} className="btn custom-btn mt-2 mt-lg-3">Xem Chi Tiết</Link>
        
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
