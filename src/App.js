import React, { useState, useEffect } from 'react';
import Logo from './Logo';

/* store your theme colors in 2 objects -
  1 for light and 1 for dark */

function App() {
  // assign a boolean variable for dark mode and store it in state
  const [isDarkMode, setIsDarkMode] = useState(false);
  // update the theme colors whenever the dark mode state changes
  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.style.setProperty('--color-bg', '#303846')
      root.style.setProperty('--color-text', '#ffffff')
      root.style.setProperty('--color-primary', '#09d3ac')
    } else {
      root.style.setProperty('--color-bg', '#ffffff')
      root.style.setProperty('--color-text', '#303846')
      root.style.setProperty('--color-primary', '#fc7e0f')
    }
  }, [isDarkMode])

  const handleClick = (bool) => {
    setIsDarkMode(bool)
  }

  return (
    <div className="App">
      <header className="header">
        {/* put the toggle switch and buttons in a separate component
          pass in the needed state and functions using props */}
        <div className="toggle">
          {/* add onClick to set dark mode to false */}
          <button type="button" onClick={() => handleClick(false)}>☀</button>
          <span className="toggle-control">
            {/* set checked equal to your dark mode boolean variable */}
            <input className="modeCheck" id="modeCheck" type="checkbox" checked={isDarkMode} onChange={() => handleClick(!isDarkMode)} />
            <label htmlFor="modeCheck" />
          </span>
          {/* add onClick to set dark mode to true */}
          <button type="button" onClick={() => handleClick(true)}>☾</button>
        </div>
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
