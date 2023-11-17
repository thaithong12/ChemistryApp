import React from 'react';
import { useSelector } from 'react-redux';

function NoData(props) {
    const check = useSelector((state) => state.count)
    console.log(check);
    return (
        <div className="col-lg-8 col-12 mx-auto">
            <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                <div className="d-flex">
                    <img src="images/topics/undraw_Remote_design_team_re_urdx.png" className="custom-block-image img-fluid" alt="" />

                    <div className="custom-block-topics-listing-info d-flex">
                        <div>

                            {check === 0 ? (<div>
                                <h5 className="mb-2">Xin chào ! Mình có thể tìm kiếm giúp bạn đấy</h5>

                                <p className="mb-0">Hãy tận dụng trang web của mình nhé</p>
                            </div>) : (<div><h5 className="mb-2">Tiếc quá ! Dữ liệu bàn tìm kiếm chưa có rồi, bạn hãy thử từ khoá khác nhé ^^</h5></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoData;