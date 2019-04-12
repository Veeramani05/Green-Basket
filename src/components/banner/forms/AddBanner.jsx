import React, { PureComponent, Fragment } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'

import BreadCrumb from 'components/common/forms/BreadCrumb';


import 'styles/forms.css';
import img1 from 'images/2.svg';
class AddBanner extends PureComponent {
  render() {
    const breadCrumbItems = {
      title: " Upload Banner",
      items: [
        { name: "Home", link: "/dashboard" },
        { name: "Banner List", link: "/banner/list" },
        { name: `Upload Banner `, active: true },
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
                  <Label for="email">Banner</Label>
                  <Input type="file" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} >
                <FormGroup>
                  <Label for="email">Banner Description</Label>
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
              <Col>
                <img className="img-thumbnail" src={img1} alt=""></img>
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


export default AddBanner;