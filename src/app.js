import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import SplashScreen from './components/Splash'

import './styles/app.css'
import MainView from './screens/main'

const App = () => {
  const [loaded, updateLoaded] = useState(false)
  useEffect(() => {
    let handler = setTimeout(() => updateLoaded(true), 1500)
    return () => clearTimeout(handler)
  }, [])
  return loaded ? <MainView /> : <SplashScreen />
}

export default hot(App)
