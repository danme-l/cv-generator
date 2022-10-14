import './Styles/App.css';

import CV from './Components/CV.js';
import Instructions from './Components/Instructions.js';
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="body">
        <CV />
        <Instructions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
