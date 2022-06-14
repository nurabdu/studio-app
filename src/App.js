import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar  from './Components/Navibar';
import Footer  from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes, 

} from "react-router-dom";
import { Home } from './Home';
import About from './About';

function App() {
  return (
  <>
   <Router>
   <Navibar/>
   <Routes>
     <Route exact path="/"element={<Home />} />
     <Route path="/about" element={<About/>}/>
   </Routes>
   </Router>
   <Footer/>
   </>
  );
}

export default App;
