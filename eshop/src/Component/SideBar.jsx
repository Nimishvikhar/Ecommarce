import React from 'react';
import './Side.css'

export const SideBar = () => {
    return (
        <div className="sidebar-first"  className="main">
      <div  col-md-2 bg-primary>
            <div class="row p-3">
                <div class="col-sm-2 ">
                    <i class="fa fa-3x fa-user" aria-hidden="true"></i>
                </div>
                <div class="col-sm-2 container">
                    <h5 >Test <br/> 0.00 </h5>
                </div>
            </div>
        </div>
        {/* class="text-white" */}
        <nav class="container" className="my_nav">
                <ul class="nav  flex-column">
                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto" >
                                <h5 >Started</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-home" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Home</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-credit-card" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Transaction</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-file" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Invoice</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-industry" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Inventory</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-users"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Contact</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-folder-open" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Bookkeeping</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-home" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Reports</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-camera" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                {/* <!-- <h5><a id="linkk"> Expence claims</h5></a> --> */}
                                <h5>Expence claims</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-cog" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Setting</h5>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item d-inline my_nav">
                        <div class="row">
                            <div class="col-2">
                                <i class="fa fa-home" aria-hidden="true"></i>
                            </div>
                            <div class="col-auto">
                                <h5>Inventory</h5>
                            </div>
                        </div>
                    </li>

                </ul>

            </nav>
        </div>
    )
}
