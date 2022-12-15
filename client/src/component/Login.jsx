import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import logo from "../assets/images/chlogo.png";

function Login() {
  const { setCurrentUser } = useContext(AuthContext);

  let navigate = useNavigate();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please Enter email");
      return;
    }

    if (!password) {
      alert("Please Enter Password");
      return;
    }

    let result = await fetch("login", {
      method: "post",
      body: JSON.stringify({ name, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.status) {
      alert("Login Successfully");
      const token = result.token;
      console.log("hello", token);
      localStorage.setItem("token", token);
      setCurrentUser({
        name: result.name,
        id: result._id,
      });
      navigate("/dashboard");
    } else {
      alert("Invalid users");
    }
  };

  return (
    <>
      <Row>
        <Col className="logincol">
          <img className="loginlogo" src={logo} alt="image" />
          <div>
            <Form className="form p-1" onSubmit={submit}>
              <h3 className="loginheading mt-4">Sign In</h3>

              <Form.Group className="mb-3 mt-3">
                <Form.Control
                  className="logininput"
                  type="text"
                  placeholder="Enter email"
                  maxLength="100"
                  value={name}
                  onChange={(event) => {
                    setname(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  className="logininput"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setpassword(event.target.value)}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                </Col>
                <Col>
                  <NavLink className="navilink" to="/register">
                    Forgot Password?
                  </NavLink>
                </Col>
              </Row>

              <Button className=" loginbtn" type="submit">
                Login
              </Button>
            </Form>
          </div>

          <div>
            <Row>
              <Col><p>Don't have an account yet?</p></Col>
              <Col></Col>
            </Row>
            
          </div>
        </Col>
        <Col sm={9}>feess</Col>
      </Row>
    </>
  );
}

export default Login;

{
  /* 
<Container className="LContainer shadow-lg rounded " responsive>
<Form className="form p-1" onSubmit={submit}>
  <h1 className="mt-5 text-primary text-center rounded shadow p-3">
    Login
  </h1>

  <Form.Group className="mb-3 mt-3">
    <Form.Label className="h5">Email</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter email"
      value={name}
      onChange={(event) => {
        setname(event.target.value);
      }}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label className="h5">Password</Form.Label>
    <Form.Control
      type="password"
      placeholder="Enter password"
      value={password}
      onChange={(event) => setpassword(event.target.value)}
    />
  </Form.Group>

  <Button className=" loginbtn" variant="primary" type="submit">
    Login
  </Button>
</Form>
<div className="navi">
  <h6>Create New User</h6>
  <NavLink className="navilink" to="/register">
    Register Here...
  </NavLink>
</div>
</Container> */
}
