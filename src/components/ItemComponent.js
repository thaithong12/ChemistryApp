import React, { useState } from 'react';

function ItemComponent(props) {
  const data = props.data ? props.data : {};
  const index = props.index ? props.index : 0;
  return (
    <div className="container data-item" style={{ marginTop: index !== 0 ? '10%' : '0' }}>
      <div className="row justify-content-center">

        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
          <div className="custom-block bg-white shadow-lg">
            <a href="#">
              <div className="d-flex" style={{ alignItems: 'center' }}>
                <div style={{ verticalAlign: 'middle' }}>
                  <h2 className="mb-2">{data.symbol}</h2>

                  <p className="mb-0"></p>

                </div>
                <span className="badge bg-design rounded-pill ms-auto" style={{ backgroundColor: '#6bb7b7' }}>{data.atomicNumber}</span>

              </div>

              <img src="images/topics/undraw_Remote_design_team_re_urdx.png" className="custom-block-image img-fluid" alt="" />
            </a>
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
                  <a href="topics-detail.html" className="btn custom-btn mt-2 mt-lg-3">Learn More</a>
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
