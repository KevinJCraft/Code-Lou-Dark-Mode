import React from 'react'

const ToggleDarkMode = ({ isDarkMode, setIsDarkMode }) => {

    return (
        <div className="toggle">
            {/* add onClick to set dark mode to false */}
            <button type="button" onClick={() => setIsDarkMode(false)}>☀</button>
            <span className="toggle-control">
                {/* set checked equal to your dark mode boolean variable */}
                <input className="modeCheck" id="modeCheck" type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(prevMode => !prevMode)} />
                <label htmlFor="modeCheck" />
            </span>
            {/* add onClick to set dark mode to true */}
            <button type="button" onClick={() => setIsDarkMode(true)}>☾</button>
        </div>
    )
}

export default ToggleDarkMode