import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/Lift.css';

export default function Liftside() {
    return (
        
        <div className="sidebar">
           
            <ul className="color">
                <li><Link to=""><i class="fa fa-3x fa-user"></i>TEST 0.00</Link></li>
                <li><Link to="/aa"><i class="fa fa-exclamation-triangle"></i>GETTING STARTED</Link></li>
                <li><Link to=""><i class="fa fa-home"></i>Home</Link></li>
                <li><Link to="" ><i class="fa fa-credit-card"></i> TRANSACTION </Link></li>
                <li><Link to=""><i class="fa fa-file"></i> INVOICES</Link></li>
                <li><Link to=""><i class="fa fa-industry"></i> INVENTORY </Link></li>
                <li><Link to=""><i class="fa fa-users"></i> CONTACTS</Link></li>
                <li><Link to=""><i class="fa fa-folder-open"></i> BOOKKEEPING</Link></li>
                <li><Link to=""><i class="fa fa-home"></i> REPORTS</Link></li>
                <li><Link to=""><i class="fas fa-camera"></i> EXPENSE CLAIMS</Link></li>
                <li><Link to=""><i class="fa fa-cog"></i>SEETINGS</Link></li>


            </ul>
        </div>
       
    )
}
