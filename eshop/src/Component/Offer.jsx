import React, { Component } from 'react';
import '../Css/Offer.css';
import exclusive from '../images/exclusive.png';

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src={exclusive}></img>
                        </div>
                        <div className="col-2">
                            <p>Exclusively Available on RedStore</p>
                            <h1>Smart Band 4</h1>
                            <small>The Mi Smart Band 4 features a 39.9% larger (then Mi Band 3) AMOLED color full-touch display with adjustable
                                brightness,so everything is clear as can be.
                            </small><br></br>
                            <a href="">Buy Now &#8594;</a>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Offer;