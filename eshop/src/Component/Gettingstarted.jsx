import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
    import '../Css/Geeting.css';
    import contant from '../images/contract.png'
    import detalis from '../images/Detalis.png'
    import person from '../images/pepole.png'
    import first from '../images/first.png'
    import help from '../images/help.png'
    

export default function Gettingstarted() {
    return (
        <div>
            <diV >
                <img style={{width:"3%",display: "block", marginLeft: "auto"}} src={first}></img>
                </diV>
        <div style={{marginTop:"250px"}}>
           
                <h1>Welcome to Holvi</h1>
                <p>Complete the registration steps below to finish setting up your account</p>
                <diV  style={{display:"flex"}}>
                    <diV style={{margin:0 }}>
                <Card style={{width:"78%",height:"250px"}}>
                    <img className="sing" src={contant}></img>
                    <h5 style={{textAlign:"center"}}>singup</h5>
                    <p className="sing-2">Create your login name and password</p>
                    <button class="btn btn-white text-success" className="sing-3"><b>
                                    <i class="far fa-check-circle"></i> COMPLETED</b></button>
                    </Card>
                    </diV>
                    <div>
                    <Card style={{width:"78%",height:"250px"}}>
                    <img className="sing" src={person}></img>
                    <h5 style={{textAlign:"center"}}>Add personal details</h5>
                    <p className="sing-2">verify your personal information and identify.</p>
                    <button class="btn btn-primary">Add Details</button>               
                    </Card>
                    </div >
                    <div >
                    <Card style={{width:"78%",height:"250px"}}>
                    <img className="sing" src={detalis}></img>
                    <h5 style={{textAlign:"center"}}>Add business details</h5>
                    <p className="sing-2">Tell us about your business and how you'll use Holvi</p>
                    <button class="btn btn-primary ">Add Details</button>
                    </Card>
                    </div>
                    </diV>
           
        </div>
        <div>
            <img style={{width:"3%",display: "block", marginLeft: "auto"}} src={help}></img>
        </div>
        </div>
    )
}
