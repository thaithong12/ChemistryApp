import './App.css';
import Header from './components/Header';
import SeachBar from './components/SeachBar';
import Footer from './components/Footer';
import Results from './components/Results';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/templatemo-topic-listing.css';

function App() {

  return (
    <div className="App" >

        <main id="top">
          <Header/>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/ChemistryApp' exact element={<Home />} />
            <Route path='/detail/:id' exact element={<Detail/>} />
            
          </Routes>
          <Footer/>
        </main>       

    </div>
  );
}

export default App;
