import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }
  const toggleMode= ()=>{
    if(darkMode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = '#31096a'
      showAlert("Dark Mode Enabled !", "success")
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled !", "success")

    }
  }
  return (
    <>
      <Router>
      <Navbar title="Mukesh CodeLearn" aboutText="About Us" mode={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            <div className="container my-3">
              <Textform showAlert={showAlert} heading="Enter the text here" mode={darkMode}/>
            </div>
          </Route>
      </Switch>
      </Router>
    
      
     
    </>
  );
}

export default App;
