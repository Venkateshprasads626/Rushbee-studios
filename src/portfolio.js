import React, { Component } from "react";
import './portfolio.css'
import Group19 from './images/Group19.png'
import addressmap from './images/addressmap.png'
import Group60 from './images/Group60.png'
import Group61 from './images/Group61.png'
import Group62 from './images/Group62.png'
import Group63 from './images/Group63.png'
import Group64 from './images/Group64.png'
import Group65 from './images/Group65.png'









 
class portfolio extends Component {
  render() {
    return (
      <div className="portfoliopage">
      <div className="portfolio">
      
      </div>

      

      <div className="Contact-area1">
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
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">About-us</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                    </ul>
                  <div className="icon3"><i className="fa fa-angle-up" aria-hidden="true"></i></div>
                </div>




            </div>
            </footer>
      </div>
 
    );
  }
}
 
export default portfolio;





