import React, { useState, useEffect } from 'react';
import Logo from '../Logo';
import ToggleDarkMode from './ToggleDarkMode';

/* store your theme colors in 2 objects -
  1 for light and 1 for dark */

function App() {

  const getInitialMode = () => {
    if (window.localStorage.getItem('isDarkMode') === 'true') return true
    else if (window.localStorage.getItem('isDarkMode') === 'false') return false
    //2nd check stored preferentials, only returing value if explicitly defined as true
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true
    //defaulting to darkMode off
    else return false;
  }

  // assign a boolean variable for dark mode and store it in state
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());
  // update the theme colors whenever the dark mode state changes



  useEffect(() => {
    const darkStyle = {
      '--color-bg': '#303846',
      '--color-text': '#ffffff',
      '--color-primary': '#09d3ac'
    }

    const lightStyle = {
      '--color-bg': '#ffffff',
      '--color-text': '#303846',
      '--color-primary': '#fc7e0f'
    }

    localStorage.setItem('isDarkMode', isDarkMode)
    const root = document.documentElement
    const style = isDarkMode ? darkStyle : lightStyle
    Object.entries(style).forEach(([property, value]) => root.style.setProperty(property, value))
  }, [isDarkMode])


  return (
    <div className="App">
      <header className="header">
        <ToggleDarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>
      <main className="main">
        <div className="wrapper">
          <h1>Dark Mode Toggle</h1>
          <Logo className="logo" />
          <p>
            Make the buttons and toggle in the header switch between light and
            dark mode.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
