import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BankLinkage = () => {
  const [firm, setFirm] = useState([]);
  const [firmdata, setFirmData] = useState([]);
  const [bankdata, setBankData] = useState([]);
  let [firmname, setFirmname] = useState("");
  const [bankname, setbankname] = useState("");
  const [firmid, setfirmid] = useState("");
  const [ifsc, setifsc] = useState("");
  const [branchname, setbranchname] = useState("");
  const [account, setaccount] = useState("");
  const [userid, setuserid] = useState("");

  let navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log(token);
  const getFirm = async () => {
    let result = await fetch("http://localhost:9000/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log("hahahah", result);
    setuserid(result._id);
    var firmarray = [];
    result.firmDatas.firmid.forEach((element) => {
      firmarray.push({ _id: element._id, firmname: element.firmname });
      return setFirmData(firmarray);
    });

    // console.log(result.firmDatas.firmid[0].bankLink[0].bankname)
    // console.log(firmdata[0]);
  };

  const getBank = async () => {
    let result = await fetch("http://localhost:9000/getlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log("lol", result);
    var bankarray = [];
    result.forEach((element) => {
      console.log(element);
      bankarray.push(element.bankname);
      return setBankData(bankarray);
    });

    // console.log(result.firmDatas.firmid[0].bankLink[0].bankname)
    // console.log(firmdata[0]);
  };
  console.log(firmid);
  // let options = firmdata.find(option=>option._id===firmid)
  // var final = options?.firmname
  // console.log(final)
  // console.log(bankname)
  console.log(bankname);

  const submit = async (e) => {
    e.preventDefault();
    console.log("entered");
    let result = await fetch("http://localhost:9000/banklinking", {
      method: "post",
      body: JSON.stringify({ firmid, bankname, branchname, ifsc, account }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);

    if (result.status) {
      alert("bank linked successfully");
      navigate("/generateSlip");
    } else {
      alert("bank not linked");
    }
  };

  useEffect(() => {
    getFirm();
    getBank();
  }, [firmname]);
  return (
    <Container className="Container mt-5 shadow-lg rounded " responsive>
      <Form className="p-5" onSubmit={submit}>
        <h1 className="text-primary text-center rounded shadow p-3">
          Bank Link
        </h1>
        <Form.Group className="mb-3">
          <Form.Label>Firm Name</Form.Label>
          <Form.Select
            className="fselect"
            size="sm"
            value={firmid}
            onChange={(e) => setfirmid(e.target.value)}
          >
            <option value="" disabled>
              select and option
            </option>
            {firmdata.map((firm, index) => {
              return (
                <option value={firm._id} key={index}>
                  {firm.firmname}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bank name</Form.Label>

          <Form.Select
            className="fselect"
            size="sm"
            value={bankname}
            onChange={(e) => {
              setbankname(e.target.value);
            }}
          >
            <option value="" disabled>
              select and option
            </option>
            {bankdata.map((bank, index) => {
              return <option key={index}>{bank}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 mt-3">
          <Form.Label>IFSC Code</Form.Label>
          <Form.Control
            type="text"
            value={ifsc}
            onChange={(e) => setifsc(e.target.value)}
            placeholder="Enter IFSC Code"
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-3">
          <Form.Label>Branch Name</Form.Label>
          <Form.Control
            type="text"
            value={branchname}
            onChange={(e) => setbranchname(e.target.value)}
            placeholder="Enter Branch Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Account No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Account Number"
            value={account}
            onChange={(e) => setaccount(e.target.value)}
          />
        </Form.Group>

        <Button className=" linkbtn" variant="primary" type="submit">
          Link Bank Account
        </Button>
      </Form>
    </Container>
  );
};

export default BankLinkage;
