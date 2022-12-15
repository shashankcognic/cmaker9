import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddBank = () => {
  let navigate = useNavigate();
  const [bankdata, setBankData] = useState([]);
  const [bankname, setBankname] = useState("");

  const token = localStorage.getItem("token");
  console.log(token);

  const getData = async () => {
    let result = await fetch("http://localhost:9000/getbank", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    setBankData(result);
    console.log(bankdata);
  };
  useEffect(() => {
    console.log(token);
    getData();
  }, []);
  // console.log(bankdata);

  const submitBank = async (e) => {
    e.preventDefault();
    console.log(bankname);

    if (!bankname) {
      alert("Please Select Bank");
      return;
    }

    let result = await fetch("createuserBank", {
      method: "post",
      body: JSON.stringify({ bankname }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    if (result.status) {
      console.log(result);
      alert("bank added Successfully");
    } else {
      alert(result.message);
    }
    navigate("/bankLinkage");
  };

  return (
    <Container className="LContainer shadow-lg rounded " responsive>
      <Form className="form p-1" onSubmit={submitBank}>
        <h1 className=" mt-5 text-primary text-center rounded shadow p-3">
          Add Bank
        </h1>

        <Form.Group className="mb-3 mt-3">
          <Form.Label className="p h1 pt-3">Bank</Form.Label>
          <Form.Select
            className="fselect pt-3"
            size="lg"
            value={bankname}
            onChange={(event) => {
              setBankname(event.target.value);
            }}
          >
            {bankdata &&
              bankdata.map((item, index) => {
                return (
                  <option value={item.banknamelist}>{item.banknamelist}</option>
                );
              })}
          </Form.Select>
        </Form.Group>

        <Button className=" addBankbtn" variant="primary" type="submit">
          Add Bank
        </Button>
      </Form>
    </Container>
  );
};

export default AddBank;
