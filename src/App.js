import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'

import { BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './components/home/Home'




function App() {
  return (
    <>
    
  

    <Router>

      <Header/>
      <Home/>
      
      
      <Switch>
       {/* <Route path='/' exact componet={Home} /> */}
      </Switch>
    
    </Router>
    
    
  
    
    
    </>
  )
}

export default App