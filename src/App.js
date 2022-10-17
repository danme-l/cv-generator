import './Styles/App.css';

import CV from './Components/CV.js';
import Util from './Components/Util.js';
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="body">
        <CV />
        <Util />
      </div>
      <Footer />
    </div>
  );
}

export default App;
