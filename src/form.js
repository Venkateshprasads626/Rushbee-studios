import React, { Component } from 'react'
import './form.css'
import pic from './images/pic.png'
import Group19 from './images/Group19.png'
import addressmap from './images/addressmap.png'
import { NavLink } from "react-router-dom"



class form extends Component {
    render() {
        return(
            <div className="formpage">
                <div className="formbox">
                    <h1 className="formhead">Get connected</h1>
                    <hr className="formhr"></hr>
                    <img src={pic} className="pic" alt=""></img>
                    <div className="vl5"></div>
                        <div className="register-box">
                            <form>
                                <p>Name</p>
                                <input type="text" placeholder="Enter Name" name="name" className="name" />
                                <p>Mobile No</p>
                                <input type="number" placeholder="Enter Mobile No" name="phone" className="phone" />
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <p>Email Address</p>
                                <input type="email" placeholder="Enter Email Address" name="email" className="email"/>

                                <p>Organization</p>
                                <input type="text" placeholder="Enter your Organization Details" name="text" className="org"/>
                                <p>Select Service</p>
                                <select className="sser">
                                    <option value="select" className="ty">Select the type of service you need</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Web Design">Web Design</option>
                                    <option value="Brand Creation">Brand Creation</option>
                                    <option value="Package Design">Package Design</option>
                                    <option value="Event Design">Event Design</option>
                                </select>
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                <button type="submit" value="submit" className="submitbtn">Submit</button>
                            </form>
                        </div>
              
                </div>
                     
             {/* This is map */}
            <div className="contactbox">
             <div className="Contact-area2">
                <a href="https://www.google.com/maps/place/Rushbee+Studio's/@12.9391229,77.6265289,15z/data=!4m5!3m4!1s0x0:0x10217d16a27c5108!8m2!3d12.9391229!4d77.6265289" target="_blank">
                    <img src={addressmap} className="addressmap" alt=""></img>
                    <img className="Group19" src={Group19} alt=""></img>
                </a>
            </div>

               
            <footer className="page-footer font-small teal pt-4">
              
              <div className="container-fluid text-center text-md-left">

                  <div className="row">
                  {/* This is left sidecontact page */}
                  <div className="col-md-6 mt-md-0 mt-3">
                      <h1 className="first">CONTACT US</h1>
                      <p className="details1">CONTACT NUMBER - +91 82905033967</p>
                      <p className="details2">E-MAIL - rushbeestudios@gmail.com</p>
                      <p className="address"> 
                          <h2>ADDRESS:-</h2>
                          AUTHURA Co-Working Space,<br/>
                          5th Block, 2nd Floor,99D,2nd Cross Road,<br/>
                          KHB Colony,Kormanagala,<br/>
                          Bengaluru,560095<br/>
                          India
                      </p>

                  </div>


                          {/* This is right side of the contact page */}
                          <div className="col-md-6 mb-md-0 mb-3">
                            <h1 className="second">FOLLOW US</h1>
                            <div className="icon1"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                            <div className="icon2"><i className="fa fa-facebook-official" aria-hidden="true"></i></div>
                            <div className="icon4"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                            
                            <button className="btn btn-warning btn2"><a href="#"><h6>Get Connected</h6></a></button>
                          </div>
                          {/* This is verticle line in left side of the contact */}
                          <div className="vl1"></div>
                          <div className="vl2"></div>
                          <hr className="new1"></hr>
                          
                          {/* This is navbar below the hr line */}
                            <ul className="navbar">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About-us</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            </ul>
                         <a href=""><div className="icon3"><i className="fa fa-angle-up" aria-hidden="true"></i></div></a>
                        </div>




                    </div>
                    </footer>
           
                    </div>



        

            </div>
        );
    }
}


export default form;