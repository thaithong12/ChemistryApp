import React, { useState } from 'react';
import data from '../database/data.json'
import { searchItem } from '../actions/ItemAction';
import { useDispatch } from 'react-redux';

function SeachBar() {
    const [keyword, setKeyWord] = useState('');
    let [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const handleKeyWordChange = (e) => {
        setKeyWord(e.target.value);
        let temp = ++count;
        setCount(temp);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const temp = findData();
        dispatch(searchItem(temp && temp.length > 0 && keyword !== '' ? temp : [], count));
    }

    const findData = () => {
        const dataFilter =
            [...data] ? data.filter(item => item.name.includes(keyword) || item.symbol.includes(keyword) || item.atomicNumber === (keyword) || item.electronegativity === (keyword) || item.groupBlock.includes(keyword)) : []
        return dataFilter;
    }

    return (
        <div>
            <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 mx-auto">
                            <h1 className="text-white text-center">Từ điển Nguyên tố</h1>
                            <h6 className="text-center">Hỗ trợ bạn 10 điểm</h6>
                            <form onSubmit={(e) => handleFormSubmit(e)} method="get" className="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text bi-search" id="basic-addon1"></span>
                                    <input onChange={(e) => handleKeyWordChange(e)} name="keyword" type="search" className="form-control" id="keyword" placeholder="Tên nguyên tố, số e lớp ngoài cùng, nhóm,..." aria-label="Search" />
                                    <button type="submit" className="form-control">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SeachBar;
