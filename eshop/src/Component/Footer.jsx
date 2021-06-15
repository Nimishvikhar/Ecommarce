import React, {Component} from 'react';
import '../Css/Footer.css';
import logowhite from '../images/logo-white.png';
import playstore from '../images/play-store.png';
import appstore from '../images/app-store.png';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Dwonload App for Andriod and ios moblie phone.</p>
                        <div className="app-logo">
                            <img src={playstore}></img>
                            <img src={appstore}></img>

                        </div>

                        </div>
                        <div className="footer-col-2">
                        <img src={logowhite}></img>
                        <p>Our Purpose Is To Sustainably Make the Pleasure and Benefite of Sport Accessible to the Many. </p>
                        </div>
                        <div className="footer-col-3">
                        {/* <img src={logowhite}></img> */}
                        {/* <p>Our Purpose Is To Sustainably Make the Pleasure and Benefite of Sport Accessible to the Many. </p> */}
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                        </div>
                        <div className="footer-col-4">
                            <h4>Follow us</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>You Tube</li>
                            </ul>

                        </div>
                    
                    </div>
                    <br></br>
                        <hr></hr>
                      <p className="copyright">Copyright Nimish Vikhar</p>
                </div>
            </div>

         );
    }
}
 
export default Footer;