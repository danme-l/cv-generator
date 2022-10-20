import './Styles/App.css';
import React, { useRef } from 'react';

import CV from './Components/CV.js';
import Util from './Components/Util.js';
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/Footer';
import ReactToPrint from 'react-to-print';

function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      <Header />
      <div id="container">
        <CV ref={componentRef}/>
        <div id="side-box">
          <h2> Hover over each area to edit it</h2>
          <h2> When you're done, click below to save it as a PDF</h2>
          <ReactToPrint 
            trigger={() => <button id="side-btn">Save as PDF</button>}
            content={() => componentRef.current}
          />
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
