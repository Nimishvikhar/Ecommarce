import React, {Component} from 'react';
import '../Css/FeatuedProduct.css';
import product1 from '../images/product-1.jpg';
import product2 from '../images/product-2.jpg';
import product3 from '../images/product-3.jpg';
import product4 from '../images/product-4.jpg';
import product5 from '../images/product-5.jpg';
import product6 from '../images/product-6.jpg';
import product7 from '../images/product-7.jpg';
import product8 from '../images/product-8.jpg';
import product9 from '../images/product-9.jpg';
import product10 from '../images/product-10.jpg';
import product11 from '../images/product-11.jpg';
import product12 from '../images/product-12.jpg';
import {AiFillStar , AiOutlineStar} from 'react-icons/ai';  
import {BsFillChatSquareQuoteFill} from 'react-icons/bs';  




class FeatuedProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={product1}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product2}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product3}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product4}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                </div>
                <h2 className="title">Latest Products</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={product5}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product6}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product7}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product8}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product9}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product10}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product11}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src={product12}></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    < AiFillStar />
                    <AiOutlineStar />
                    </div>
                        <p>$50.00</p>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default FeatuedProduct;