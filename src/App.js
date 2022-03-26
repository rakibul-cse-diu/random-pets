import './App.css';
import AboutReact from './components/AboutReact/AboutReact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <AboutReact></AboutReact>
      <Footer></Footer>
    </div>
  );
}

export default App;
