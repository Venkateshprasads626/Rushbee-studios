import React, { Component } from "react";
import './file.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vector from './images/Vector.png'
import s1 from './images/s1.png'
import web from './images/web.png'
import brand from './images/brand.png'
import design from './images/design.png'
import birthday from './images/birthday.png'
import logo1 from './images/logo1.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'
import logo4 from './images/logo4.png'
import logo5 from './images/logo5.png'
import logo6 from './images/logo6.png'
import logo7 from './images/logo7.png'
import logo8 from './images/logo8.png'
import logo9 from './images/logo9.png'
import Group19 from './images/Group19.png'
import addressmap from './images/addressmap.png'
import { NavLink } from  "react-router-dom"



 
class Home extends Component {
  render() {
    return (
        <div>
      {/* //This is first card */}
      <div className="card mb-3">
                <div className="row no-gutters">
                   <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">
                                <h3> We Focus On Creating</h3>
                                <h4>Your Ideas Look Visually</h4>
                                <h3>Appealing and strive to</h3>
                                <h4> Get your Designs Attract</h4>
                                <h3 className="header1234">in every Dimensions!</h3>   
                            </p>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={Vector} className="vector" alt="..." ></img>
                    </div>
                </div>
        </div>
              {/* this is service section */}

        <div className="Service">
                <h2 className="Third">Services</h2>
                <hr className="new2"></hr>
            <div className="servicecards">
                <div className="card1">
                    <img className="s1" src={s1} alt=""></img>
                        <div className="txt">
                            <h3 className="headerpart987">UI / UX</h3>
                            <p className="big">DESIGN</p>
                        </div>
                            <div className="navdots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>

                                
                                <div className="card2">
                                        <div className="text">
                                            <h5>UI / UX</h5>
                                            <h5>DESIGN</h5>
                                            <div className="ui">
                                            <p className="t">Every engagement</p>
                                            <p className="tx">is unique. And our</p>
                                            <p className="tt">best UI design</p>
                                            <p className="ttx">company offer an</p>
                                            <p className="tttx">equally</p> 
                                            <p className="tttx"> 'Unique UX 
Solution'!</p>
                                           
                                            </div>
                                        </div>
                                </div>

                            
                </div>
                <div className="card1">
                    <img className="s2" src={web} alt=""></img>
                        <div className="txt">
                            <h3 className="headerpart987">WEB</h3>
                            <p>DESIGN</p>
                        </div>
                             <div className="navdots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>

                            <div className="card3">
                                <div className="text">
                                    <h5>WEB</h5>
                                    <h5>DESIGN</h5>
                                    <p className="t">We cover</p>
                                    <p className="tx">everything from the</p>
                                    <p className="tt">initial coding to</p>
                                    <p className="ttx">designing and the</p>
                                    <p className="tttx">final delevery.</p>
                                   
                                </div>
                                        
                            </div>
                </div>
                <div className="card1">
                    <img className="s3" src={brand} alt=""></img>  
                        <div className="txt">
                            <h3 className="headerpart987">BRAND</h3>
                            <p>CREATION</p>
                        </div>
                        <div className="navdots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <div className="card4">
                                <div className="text">
                                    <h5>BRAND</h5>
                                    <h5>CREATION</h5>
                                    <div className="brand">
                                    <p className="t">We just don't</p>
                                    <p className="tx">create Names,</p>
                                    <p className="tt">We create</p>
                                    <p className="ttx">Brands.</p>
                                    </div>
                                </div>
                                        
                                </div>
                </div>
                <div className="card1">
                    <img className="s4" src={design} alt=""></img>  
                        <div className="txt">
                            <h3 className="headerpart987">PACKAGE</h3>
                            <p>DESIGN</p>
                        </div> 
                        <div className="navdots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>

                            <div className="card5">
                                <div className="text">
                                    <h5>PACKAGE</h5>
                                    <h5>DESIGN</h5>
                                    <p className="t">Creating an </p>
                                    <p className="tx">eye-catching </p>
                                    <p className="tt">pacaging design that </p>
                                    <p className="ttx">suits the product, </p>
                                    <p className="tttx">stands out on </p>
                                    <p className="tttx">crowed shelves.</p>
                                    
                                </div>
                                        
                                </div>
                </div>
                <div className="card1 ab">
                    <img className="s5" src={birthday} alt=""></img>
                        <div className="txt">
                            <h3 className="headerpart987">DIGITAL</h3>
                            <p>MARKETING</p>
                        </div>
                        <div className="navdots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>

                            <div className="card6">
                                <div className="text">
                                    <h5>EVENT</h5>
                                    <h5>DESIGN</h5>
                                    <p className="t">We increase your</p>
                                    <p className="tx">Organization's growth,</p>
                                    <p className="tt">by analysing your</p>
                                    <p className="ttx">digital status, & help</p>
                                    <p className="tttx">you grow organically</p>
                                   
                                </div>
                                        
                            </div>
                </div>
                </div>
        </div>

        {/* This is client section */}

        <div className="client-area">
                    <h3 className="clienthead">Our clients</h3>
                    <hr className="horizantalline"></hr>

                    {/* This section is Quest */}
                    <div className="card card7">                               
                        <img className="a1" src={logo1} alt=""></img>
                        <div className="card overlay">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from Quest</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div>
                    </div>
                    {/* This section is atom */}
                        <div className="card card8">
                        <img className="a2" src={logo2} alt=""></img>
                        <div className="card overlay1">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from Atom</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div>
                    </div>   
                    
                    {/* This section is Deep Grade */}
                    <div className="card card9">
                        <img className="a3" src={logo3} alt=""></img>
                        <div className="card overlay2">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from Deep Grade</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div>
                    </div>
                    {/* This section is SmartTail */}
                    <div className="card card10">
                        <img className="a4" src={logo4} alt=""></img>
                        <div className="card overlay3">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from SmartTail</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div>
                    </div>
                   {/* This section is Aryan Associtae */}
                    <div className="card card11">
                        <img className="a5" src={logo5} alt=""></img>
                        <div className="card overlay4">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from Aryan Associate</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div>
                    </div>
                    
                   {/* This section is ESTS */}
                    <div className="card card12">
                        <img className="a6" src={logo6} alt=""></img> 
                        <div className="card overlay5">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from ESTS</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div>
                    </div>
                   
                   {/* This section is griphaprphtham */}
                    <div className="card card13">
                        <img className="a7" src={logo7} alt=""></img>
                        <div className="card overlay6">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from griphapraphtham</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div>
                    </div>
                    {/* This section is nefa */}
                    <div className="card card14">
                        <img className="a8" src={logo8} alt=""></img> 
                        <div className="card overlay7">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from nefa</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div> 
                    </div>
                   
                  {/* This section is Ataura */}
                    <div className="card card15">
                        <img className="a9" src={logo9} alt=""></img>
                        <div className="card overlay8">
                            <div className="text-area">
                                <h2 className="text-area-header">Testimonial from Ataura</h2>
                                <hr className="belowline"></hr>
                                <p className="text-area-data">
                                    Lorem ipsum dolor sit amet,Consectetur adipiscing elit.In nibh pretium, ipsum aliquet eget pretium<br/>
                                    tellus tortor nibh. Porttitor amet euismod scelerisque dictum nullam. Feugiat ullamcroper molestie
                                </p>
                                <p className="text-area-data1">
                                    ultricies amet amet.Urna amet ante semper odio suspendisse.Vitae sed a purus laoreet sit imperdiet.
                                </p>

                                
                            </div>
                        </div>
                    </div>                 
                </div>


            {/* This is map */}

            <div className="Contact-area">
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
                      <p className="details2">E-MAIL - reachus@rushbeestudios.com</p>
                      <p className="address"> 
                          <h2>ADDRESS:-</h2>
                          RUSHBEE STUDIOS,<br/>
                          No 12, 3rd cross, Patel Narayan Reddy Layout,<br/>
                          Ejipura, 6th Block, Koramangala,<br/>
                          Bengaluru, 560095<br/>
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

        
       
    );
  }
}
 
export default Home;

                