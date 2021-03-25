import React from 'react'

const ThemeNav = ({changeDark,changeLight}) => {
  return (
    <div>
      <button onClick={changeDark}>Click to dark</button>
      <button onClick={changeLight}>Click to Light</button>
    </div>
  )
}

export default ThemeNav
