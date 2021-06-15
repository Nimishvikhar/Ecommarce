import React from 'react';
import image1 from '../images/image1.png'
import '../Css/Home.css';

function Home(){
    return(
        <div className="header">
        <div className="row">
            <div className="col-2">
                {/* <img  ></img> */}
                <h1>Give Your Workout <br></br> A New Style!</h1>
                <p>Success isn't always about greatness.It's about consistency.
                    Consistence<br></br> hard work gains success.Greatness will come.
                </p>
                <a href="" className="btn">Explore Now &#8594;</a>
            </div>
            <div className="col-2">
                  <img  src={image1}></img>
            </div>

            </div>
            </div>
    )
}

export default Home;