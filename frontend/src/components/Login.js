import React, {useState} from "react";
import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap";
import "./Login.css"
import {createUser, loginUser} from "../API";

// async function submission(username, password) {
//     console.log("kms");
//
// }

const Login = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const submission = async (e) => {
        e.preventDefault();
        let TOKEN = await loginUser(username, password);
        console.log(TOKEN);
        localStorage.setItem("Token", TOKEN);
    }

    let [firstNameSI, setFirstNameSI] = useState("");
    let [lastNameSI, setLastNameSI] = useState("");
    let [usernameSI, setUsernameSI] = useState("");
    let [passwordSI, setPasswordSI] = useState("");
    let [emailSI, setEmailSI] = useState("");
    let [confirmPassSI, setConfirmPassSI] = useState("");
    let [majorSI, setMajorSI] = useState("");
    let [yearSI, setYearSI] = useState("");

    const submissionSI = async (e) => {
        e.preventDefault();
        let TOKEN = await createUser(firstNameSI, lastNameSI, usernameSI, passwordSI, emailSI, majorSI, yearSI);
        console.log(TOKEN);
        localStorage.setItem("Token", TOKEN);
    };

    return (
      <div className="LoginClassName">
          <Container>
              <Row className="TopLoginRow">

                  <Col className="LeftLoginCol" md={{span: 6}}>   {/*md={{span: 3, offset: 2}}*/}
                      <div className="card">
                          <h5 className="card-header">Log In</h5>
                          <div className="card-body">
                              <Col md={{span: 6, offset: 3}}>
                                  <Form.Label>Username</Form.Label>
                                  <Form.Control type="formBasicText" placeholder="Username" onChange={e => {setUsername(e.target.value); console.log(username)}} />
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control type="password" placeholder="Password" onChange={e => {setPassword(e.target.value)}}/>
                              </Col>
                          </div>
                      </div>
                      <Form className="FormGroupLeft" onSubmit={submission}>
                          <Form.Group>
                              <Button variant="primary" className="btn btn-block btn-dope" type="submit">Login</Button>
                              <p className="forgot-password text-right forgotPass"> <a href="#" className="ForgotPass" >Forgot Password?</a></p>
                          </Form.Group>
                      </Form>
                  </Col>


                  <Col className="RightLoginCol" md={{span: 6}}>
                      <div className="card">
                          <h5 className="card-header">Sign Up</h5>
                          <div className="card-body">
                          <Form className="FormGroupRight">
                              <Row>
                              <Col md={{span: 6}}>
                                  <Form.Label>First Name</Form.Label>
                                  <Form.Control type="formBasicText" placeholder="First Name" onChange={e => {setFirstNameSI(e.target.value)}}/>
                                  <Form.Label>Last Name</Form.Label>
                                  <Form.Control type="formBasicText" placeholder="Last Name" onChange={e => {setLastNameSI(e.target.value)}}/>
                                  <Form.Label>Username</Form.Label>
                                  <Form.Control type="formBasicText" placeholder="Username" onChange={e => {setUsernameSI(e.target.value)}}/>
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control type="email" placeholder="Email" onChange={e => {setEmailSI(e.target.value)}}/>
                              </Col>
                              <Col md={{span: 6}}>
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control type="password" placeholder="Password" onChange={e => {setPasswordSI(e.target.value)}}/>
                                  <Form.Label>Password Confirmation</Form.Label>
                                  <Form.Control type="password" placeholder="Confirm Your Password" onChange={e => {setConfirmPassSI(e.target.value)}}/>
                                  <Form.Label>Degree Major</Form.Label>
                                  <Form.Control type="formBasicText" placeholder="Degree Major"onChange={e => {setMajorSI(e.target.value)}} />
                                  <Form.Label>Current Academic Year</Form.Label>
                                  <Form.Control type="formBasicText" placeholder="Current Academic Year" onChange={e => {setYearSI(e.target.value)}}/>
                              </Col>
                              </Row>
                          </Form>
                          </div>
                      </div>
                      <Form onSubmit={submissionSI}>
                        <Button variant="primary" className="btn btn-block btn-dope">Sign Up</Button>
                      </Form>
                      </Col>

              </Row>
          </Container>
      </div>
    );
  }

  export default Login;
{/**/}
/*



  <header className="App-header">
      Login Comp | Signup Comp
      <h2 >I now know why I am purple @App.css </h2>
  </header>

  <Breadcrumb className="justify-content-end">
      <Breadcrumb.Item>Forgot Password?</Breadcrumb.Item>
  </Breadcrumb>



screen width is 12


*/