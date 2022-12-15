import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import reg from "../assets/images/Register.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");

  let navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    console.log("register");

    if (!name) {
      alert("Please Enter name");
      return;
    }
    if (!email) {
      alert("Please Enter email");
      return;
    }

    if (!password) {
      alert("Please Enter Password");
      return;
    }
    if (!mobile) {
      alert("Please Enter mobile No.");
      return;
    }
    if (!address) {
      alert("Please Enter address");
      return;
    }

    let result = await fetch("register", {
      method: "post",
      body: JSON.stringify({ name, email, password, mobile, address }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.status) {
      alert("users Added");
      navigate("/login");
    } else if (!result.status) {
      alert("Email already exist");
    } else {
      console.warn("error");
    }

    console.warn(result);
  };

  return (
    <Container className="container mt-5 shadow-lg rounded responsive">
      <Row>
        <Col>
          <h1 className="text-danger text-center rounded mt-5 p-3">
            Register Now
          </h1>
          <img src={reg} className="image sm-8 " alt="logo" />
        </Col>
        <Col>
          <Form className="p-5" onSubmit={submit}>
            <h1 className="text-primary text-center rounded shadow p-3">
              Let’s Get Started
            </h1>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setpassword(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter number"
                value={mobile}
                onChange={(event) => {
                  setmobile(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Address"
                value={address}
                onChange={(event) => {
                  setaddress(event.target.value);
                }}
              />
            </Form.Group>

            <Button className="button" variant="primary" type="submit">
              Register
            </Button>
          </Form>

          <div className="navi">
            <h6>Already Have An Account?</h6>
            <NavLink className="navilink" to="/login">
              Login
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
