import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import Banner from './pages/Banner/Banner';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main/>
    </>
  );
}

export default App;
