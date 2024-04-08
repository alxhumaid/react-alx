import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Mainh from './Mainh';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/posts" element={()=> {<Mainh/>}}/>
        </Routes>
          
        <Footer />
      </div>
    </Router>
  );
}

export default App;
