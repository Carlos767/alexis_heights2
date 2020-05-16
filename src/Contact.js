import React, { Component } from "react";
import axios from 'axios';
import { Button, Alert, Input, Row, Col, Form, Label } from 'reactstrap';
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

 
class Contact extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      unit: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  render() {
  
    return(
      <div className="container">
        <div className="container">
          <div className="row">
            <h2>GOT QUESTIONS?</h2>
            <p> Contact Alexis Heights Management or Board of Directors To Request Food Assistance,<br />
            Voice a Concern, Report a Problem, or Say Hello! Alexis Heights are individually owned condos,<br /> 
            and if this message is in regards to your rent or individual unit, please contact your Landlord or <br />
            Property Management company directly. </p>
          </div>
        </div>
        

        <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <h5>Our Address</h5>
            <address>
              110 S. Jones Blvd<br />
              Las Vegas, Nevada 89118<br />
              U.S.A.
            </address>
          </div>
          <div className="col">
            <a role="button" className="btn btn-link" href="tel:+17027378580"><i className="fa fa-phone"></i> 1-702-737-8580</a><br />
            <a role="button" className="btn btn-link" href="mailto:alheoffice@gmail.com"><i className="fa fa-envelope-o"></i> alheoffice@gmail.com</a>
          </div>
        </div>
      
        <div className="Contact">
          <div className="col-md-10">
            <Form model="Contact" onSubmit={values => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="fName" md={2}>Name</Label>
                <Col md={10}>
                    <Input.text model=".fName" id="fName" name="fName"
                        placeholder="Name"
                        className="form-control"
                        validators={{
                            required, 
                            minLength: minLength(2),
                            maxLength: maxLength(15)
                        }}
                    />
                    <Alert
                        className="text-danger"
                        model=".fName"
                        show="touched"
                        component="div"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be at least 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                      />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                  <Col md={10}>
                      <Input.text model=".phoneNum" id="phoneNum" name="phoneNum"
                          placeholder="Phone number"
                          className="form-control"
                          validators={{
                              required,
                              minLength: minLength(10),
                              maxLength: maxLength(15),
                              isNumber
                          }}
                      />
                      <Alert
                          className="text-danger"
                          model=".phoneNum"
                          show="touched"
                          component="div"
                          messages={{
                              required: 'Required',
                              minLength: 'Must be at least 10 numbers',
                              maxLength: 'Must be 15 numbers or less',
                              isNumber: 'Must be a number'
                          }}
                      />
                  </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="unitNum" md={2}>Unit/ Building</Label>
                <Col md={10}>
                    <Input.text model=".unitNum" id="unitNum" name="unitNum"
                        placeholder="Unit number"
                        className="form-control"
                        validators={{
                            required,
                            minLength: minLength(2),
                            maxLength: maxLength(5),
                            isNumber
                        }}
                    />
                    <Alert
                        className="text-danger"
                        model=".unitNum"
                        show="touched"
                        component="div"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be at least 2 numbers',
                            maxLength: 'Must be 5 numbers or less',
                            isNumber: 'Must be a number'
                        }}
                    />
                </Col>
              </Row>
              <Row className="form-group">
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Input.text model=".email" id="email" name="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{
                            required,
                            validEmail
                        }}
                    />
                    <Alert
                        className="text-danger"
                        model=".email"
                        show="touched"
                        component="div"
                        messages={{
                            required: 'Required',
                            validEmail: 'Invalid email address'
                        }}
                    />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Col md={{size: 4, offset: 2}}>
                      <div className="form-check">
                          <Label check>
                              <Input.checkbox
                                  model=".agree"
                                  name="agree"
                                  className="form-check-input"
                              /> {' '}
                              <strong>May we contact you?</strong>
                          </Label>
                      </div>
                  </Col>
                  <Col md={4}>
                      <Input.select model=".contactType" name="contactType"
                          className="form-control">
                          <option>By Phone</option>
                          <option>By Email</option>
                      </Input.select>
                  </Col>
              </Row>
              <Row className="form-group">
                  <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                  <Col md={10}>
                      <Input.textarea model=".feedback" id="feedback" name="feedback"
                          rows="12"
                          className="form-control"
                      />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Col md={{size: 10, offset: 2}}>
                      <Button type="submit" color="primary">
                          Send Feedback
                      </Button>
                  </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

 
export default Contact;