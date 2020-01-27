import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import './App.css'
import logo from './images/logo.png'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import About from "./About";
import Portfolio from "./portfolio";
import form from "./form";

 
class App extends Component {

  componentDidMount = () => {
     
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open"); 
});


  }
  
  render() {
    return (
      <HashRouter>
        <div>
        <div className="box">
                  <img className="logo" src={logo} alt=""></img>
             </div>
             <nav>
                  <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                  
                 <ul className="nav-links">
                     <li><NavLink to="/">Home</NavLink></li>
                     <li><NavLink to="/about">About-us</NavLink></li>
                     <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                     <li><NavLink to="/form"><button className="btn btn-warning btn100">
                       <h6 className="get">Get <br/>Connected</h6></button></NavLink></li>
                </ul>
              
            </nav>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/form" component={form}/>
          </div>

          
        </div>
     
        </HashRouter>
        
    );
  }
}
 
export default App;