import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About"
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [alert, setAlert] = useState(null);

  const [isSuccessStyle, setIsSuccessStyle] = useState(false);

  const [isWarningStyle, setIsWarningStyle] = useState(false);

  const [colorType, setColorType] = useState("primary")

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
    else {
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    }
    setIsDarkMode(!isDarkMode);
  }

  const toggleSuccessStyle = (color, isSuccessStyle, type) => {
    if (isSuccessStyle) {
      document.body.style.backgroundColor = "white";
      setColorType("primary")
    }
    else {
      document.body.style.backgroundColor = color
      setColorType(type)
    }
    setIsSuccessStyle(!isSuccessStyle)

  }
  const toggleWarningStyle = (color, isWarningStyle, type) => {
    if (isWarningStyle) {
      document.body.style.backgroundColor = "white";
      setColorType("primary")
    }
    else {
      document.body.style.backgroundColor = color
      setColorType(type)
    }
    setIsWarningStyle(!isWarningStyle)

  }
  return (
    <>
      {/* <Router> */}
        <Navbar isDarkMode={isDarkMode} title="TextUtils" aboutText="About TextUtils" toggleMode={toggleMode} toggleSuccessStyle={toggleSuccessStyle} isSuccessStyle={isSuccessStyle} toggleWarningStyle={toggleWarningStyle} isWarningStyle={isWarningStyle} />
        <Alert alert={alert} />
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm heading="Enter the text to analyze below" showAlert={showAlert} colorType={colorType} />
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
