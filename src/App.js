import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/templatemo-topic-listing.css';

function App() {

  return (
    <div className="App" >

      <main id="top">
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='*/ChemistryApp' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>

    </div>
  );
}

export default App;
