import React from 'react';
import Logo from './Logo';

/* store your theme colors in 2 objects -
  1 for light and 1 for dark */

function App() {
  // assign a boolean variable for dark mode and store it in state

  // update the theme colors whenever the dark mode state changes

  return (
    <div className="App">
      <header className="header">
        {/* put the toggle switch and buttons in a separate component
          pass in the needed state and functions using props */}
        <div className="toggle">
          {/* add onClick to set dark mode to false */}
          <button type="button">☀</button>
          <span className="toggle-control">
            {/* set checked equal to your dark mode boolean variable */}
            <input className="modeCheck" id="modeCheck" type="checkbox" />
            <label htmlFor="modeCheck" />
          </span>
          {/* add onClick to set dark mode to true */}
          <button type="button">☾</button>
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
