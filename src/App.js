import React, { Component } from 'react'
import Products from './components/products'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import Card from './components/card'


  

export class App extends Component {
    render() {
        return (
            <Router>
            
                <div className='header'>
                    <Link to='/' type='button' className='home'>Home</Link>
                    <Link to='/card' type='button' className='basket'>Basket</Link>
                </div>
                
                <Route path="/" exact>
                <Products/>
                </Route>
                <Route path='/card'
                render={() =>  <Card />}>
                
                   
                </Route>
                    
                </Router>
        )
    }
}

export default App
