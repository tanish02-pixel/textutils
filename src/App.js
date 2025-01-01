import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);  // State for alert

  const showAlert = (message, type) => {     // Method to show alert
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1300);
  }

  const tooglemode = () => {                 // Method to toggle dark/light mode
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DARK MODE IS ENABLED", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LIGHT MODE IS ENABLED", "success");
    }
  }

  return (
    <>
        <div className="container">
      {/* <Router> */}
        <Navbar title="Textutils" aboutText="About" mode={mode} tooglemode={tooglemode} />
        <Alert alert={alert}/>

          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} text="WRITE HERE" mode={mode} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;