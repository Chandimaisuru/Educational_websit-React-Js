import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'


import Home from './components/home/Home'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom/cjs/react-router-dom'
// 

import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import Team from './components/Team/Team'
import Price from './components/pricing/Price'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'






function App() {
  return (

    <div>
      <Router>
        <Header/>
   

       <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/about' exact component={About}/>
       <Route path='/courses' exact component={CourseHome}/>
       <Route path='/team' exact component={Team}/>
       <Route path='/pricing' exact component={Price}/>
       <Route path='/journal' exact component={Blog}/>
       <Route path='/contact' exact component={Contact}/>
       
       </Switch>
       <Footer/>
      </Router>
   
    
    </div>
  )
}

export default App