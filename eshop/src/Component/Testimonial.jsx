import React, {Component} from 'react';
import '../Css/Testimonal.css';
import user1 from '../images/user-1.png';
import user2 from '../images/user-2.png';
import user3 from '../images/user-3.png';



class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="testimonial">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever
                            </p>
                            <img src={user1}></img>
                            <h3>Sean Parker</h3>
                        </div>
                        <div className="col-3">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever
                            </p>
                            <img src={user2}></img>
                            <h3>Mike Smith</h3>
                        </div>
                        <div className="col-3">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever
                            </p>
                            <img src={user3}></img>
                            <h3>Mobel joo</h3>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Testimonial;