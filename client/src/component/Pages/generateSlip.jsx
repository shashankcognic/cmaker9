import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const GenerateSlip = () => {
  const [amount2k, setAmount2k] = useState("");
  const [amount500, setAmount500] = useState("");
  const [amount200, setAmount200] = useState("");
  const [amount100, setAmount100] = useState("");
  const [amount50, setAmount50] = useState("");
  const [amount20, setAmount20] = useState("");
  const [amount10, setAmount10] = useState("");
  const [amount5, setAmount5] = useState("");
  const [amount2, setAmount2] = useState("");
  const [amount1, setAmount1] = useState("");
  const [firmdata, setFirmData] = useState();
  const [firmid, setfirmid] = useState("");
  const [bankdata, setBankData] = useState("");
  const [bankid, setbankid] = useState("");
  const [searchbranch, setsearchbranch] = useState([]);
  const [userid, setuserid] = useState("");
  const [branchdata, setbranchdata] = useState([]);
  const [branchid, setbranchid] = useState([]);
  const [accountfin, setaccountfin] = useState("");
  const [totalamount, settotalamount] = useState(0);
  const [firmnamee, setfirmnamee] = useState("");

  let navigate = useNavigate();
  var Total =
    amount2k * 2000 +
    amount500 * 500 +
    amount200 * 200 +
    amount100 * 100 +
    amount50 * 50 +
    amount20 * 20 +
    amount10 * 10 +
    amount5 * 5 +
    amount2 * 2 +
    amount1 * 1;

  const token = localStorage.getItem("token");
  console.log(token);

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

    var firmarray = [];
    result.forEach((element) => {
      firmarray.push({ _id: element._id, firmname: element.firmname });
      // console.log(firmarray);
      return setFirmData(firmarray);
    });
    console.log(firmarray);
    getBank(firmarray);
    const firmname = firmarray.find((element) => {
      return element._id === firmid;
    });
    console.log(firmname);
    const firmm = firmname?.firmname;
    setfirmnamee(firmm);
    console.log(firmnamee);
  };

  function removeDuplicates(bankarray) {
    var unique = [];
    bankarray.forEach((element) => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  }

  const getBank = async (firmarray) => {
    if (!firmid) return;
    else {
      let result = await fetch("http://localhost:9000/getbankslip", {
        method: "post",
        body: JSON.stringify({ firmid }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      console.warn("kkkkk", result);

      var bankarray = [];
      var bankarray2 = [];
      result.firmDatas.bankLink.forEach((element) => {
        // console.log(element);
        bankarray.push(element.bank);
        bankarray2 = removeDuplicates(bankarray);

        console.log(bankarray);

        return setBankData(bankarray2);
      });
    }
  };
  // console.log("array", bankdata);
  console.log(bankid);
  const getbranch = async () => {
    console.log("hello");

    console.log(firmid, bankid);
    // console.log("hello");
    if (branchid && firmid) {
      let result = await fetch("http://localhost:9000/getbranches", {
        method: "post",
        body: JSON.stringify({ firmid, bankid }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      // console.warn("kkkkk", result);

      var brancharray = [];
      result.forEach((element) => {
        // console.log(element);
        brancharray.push({ branch: element.branch, account: element.account });

        return setbranchdata(brancharray);
      });
    } else return;
  };

  console.log(branchid);
  const getaccount = async () => {
    if (firmid && bankid && branchid) {
      console.log("be");
      let result = await fetch("http://localhost:9000/getaccount", {
        method: "post",
        body: JSON.stringify({ firmid, bankid, branchid }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      console.log(result);
      console.log(result[0].account);
      setaccountfin(result[0].account);
      console.log(accountfin);
     
    } else return;
  };

  const sendform = async () => {
    console.log("be");
    let result = await fetch("http://localhost:9000/generateslip", {
      method: "post",
      body: JSON.stringify({
        firmid,
        bankid,
        branchid,
        accountfin,
        firmnamee,
        amount1,
        amount2,
        amount5,
        amount10,
        amount20,
        amount50,
        amount100,
        amount200,
        amount500,
        amount2k,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
  };
  useEffect(() => {
    getFirm();
    getBank();
    getbranch();
    getaccount();
  }, [firmid, bankid, branchid]);

  //  const account = () =>{

  //   let branchsearch = branchdata.find((item)=>item.branch === branchid);
  //   console.log(branchdata)
  //   let account=branchsearch?.account
  //   setaccountfin(account)
  // }

 

  // console.log(bankdata);
  // console.log(bankid);
  // console.log(branchdata);
  // console.log(branchid)

  const options = searchbranch.find((option) => option._id === bankid);
  const final = options?.branch;

  return (
    <Container className="Container  shadow-lg rounded ">
      <Form className="p-3 " onSubmit={sendform}>
        <h2 className="text-light text-center rounded shadow p-3 bg-info">
          Generate Slip
        </h2>
        <Row className="mt-4">
          <Col sm={4}>
          
              <Form.Select
              className="fselect mb-3"
              size="sm"
              value={firmid}
              onChange={(e) => setfirmid(e.target.value)}
            >
              <option value="" disabled>
                Select Firm
              </option>
              {firmdata &&
                firmdata.map((firm, index) => {
                  return (
                    <option value={firm._id} key={index}>
                      {firm.firmname}
                    </option>
                  );
                })}
            </Form.Select>
              

              
              <Form.Select
              className="fselect mb-3"
              size="sm"
              value={bankid}
              onChange={(e) => {
                setbankid(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Bank
              </option>
              {bankdata &&
                bankdata.map((bank, index) => {
                  return (
                    <option value={bank} key={index}>
                      {bank}
                    </option>
                  );
                })}
            </Form.Select>
              
           

          
              <Form.Select
              className="fselect mb-3"
              size="sm"
              value={branchid}
              onChange={(e) => {
                console.log(e.target.value);
                setbranchid(e.target.value);
                getaccount();
              }}
            >
              <option value="" disabled>
                Select Branch
              </option>
              {branchdata &&
                branchdata.map((branch, index) => {
                  return <option key={index}>{branch.branch}</option>;
                })}
            </Form.Select>
              
            <Form.Group className="mb-3">
              <Row>
                <Col> <Form.Label className="p">Account No.</Form.Label></Col>
                <Col> <Form.Label className="p genrateAccount">{accountfin} </Form.Label></Col>
              </Row>

             
             
            </Form.Group>
              
                <Form.Group className="mb-3">
                <Row>
                  <Col><Form.Label className="p">Doc Date</Form.Label></Col>
                  <Col> <Form.Control type="date" placeholder="Enter cash Deposit date" /></Col>
                </Row>
              
             
            </Form.Group>

            <Form.Group className="mb-3">
            <Row>
                  <Col><Form.Label>Deposit Date</Form.Label></Col>
                  <Col> <Form.Control type="date" placeholder="Enter cash date" /></Col>
                </Row>
              
             
            </Form.Group>
            
         
            
          
            
           
            
            
          </Col>


          <Col>
          <Row >
          <Table striped="columns" >
            <thead className="generatetablethead">
              <tr className="text-center">
                <th>Sr.</th>
                <th>Note</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="text-center generatetabletbody">
              <tr>
                <td>1</td>
                <td>2000</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount2k}
                    onChange={(e) => setAmount2k(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount2k * 2000}</h6>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>500</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount500}
                    onChange={(e) => setAmount500(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount500 * 500}</h6>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>200</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount200}
                    onChange={(e) => setAmount200(e.target.value)}
                  />
                </td>
                <td>
                  <h6>{amount200 * 200}</h6>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>100</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount100}
                    onChange={(e) => setAmount100(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount100 * 100}</h6>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>50</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount50}
                    onChange={(e) => setAmount50(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount50 * 50}</h6>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>20</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount20}
                    onChange={(e) => setAmount20(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount20 * 20}</h6>
                </td>
              </tr>

              <tr>
                <td>7</td>
                <td>10</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount10}
                    onChange={(e) => setAmount10(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount10 * 10}</h6>
                </td>
              </tr>

              <tr>
                <td>8</td>
                <td>5</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount5}
                    onChange={(e) => setAmount5(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount5 * 5}</h6>
                </td>
              </tr>

              <tr>
                <td>9</td>
                <td>2</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount2}
                    onChange={(e) => setAmount2(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount2 * 2}</h6>
                </td>
              </tr>

              <tr>
                <td>10</td>
                <td>1</td>
                <td>
                  {" "}
                  <Form.Control
                    type="number"
                    min="0"
                    max="100"
                    value={amount1}
                    onChange={(e) => setAmount1(e.target.value)}
                  />
                </td>
                <td className="text-center">
                  <h6>{amount1 * 1}</h6>
                </td>
              </tr>

              <tr>
                <td colSpan={3} className="text-right">
                  <h3>Total Amount</h3>
                </td>
                <td className="text-center bg-info text-light">
                  <h3>{Total}</h3>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
          </Col>
              
          
          
        </Row>
        
        <Button className="generatebtn" variant="primary" type="submit">
          Generate Slip
        </Button>
      </Form>
    </Container>
  );
};

export default GenerateSlip;
