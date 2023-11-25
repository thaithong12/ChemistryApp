import "react-loading-skeleton/dist/skeleton.css";
import '../css/custom.css'
import '../css/electron.css'

function LookupTable() {
    return (
        <div>
            <section className="faq-section" id="section_4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            <img src={require('../images/bangnangluong.jpg')} alt="bang nang luong" />
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12">
                            <img src={require('../images/bangnhiet.jpg')} alt="bang nhiet" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <img src={require('../images/bangtinhtan.jpg')} alt="bang tinh tan" />
                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default LookupTable;