import React,{useState} from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

//This is for light and darkmode
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import LightTheme from './themes/Light'
import DarkTheme from './themes/Dark'
import ThemeNav from './components/ThemeNav'


const GlobalStyle = createGlobalStyle`
    body{
      background: ${p => p.theme.bodyBackgroundColor};
		min-height: 100vh;
		margin: 0;
		color: ${p => p.theme.bodyFontColor};

    }
`


const App = () => {

  const [theme,setTheme]=useState(LightTheme)

  const changeDark = () => setTheme(DarkTheme)
  const changeLight = () => setTheme(LightTheme)

  return (
    <ThemeProvider
      theme={{...theme,setTheme:() =>{
        setTheme(color => color.id === 'light' ? DarkTheme : LightTheme )
      }}}
    >
      <GlobalStyle/>
      <ThemeNav changeDark={changeDark} changeLight={changeLight}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </ThemeProvider>
  )
}



export default App

