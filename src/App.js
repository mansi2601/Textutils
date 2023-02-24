
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React,{useState} from 'react';


function App() {
  const [mode,setMode]= useState("light");
  const[ alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  
  
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#2d5693";
      showAlert("Dark mode has been enabled","success");
      
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
     showAlert("Light mode has been enabled","success");
    }
  
}

  return (
  <>

    
<Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}></Navbar>
<div className='container my-3'> 
<Alert alert={alert}></Alert>
      
    <Textform   showAlert={showAlert }heading="Enter the text to analyze below" mode={mode}/>


</div>

  </>
  
    
  );
}

export default App;
