import React, {Component} from 'react';
import "../Css/NavBar.css"
import cart from '../images/cart.png';
import menu from '../images/menu.png';
import { AiFillAlipayCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var MenuItems = document.getElementById("MenuItems");

        // MenuItems.style.maxHeight = "0px";

        function menutoggle()
        {
        MenuItems.style.maxHeight = "0px";
        
           if( MenuItems.style.maxHeight == "0px")
           {
               MenuItems.style.maxHeight = "200px";
           }
           else
           {
               MenuItems.style.maxHeight = "0px";
           }
        }
        return ( 
            <div>
            <div className="Container">
            <div className="navbar">
                <div>
              {/* <img src={}></img> */}
              {/* < AiFillAlipayCircle ></AiFillAlipayCircle> */}
                </div>
             <nav>
                 <ul id="MenuItems">
                     <li>
                         <a href="">Home</a>
                     </li>
                     <li> <a href="">Product</a></li>
                     <li href="">About</li>
                     <li href="">Contact Us</li>
                     <li href="">Account</li>

                 </ul>

             </nav>
             {/* <div className="Nav">
             <Link to="/">Home</Link>
             <Link to="/a">AboutUs</Link>
             <Link to="/u">Upload</Link>
             <Link to="/d">Download</Link>
             <Link to="/c">Contact Us</Link>
             </div> */}
             <img className="cart" src={cart}></img>
             <img className="menu-icon" src={menu} onClick="menutoggle()"></img>
            </div>
            </div>
            {/* <div>
                
                    var MenuItems = document.getElementById("MenuItems");

                 MenuItems.style.maxHeight = "0px";

                 function menutoggle()
                 {
                    if( MenuItems.style.maxHeight == "0px")
                    {
                        MenuItems.style.maxHeight = "200px";
                    }
                    else
                    {
                        MenuItems.style.maxHeight = "0px";
                    }
                 }


                
            </div> */}
            </div>
         );
    }
}
 
export default NavBar;