import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
// import About from './component/About'
import Textarea from './component/Textarea';
import {useState} from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);

  const showAlert = (message, type) =>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setalert(null);
      },1000);
  }

  const togglemode = () => {
    if(mode==='light'){
      setmode('dark')
      document.getElementById('darkm').style.color = 'white'
      document.body.style.backgroundColor = '#21285ef2'
      document.body.style.color = '#fff'
      showAlert('Dark Mode Enabeled','success')
    }
    else{
      setmode('light')
      document.getElementById('darkm').style.color = 'black'
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#000'
      showAlert('Light Mode Enabeled','success')
    }
  }
  return (
    <>
    
    


    {/* <Router> */}

    <Navbar mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>

    {/* <Routes> */}

    {/* <Route exact path="/" element={}></Route> */}

    <Textarea mode={mode} togglemode={togglemode} showAlert={showAlert}/>

    {/* <Route path="/about" element={<About />}></Route> */}
    
    {/* </Routes> */}
        
    {/* </Router> */}
    
    
 
    </>

  );
}

export default App;
