
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';

import Alert from './components/Alert';



function App() {
  
  const [mode,setmode] = useState('light');   //   whether dark mode is enable or not...! ensure krega..
  const [alert,setalert] = useState(null);

  const showAlert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
  }

  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DARK MODE IS ENABLED","success");
    }
      

      else{
        setmode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light MODE IS ENABLED","success");
      }
    
  }
  
  
  
  return (
    <>

<Navbar title="TANISH" mode={mode} tooglemode={togglemode}/>

<Alert alert={alert}/>

<div className="container">
  
  <Textform text="WRITE HERE" mode={mode} />

  {/* <About /> */}
  </div>

    </>
  );
}

export default App;
