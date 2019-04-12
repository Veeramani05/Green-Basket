import React, { PureComponent, Fragment } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import BreadCrumb from 'components/common/forms/BreadCrumb';

import 'styles/forms.css'; 

class AddContact extends PureComponent {
  render() {
    const breadCrumbItems = {
      title: "Add Contact",
      items: [
        { name: "Home", link: "/dashboard" },
        { name: "Contact List", link: "/contact/list" },
        { name: `Add Contact`, active: true },
      ]
    };
    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <Row>
          <Form className="col-12 ">
            {/* <h6>Add Categories</h6> */}
            <Row className="form-div">
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Contact No</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} >
                <FormGroup>
                  <Label for="email">Primary Address</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} >
                <FormGroup>
                  <Label for="email">Secondary Address</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Facebook</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Instagram</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>

              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Twitter</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={12} sm={12} >
                <FormGroup>
                  <Label for="email">About Us</Label>
                  <textarea  type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={12} sm={12} >
                <FormGroup>
                  <Label for="email">Terms</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={12} sm={12} >
                <FormGroup>
                  <Label for="email">Policy</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>  
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Status</Label>
                  <select type="text" className="form-control" id="exampleEmail" >
                    <option value="N">Active</option>
                    <option value="N">InActive</option>
                  </select>
                </FormGroup>
              </Col> 
            </Row>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-warning btn-sm mr-3" id="cancelbtn">Cancel</button>
              <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </div>
          </Form>
        </Row>
      </Fragment>
    )
  }
}


export default AddContact;