import React,{useState} from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import logo from "../../assets/images/sbilogo.png";
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';

const SbiBankSlip = () => {

  const [branch, setbranch] = useState("Vijay Nagar");
  const [date, setdate] = useState("22/10/2022");
  const [accountno, setaccountno] = useState("");
  const [firmname, setfirmname] = useState("DEMO4");
  const [wordamount, setwordamount] = useState("One Lakh Twenty Nine Thousand Six Hundered");
  const [amount, setamount] = useState("129600");

  // Quantity variable declare amount
  const [qtyamount2k, setqtyamount2k] = useState("50");
  const [qtyamount500, setqtyamount500] = useState("40");
  const [qtyamount200, setqtyamount200] = useState("30");
  const [qtyamount100, setqtyamount100] = useState("20");
  const [qtyamount50, setqtyamount50] = useState("20");
  const [qtyamount20, setqtyamount20] = useState("20");
  const [qtyamount10, setqtyamount10] = useState("20");
  const [qtyamountcoins, setqtyamountcoins] = useState("");

  // Amount for note wise variable declare
  const [amount2k, setamount2k] = useState("100000");
  const [amount500, setamount500] = useState("20000");
  const [amount200, setamount200] = useState("6000");
  const [amount100, setamount100] = useState("2000");
  const [amount50, setamount50] = useState("1400");
  const [amount20, setamount20] = useState("400");
  const [amount10, setamount10] = useState("500");
  const [amountcoins, setamountcoins] = useState("");


  var account = "1234567890123";
  var accountArr = [];
  var n = account.length;
  for (var i = 0; i < n; i++) {
    accountArr.push(account[i]);
  }
  console.log(accountArr);




  const onButtonClick = () => {
    let domElement = document.getElementById('my-node');
    htmlToImage.toPng(domElement)
      .then(function (dataUrl) {
        console.log(dataUrl);
        const pdf = new jsPDF("p",'pt','a4',false);
        pdf.addImage(dataUrl, 'PNG', 0, 0,600,0,undefined,false);
        pdf.save("download.pdf");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <>
    <div id="my-node">
      <Row className="m-2" >
        {/* First Part of slip */}
        <Col sm={4}>
          <Card className="sbicard">
            <Card.Body className="scardbody">
              <Card.Title className="cardtitle mb-2">
                <Row>
                  <Col sm={3}>
                    <img src={logo} className="logo " alt="logo" />
                  </Col>
                  <Col>
                    <Card.Subtitle className="mb-2 cardsubtitle1">
                      State Bank of India
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 cardsubtitle2">
                      भारतीय स्टेट बैंक
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 cardsubtitle3">
                      {branch},Branch शाखा
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 cardsubtitle4">
                      <Row>
                        <Col sm={4}>Date &nbsp; दि.</Col>
                        <Col sm={6} className=" cardsubtitle4col">{date}</Col>
                      </Row>
                    </Card.Subtitle>
                  </Col>
                </Row>
              </Card.Title>

              <Card.Text>
                {/* First Row Code Start */}
                <Row className="mb-2">
                  <Col className="cardtextfrowcol1"> A/c. No.</Col>
                  {accountArr.map((item, index) => {
                    console.log(item, index);
                    return (
                      <Col className="cardtextfrowcol2 fw-bold"> {item} </Col>
                    );
                  })}
                </Row>
                {/* First Row Code End */}

                {/* Second Row Code Start */}
                <Row className="mb-2">
                  <Col sm={5} className="cardtextSrowcol1">
                    <Col>For the Credit of</Col>
                    <Col>के खाते में जमा करने हेतु </Col>{" "}
                  </Col>
                  <Col className="cardtextSrowcol2">{firmname} </Col>
                </Row>

                {/* Second Row Code End */}

                {/* Third  Row Code Start */}
                <Row className="mb-1">
                  <Col sm={7} className="cardtextSrowcol1">
                    Amount (in words) Rupees
                  </Col>
                  <Col sm={5} className="cardtextSrowcol2">
                    {" "}
                  </Col>
                  <Col sm={3} className="cardtextSrowcol1">
                    रु.( शब्दों में )
                  </Col>
                  <Col className="cardtextSrowcol2"> {wordamount} </Col>
                </Row>

                {/* Second Row Code End */}

                {/* Fouth Row cod Start */}
                <Table className="fourthrowtable1 " bordered >
                  <thead>
                    <tr className="theadrow">
                      <th>
                        <Col>Details of cash/cheques</Col>
                        <Col>रोकड़ / चेकों का विवरण </Col>
                      </th>
                      <th>
                        <Col>₹</Col>
                        <Col>रु.</Col>
                      </th>
                      <th>
                        <Col>P.</Col>
                        <Col>पैं.</Col>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="theadrow">
                      <td></td>
                      <td>{amount}</td>
                      <td></td>
                    </tr>
                    <tr className="theadrow">
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="theadrow">
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="theadrow">
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="theadrow">
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="theadrow">
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="theadrow">
                      <td className="theadrowcol text-center">
                        कुल रुपये &nbsp; Total &nbsp; ₹
                      </td>
                      <td className="theadrowcol">{amount}</td>
                      <td className="theadrowcol"></td>
                    </tr>
                    <tr className="theadrow">
                      <td className="theadrowcol"> Cashier रोकड़िया </td>
                      <td colSpan={2} className="theadrowcol">
                        <Col>Cash/Passing Officer</Col>
                        <Col>रोकड़/पासकर्ता अधिकारी</Col>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                {/* Fouth Row cod End */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second part of slip */}

        <Col sm={8}>
          <Card className="sbicard">
            <Card.Body className="scardbody">
              <Card.Title className="scardtitle">
                <Row className="scardtitlerow">
                  <Col sm={4} className="stitlecol">
                    <Row  >
                      <Col sm={3}>
                        <img src={logo} className="slogo " alt="logo" />
                      </Col>
                      <Col>
                        <Card.Subtitle className="mb-2 scardsubtitle1">
                          State Bank of India
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 scardsubtitle2">
                          भारतीय स्टेट बैंक
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 scardsubtitle3">
                          {branch},Branch शाखा
                        </Card.Subtitle>
                      </Col>
                    </Row>
                  </Col>

                  <Col sm={8}>
                    <Row className="mb-2">
                        <Col sm={7} className="scardtitlecol1">CA/SB/RD/CC/DL/TL Account pay-in-slip</Col>
                        <Col>
                            
                            <Row>
                                <Col sm={4} className="scardtitlecol1" >Date दिनांक </Col>
                                <Col sm={8} className=" cardsubtitle4col" > {date} </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-2" >
                      <Col className="scardtitlecol1" sm={10}> चालू /बचत/आवर्ती जमा खाता/कैश क्रेडिट/मांग ऋृण/सावधि ऋृण खाता जमा पर्ची </Col>
                        
                    </Row>
                    <Row>
                        <Col className="scardtitlecol1" sm={10}>Note : Please use seperate slip for depositing Cash and cheques, Drafts etc.  </Col>
                        <Col className="scardtitlecol1" sm={10}>नोट: कृपया नकद तथा चेक, ड्राफ्ट आदि जमा करने के हेतु अलग पर्ची का उपयोग करें.  </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text className="scardtext">
                
                <Row>
                  <Col sm={6}>
                    <Row>
                      <Col  sm={7} className="scardtextacc">For the Credit of the account of(name)</Col>
                      <Col className=" cardsubtextcol"> {firmname} </Col>
                    </Row>
                    <Row>
                      <Col  sm={5} className="scardtextacc">के खाते में जमा करने हेतु(नाम)</Col>
                      <Col className=" cardsubtextcol"> {firmname} </Col>
                    </Row>
                    <Row>
                      <Col  sm={5} className="scardtextacc">Amount (in words) Rupees</Col>
                      <Col className=" cardsubtextcol"> {wordamount} </Col>
                    </Row>
                    <Row>
                      <Col  sm={3} className="scardtextacc">रु.( शब्दों में )</Col>
                      <Col className=" cardsubtextcol"> {wordamount} </Col>
                    </Row>
                  </Col>
                  <Col sm={6}>
                  <Row >
                    <Col className="text-center">Instalment for * के लिए किस्त *</Col>
                  
                </Row>
                  <Row>
                  <Col className="cardtextfrowcol1"> A/c. No.</Col>
                  {accountArr.map((item, index) => {
                    console.log(item, index);
                    return (
                      <Col className="cardtextfrowcol2 fw-bold"> {item} </Col>
                    );
                  })}
                </Row>

                <Row>
                  <Col>खाता क्र.</Col>
                </Row>
                  </Col>
                </Row>

                <Row className="fourthRow">
                  <Col className="fw-bold">PARTICULARS OF विवरण</Col>
                  <Col className="fw-bold">CHEQUES चेक्स</Col>
                  <Col className="fourthrowcol3 fw-bold">CASH नगद </Col>
                </Row>
                
                <Table className="react-bootstrap-table mt-1" bordered  >
                  <thead >
                    <tr className="theadrow" >
                      <th>
                        <Col>Drawn on bank</Col>
                        <Col>अदाकर्ता बैंक  </Col>
                      </th>
                      <th>
                        <Col>Branch</Col>
                        <Col>शाखा</Col>
                      </th>
                      <th>
                        <Col>Cheque No.</Col>
                        <Col>चेक नं.</Col>
                      </th>
                      <th>
                        <Col>Casti Notes</Col>
                        <Col>रोकड़ नोट </Col>
                      </th>
                      <th>
                        <Col>Amount राशि </Col>
                        <Col>
                        <Row>
                          <Col sm={6}>₹  रु.</Col>
                          <Col>P. पैं.</Col>
                        </Row>
                         </Col>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="tablebody">
                    <tr className="tablerow">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{qtyamount2k}X 2000</td>
                      <td >
                        {amount2k}
                      </td>
                    </tr>
                    <tr className="tablerow">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{qtyamount500}X 500</td>
                      <td>{amount500}</td>
                    </tr>
                    <tr className="tablerow">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{qtyamount200} X 200</td>
                      <td>{amount200}</td>
                    </tr>
                    <tr className="tablerow">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td> {qtyamount100} X 100</td>
                      <td>{amount100}</td>
                    </tr>
                    <tr className="tablerow">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{qtyamount50} X50</td>
                      <td>{amount50}</td>
                    </tr>
                    <tr className="tablerow">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{qtyamount20} X 20</td>
                      <td>{amount20}</td>
                    </tr>
                    <tr className="tablerow">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{qtyamount10} X 10 </td>
                      <td>{amount10}</td>
                    </tr>
                    <tr className="tablerow">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{qtyamountcoins} Coins सिक्के</td>
                      <td>{amountcoins}</td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm={8}>
                            <Col>Cashier's Scroll No. </Col>
                            <Col>रोकड़िया/सारणी क्र. अंतरण   </Col>
                          </Col>
                          <Col>
                            <Col>Cashier </Col>
                            <Col>रोकड़िया </Col>
                          </Col>
                          
                        </Row>
                      </td>
                      <td>
                      <Row>
                          <Col sm={8}>
                          <Col>Cash/Passing Officer</Col>
                          <Col>रोकड़/पासकर्ता अधिकारी</Col>
                          </Col>
                          <Col >
                            <Col>Jotting Book </Col>
                            <Col>सूची वही  </Col>
                          </Col>
                          
                        </Row>
                      </td>
                      <td>
                      <Col>Partition No. </Col>
                      <Col>विभाजन क्र. </Col>
                      </td>
                      <td>
                        Total ₹ कुल रुपये
                      </td>
                      <td>{amount}</td>
                    </tr>

                    <tr>
                      <td>Home Br/ होम ब्रांच</td>
                      <td>Pan No./ पैन क्र.</td>
                      <td> <Col>Mob./Tel. No./</Col> 
                        <Col>मो./टेली. क्र. </Col>
                      </td>
                      <td colSpan={2}>
                        <Col>Deposited By(Signature)</Col>
                        <Col>जमाकर्ता के हस्ताक्षर</Col>
                      </td>
                      
                    </tr>
                  </tbody>
                </Table>

              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        
      </Row>
      </div>
      <button className="sbisubmitbtn" onClick={onButtonClick}>Download PDF</button>
    </>
  );
};

export default SbiBankSlip;
