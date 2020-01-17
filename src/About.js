import React, { Component } from "react";
import './about.css';
import Group41 from './images/Group41.png'
import Group42 from './images/Group42.png'
import Group37 from './images/Group37.png'
import Group38 from './images/Group38.png'
import Group39 from './images/Group39.png'
import group51 from './images/group51.png'
import group52 from './images/group52.png'
import test1 from './images/test1.png'
import test2 from './images/test2.png'
import test3 from './images/test3.png'
import test4 from './images/test4.png'
import test5 from './images/test5.png'
import test6 from './images/test6.png'
import test7 from './images/test7.png'
import test8 from './images/test8.png'
import test9 from './images/test9.png'
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import avatar5 from './images/avatar5.png'


class About extends Component {
  render() {
    return (
      <div>
        <div className="card card50">
          <h1 className="abouthead">About-us</h1>
          <hr className="aboutunder"></hr>
          <div className="about-text">
            <p className="ab1">We are a team, who are there right from a birth of a organization<br /></p>
            <p className="ab2">until they turn a huge tree, We work with challenger brands on breaking<br /></p>
            <p className="ab3">the status quo through building brands(Logo,Business cards,Broucher <br /></p>
            <p className="ab4">etc),digital experiences(Websites,Mobile Application).<br /></p>
            <p className="ab5">We work very close in terms of User Interface(UI) & User Experience(UX) <br /></p>
            <p className="ab6">applies to any project we take over.<br /></p>
            <p className="ab7">We work with small brands on big projects, not big brands on small projects.<br /></p>
            <p className="ab8">We've never been very excited about working with a large well-known brand</p>
            <p className="ab9">on a small marketing project just to get them on our portfolio. We'd much</p>
            <p className="ab10">rather work with founders and creators to build a new brand. We love</p>
            <p className="ab11">projects that require us to put our heart and soul into them.</p>
          </div>
          <div>
          <img src={Group41} className="Group4" alt="..." ></img>
          </div>
          <div>
          <img src={Group42} className="Group5" alt="..." ></img>
          </div>
        </div>

      {/* This is team section */}

      <div className="ourteam">
        <h1 className="teamhead">Our Team</h1>
        <hr className="teamhr"></hr>
        <div className="teammember1">
            <img src={Group37} className="Group37" alt=".."></img>
            <div className="vl3"></div>
            <h4 className="membername1">Rushianjan</h4>
            <h5 className="membername12">Founder / Managing Director</h5>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
           
            <div className="membertext">
                <p className="mt1">Rushi brings 3 Years experience in design &<br /></p>
                <p className="mt2">Developement,now managing entrepreneurial.</p><br/>
                <p className="mt3">venture form past one year Over this period,</p>  <br/>
                <p className="mt4">he has led branding and web design projects.</p>  <br/>

                <p className="mt5">He spends 80% of his time answering emails<br /></p>
                <p className="mt6">(if you don't hear back from us, you know).</p><br/>
                <p className="mt7">who to blame!). He compulsively fraws out</p>  <br/>
                <p className="mt8">ideas to make a pont, not sparing any scrap of </p>  <br/>
                <p className="mt9">paper lying around, even cheque books!</p>
    
            </div>
        </div>
        <div className="teammember2">
            <img src={Group38} className="Group38" alt=".."></img>
            <div className="vl4"></div>
            <h4 className="membername2">Seshan</h4>
            <h5 className="membername21">Managing Director</h5>
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          
            <div className="membertext">
                <p className="mt1">Lorem ipsum dolor sit amet,<br /></p>
                <p className="mt2">consectetur adipiscing elit.</p><br/>
                <p className="mt3">Elementum posuere euismod</p>  <br/>
                <p className="mt4">faucibus sed lacus. At amet sed orci</p>  <br/>
                <p className="mt5"> sit accumsan lorem.</p>
            </div>
        </div>
        <div className="teammember3">
            <img src={Group39} className="Group39" alt=".."></img>
            <div className="vl3"></div>
            <h4 className="membername3">Venkatesh Prasad</h4>
            <h5 className="membername31">Front-end Developer</h5>
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
           
            <div className="membertext">
                <p className="mt1">Lorem ipsum dolor sit amet,<br /></p>
                <p className="mt2">consectetur adipiscing elit.</p><br/>
                <p className="mt3">Elementum posuere euismod</p>  <br/>
                <p className="mt4">faucibus sed lacus. At amet sed orci</p>  <br/>
                <p className="mt5"> sit accumsan lorem.</p> 
    
            </div>
        </div>
       
      </div>


      <div className="testimony">
          <img src={group51} className="group51" alt=""></img>
          <img src={group52} className="group52" alt=""></img>
          

      </div>
      <div className="avatars">
          <img src={avatar1} className="avatar1" alt=""></img>
          <img src={avatar2} className="avatar2" alt=""></img>
          <img src={avatar3} className="avatar3" alt=""></img>
          <img src={avatar4} className="avatar4" alt=""></img>
          <img src={avatar5} className="avatar5" alt=""></img>

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
 
export default About;







