import React from 'react';
import ItemComponent from './ItemComponent';
import { useSelector } from 'react-redux';
import NoData from './NoData';

function Results(props) {
    const dataDisplay = useSelector((state) => state.displayData);
    return (
        <div>
            <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>              

            <section className="featured-section">
                {
                    
                    (dataDisplay && dataDisplay.length > 0) ? dataDisplay.map((item, i) => (
                        <ItemComponent key={i} data={item} index={i} />
                    )) : <NoData />
                }
            </section>
        </div>
    );
}

export default Results;