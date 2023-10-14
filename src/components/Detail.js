import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




// const api_key = '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';
// const endpoint = 'https://api.openai.com/v1/chat/completions';
// let promp = `Cho tôi biết thông tin về nguyên tố bao gồm các thông tin sau và không giải thích gì thêm 
//     tên tiếng anh, kí hiệu nguyên tố, số hiệu nguyên tử, cầu hình e lớp ngoài cùng, 5 phương trình hoá học có liên quan, các ứng dụng hiện tại`;
 
// const sendMessageToChatGPT = async (message) => {
//     try {
//         const response = await axios.post(endpoint, {
//           prompt,
//           max_tokens: 50, // Điều chỉnh tối đa số từ kết quả
//         }, {
//           headers: {
//             Authorization: `Bearer ${api_key}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         console.log(response.data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
// };


function Detail(params) {
    const {id} = useParams();
    // const [response, setResponse] = useState("");

    return (
        <div>
            <section className="faq-section section-padding" id="section_4">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <h2 className="mb-4">Frequently Asked Questions</h2>
                        </div>

                        <div className="clearfix"></div>

                        <div className="col-lg-5 col-12">
                            <img src="images/faq_graphic.jpg" className="img-fluid" alt="FAQs"/>
                        </div>

                        <div className="col-lg-6 col-12 m-auto">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Về đặc trung của nguyên tố XXX
                                        </button>
                                    </h2>

                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Topic Listing is free Bootstrap 5 CSS template. <strong>You are not allowed to redistribute this template</strong> on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Detail;