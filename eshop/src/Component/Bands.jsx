import React, {Component} from 'react';
import '../Css/Bands.css';
import logogodraj1 from '../images/logo-godrej.png';
import logooppo1 from '../images/logo-oppo.png';
import logocococola1 from '../images/logo-coca-cola.png';
import logopaypal1 from '../images/logo-paypal.png';
import logophilips1 from '../images/logo-philips.png';


class Bands extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="brands">
                <div className="small-container">
                    <div className="row">
                      <div className="col-5">
                          <img src={logogodraj1}></img>
                      </div>
                      <div className="col-5">
                          <img src={logooppo1}></img>
                      </div>
                      <div className="col-5">
                          <img src={logocococola1}></img>
                      </div>
                      <div className="col-5">
                          <img src={logopaypal1}></img>
                      </div>
                      <div className="col-5">
                          <img src={logophilips1}></img>
                      </div>
                    </div>
                </div>
                </div>
         );
    }
}
 
export default Bands;