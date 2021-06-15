import React, {Component} from 'react';
import '../Css/Featured.css';
import category1 from '../images/category-1.jpg';
import category2 from '../images/category-2.jpg';
import category3 from '../images/category-3.jpg';


class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="categories">
                <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <img src={category1}></img>
                    </div>
                    <div className="col-3">
                        <img src={category2}></img>
                    </div>
                    <div className="col-3">
                        <img src={category3}></img>
                    </div>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default Featured;