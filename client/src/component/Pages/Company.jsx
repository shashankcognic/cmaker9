import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Navbars from "../Navbar";
import logo from "../../assets/images/companylogo.png"

const Company = ()=>{
    return (
        <>
            <Navbars/>
            <Container >
                <Row >
                    <Col sm={3}>
                        <ul className="companyul">
                        <p className="companynameheading">MY COMPANIES</p>

                        <li className="Companyli">
                                <div className="companylogodiv">
                                <img className="companylogo" alt="logo will be uploaded" src={logo} />
                                </div>

                                <div className="companynamediv">
                                    <h4 className="companyname">Company Name</h4>
                                </div>
                        </li>

                        <hr />
                        </ul>
                        
                    </Col>

                    <Col>
                         <div className="companydetails">
                            <div className="companymainheader">
                                    <h3 className="m-0 font-bold">COMPANY MANAGEMENT</h3>
                            </div>
                            
                            <div className="companybuttons">
                                <button className="">
                                    <i></i>
                                    REQUEST COMPANY ACCESS
                                </button>
                            </div>


                        </div>   
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Company;