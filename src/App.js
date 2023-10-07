import './App.css';
import Header from './components/Header';
import SeachBar from './components/SeachBar';
import Footer from './components/Footer';
import Results from './components/Results';

function App() {
  return (
    <div className="App" >

        <main id="top">
          <Header/>
          <SeachBar/>
          <Results/>
          <Footer/>
        </main>       

    </div>
  );
}

export default App;
