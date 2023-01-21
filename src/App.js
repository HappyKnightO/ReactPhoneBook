import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className='appBody'>
      <div><Header /></div>
      <div className='main'><Main /></div>
      <div className='main'><Footer /></div>
    </div>
  );
}

export default App;
