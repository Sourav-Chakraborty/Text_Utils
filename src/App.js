import './App.css';
import React, { useState } from 'react'
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About  from './components/About';
 import TextForm from './components/TextForm';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')
  const [alert,setAlert]=useState({type:null,message:null})
  const showAlert=(message,type)=>{
      setAlert({
        message:message,
        type:type
      })
      setTimeout(()=>{
        setAlert({type:null,message:null})
      },2000)
  }
  const toggleMode=()=>{
      if(mode==='light'){  
        setMode('dark')
        document.body.style.backgroundColor = "black"    
        showAlert('Dark mode enabled','success')
      }
      else{  
        setMode('light')
        document.body.style.backgroundColor = "white"
        showAlert('Light mode enabled','success')
      }
  }
  return (
   <>
    {/* <Router> */}
      
      <Navbar title="my_blog" varible="Home" toggleMode={toggleMode} mode={mode} varible2="About"/>
      
      {/* */}
      {/* <Switch> */}
         
          {/* <Route path="/about">
            
                <About mode={mode}/>
            
          </Route> */}
          
          {/* <Route path="/"> */}
           
              <TextForm mode={mode} showAlert={showAlert}/>
            
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
   </>
  );
}

export default App;
