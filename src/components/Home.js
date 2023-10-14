import Footer from "./Footer";
import Header from "./Header";
import Results from "./Results";
import SeachBar from "./SeachBar";


function Home(params) {
    return (
        <div>
            {/* <Header></Header> */}
            <SeachBar/>
            <Results/>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Home;