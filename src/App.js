import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Studies from './pages/study';
import About from './pages/About';
import Intrests from './pages/intrests';
import Certificates from './pages/certificates';
import Home from './pages/Home';
import Card from './components/card';
import Badges from './pages/Badges';
import PDFPreview from './pages/pdf';


function App() {
  return (
    <div className='Apps'>
      <Card/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/intrest' element={<Intrests/>}/>
        <Route path='/certificate' element={<Certificates/>}/>
        <Route path='/study' element={<Studies/>}/>
        <Route path='/badge' element={<Badges/>}/>
        <Route path='/pdfresume' element={<PDFPreview/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
