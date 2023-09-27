
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Nevbar from './component/Nevbar';
import Services from './component/Services';

function App() {
  return (
    <>
      <Nevbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </>
  );
}

export default App;
