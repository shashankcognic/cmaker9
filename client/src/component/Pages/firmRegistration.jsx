import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
const FirmRegistration = () => {
  const [firmname, setfirmname] = useState("");
  const [email, setemail] = useState("");
  const [gstin, setgstin] = useState("");
  const [pancard, setpancard] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [phonenumber2, setphonenumber2] = useState("");

  const token = localStorage.getItem("token");
  console.log(token);
  let navigate = useNavigate();

  const firmSubmit = async (e) => {
    e.preventDefault();

    if (!firmname) {
      alert("Please Enter name");
      return;
    }
    if (!email) {
      alert("Please Enter email");
      return;
    }

    if (!pancard) {
      alert("Please Enter Password");
      return;
    }
    if (!gstin) {
      alert("Please Enter mobile No.");
      return;
    }
    if (!address) {
      alert("Please Enter address");
      return;
    }
    if (!city) {
      alert("Please Enter city");
      return;
    }
    if (!state) {
      alert("Please Enter state");
      return;
    }
    if (!pincode) {
      alert("Please Enter pincode");
      return;
    }
    if (!phonenumber) {
      alert("Please Enter phonenumber");
      return;
    }
    if (!phonenumber2) {
      alert("Please Enter phonenumber2");
      return;
    }

    let result = await fetch("createFirm", {
      method: "post",
      body: JSON.stringify({
        firmname,
        email,
        gstin,
        pancard,
        address,
        city,
        state,
        pincode,
        phonenumber,
        phonenumber2,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    if (result.status) {
      alert("firms Added");
      navigate("/addBank");
    } else {
      console.warn("error");
    }

    console.warn(result);
  };

  return (
    <>
      <Container className="Container mt-5 shadow-lg rounded ">
        <Form className="p-3" onSubmit={firmSubmit}>
          <h1 className="text-primary text-center rounded shadow p-3">
            Firm Registration
          </h1>
          <Row className="firmRow mt-5 mobile">
            <Col className="firmCol">
              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter Company name"
                  value={firmname}
                  onChange={(e) => setfirmname(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter State"
                  value={state}
                  onChange={(e) => setstate(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter Pin Code"
                  value={pincode}
                  onChange={(e) => setpincode(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="firmCol">
              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter Phone-1"
                  value={phonenumber}
                  onChange={(e) => setphonenumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter Phone-2"
                  value={phonenumber2}
                  onChange={(e) => setphonenumber2(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Control
                  type="email"
                  placeholder="Enter Mail-id"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter GSTIN Number"
                  value={gstin}
                  onChange={(e) => setgstin(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Enter Pan Card Number"
                  value={pancard}
                  onChange={(e) => setpancard(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button className="frbtn" variant="primary" type="submit">
            Firm Registration
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FirmRegistration;
