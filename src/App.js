import React,{useState} from 'react'
import './App.css';
import { AboutUs } from './components/AboutUs';

import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { Alert } from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      message : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () =>{
    if (mode === 'dark') {
      setMode('light');
      document.body.style.background = "#fff";
      showAlert("Light Mode Enabled",'success');
    } else {
      setMode('dark');
      document.body.style.background = "#000";
      showAlert("Dark Mode Enabled",'success');
    }
  }

  return (
    <>
    <BrowserRouter>
        <Navbar navTitle="Text-Utils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className={`container text-${mode === 'light'? 'dark' : 'light'}`}>
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text below to analyse"   mode={mode} showAlert={showAlert} />}/>
              <Route path="/about" element={<AboutUs  mode={mode} toggleMode={toggleMode} />} />
            
          </Routes>

          <div className="my-3">
            
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
