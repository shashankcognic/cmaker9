// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link, NavLink } from "react-router-dom";
// import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";
// import { Button } from "react-bootstrap";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

// function Navbars() {
//   const { currentUser, setCurrentUser } = useContext(AuthContext);

//   console.log(currentUser);

//   return (
//     <div>
//       <Navbar bg="light" variant="light" expand="sm">
//         <Container fluid>
//           <Navbar.Brand as={Link} className="px-3" to="/">
//             {" "}
//             Check Maker
//           </Navbar.Brand>

//           <Navbar.Toggle area-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll" className="text-center">
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               {currentUser ? (
//                 <>

// <DropdownButton id="dropdown-basic-button" title="Company Switch">
//       <Dropdown.Item href="#/action-1">Firm Name</Dropdown.Item>

//     </DropdownButton>
//                   {/* <Nav.Link as={Link} to="/firmRegistration">
//                     Firm Registration
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/generateSlip">
//                     Generate Slip
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/addBank">
//                     Add Bank
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/bankLinkage">
//                     Bank Link
//                   </Nav.Link>
//                   {/* <Nav.Link as={Link} to="/axisbankslip">Axis Bank Slip</Nav.Link> */}
//                   {/* <Nav.Link as={Link} to="/sbibankslip">
//                     Sbi Bank Slip
//                   </Nav.Link> */}
//                   {/* <Nav.Link as={Link} to="/pnbbankslip">PNB Bank Slip</Nav.Link> */}

//                   <NavLink to="/login">
//                     <Button onClick={() => setCurrentUser(null)}>
//                       Log out
//                     </Button>
//                   </NavLink>
//                 </>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to="/register">
//                     Signup
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/login">
//                     Signin
//                   </Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navbars;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Navbars() {
  const [userid, setuserid] = useState("");
  const [firmnamee, setfirmnamee] = useState("");

  const [firmdata, setFirmData] = useState();
  const [firmid, setfirmid] = useState("");

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  console.log(currentUser);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiREVNTzQiLCJpZCI6IjYzNTNkZDJlM2FhMzFkNjgwODExNGFlYSIsImlhdCI6MTY2NzAzMDg5NywiZXhwIjoxNjY3MDU5Njk3fQ.fwkFO5UhD_0Yon7PCRn4IMc7SrTzmBMNnWXKqhjlVc0";

  const getFirm = async () => {
    let result = await fetch("http://localhost:9000/getfirmslip", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    // console.log("hahahah", result);
    setuserid(result[0].userid); 
    // console.log(userid);
    var firmarray = [];
    result.forEach((element) => {
      firmarray.push({ _id: element._id, firmname: element.firmname });
      // console.log(firmarray);
      return setFirmData(firmarray);
    });
    // console.log(firmarray);
    // console.log(firmid);
    
  };

 console.log(firmid);

  // const firmname = firmdata.find((element) => {
  //   return element._id === firmid;
  // });
  // // console.log(firmname);
  // const firmm = firmname?.firmname;
  // setfirmnamee(firmm);
  // // console.log(firmnamee);
 

  useEffect(() => {
    console.log("start fun")
    getFirm();
    console.log("end")
  }, [firmid]);

  console.log(firmid);
  return (
    <div>
      <Navbar className="ml-5" bg="light" variant="light" expand="sm">
        <Container fluid>

          <Navbar.Toggle area-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="text-center">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {currentUser ? (
                <>
                     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"   value={firmid}
                    onChange={(e) => setfirmid(e.target.value)}>
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>+

      {firmdata &&
                      firmdata.map((firm, index) => {
                        return (
                          <Dropdown.Item
                            // href="#/action-1"
                            value={firm._id}
                            key={index}
                          >
                            {firm.firmname}
                          </Dropdown.Item>
                        );
                      })}
     
      </Dropdown.Menu>
    </Dropdown>

                  {/* <DropdownButton
                    id="dropdown-basic-button"
                    title="Company Switch"
                    value={firmid}
                    onChange={(e) => setfirmid(e.target.value)}
                  >
                    {firmdata &&
                      firmdata.map((firm, index) => {
                        return (
                          <Dropdown.Item
                            // href="#/action-1"
                            value={firm.firmname}
                            key={index}
                          >
                            {firm.firmname}
                          </Dropdown.Item>
                        );
                      })}
                  </DropdownButton> */}
                  {/* <Nav.Link as={Link} to="/firmRegistration">
                    Firm Registration
                  </Nav.Link>
                  <Nav.Link as={Link} to="/generateSlip">
                    Generate Slip
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addBank">
                    Add Bank
                  </Nav.Link>
                  <Nav.Link as={Link} to="/bankLinkage">
                    Bank Link
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="/axisbankslip">Axis Bank Slip</Nav.Link> */}
                  {/* <Nav.Link as={Link} to="/sbibankslip">
                    Sbi Bank Slip
                  </Nav.Link> */}
                  {/* <Nav.Link as={Link} to="/pnbbankslip">PNB Bank Slip</Nav.Link> */}

                  <NavLink to="/login">
                    <Button onClick={() => setCurrentUser(null)}>
                      Log out
                    </Button>
                  </NavLink>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/register">
                    Signup
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Signin
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
