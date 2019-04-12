import React, { PureComponent, Fragment } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import _ from 'lodash';

import BreadCrumb from 'components/common/forms/BreadCrumb';

import { getCategories, getUoM } from 'service/catalogService';

import 'styles/forms.css';

class AddProduct extends PureComponent {

  state = {
    allCatagoryList: [],
    uomList: [],
    isCatagoryLoading: true,
    isLoading: true,

  }

  componentDidMount = async () => {
    await this.getCategories();
    await this.getUom()
  }


  getCategories = async () => {
    const res = await getCategories();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ allCatagoryList: [], isCatagoryLoading: false });
    await this.setState({ allCatagoryList: data, isCatagoryLoading: false })
    console.info(data);

  }


  getUom = async () => {
    const res = await getUoM();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ uomList: [], isLoading: false });
    await this.setState({ uomList: data, isLoading: false });
  }


  catagoryOptionsForm = () => {
    const { allCatagoryList } = this.state;
    return _.map(allCatagoryList, (v, i) => <option key={`Catagory` + i} value={v["categoryId"]}>{v['categoryName']}</option>)
  }

  uomOptionsForm = () => {
    const { uomList } = this.state;
    return _.map(uomList, (v, i) => <option key={`UOM` + i} value={v["configValue"]}>{v['configValue']}</option>)
  }

  render() {
    const { formType } = this.props;
    const { isLoading, isCatagoryLoading } = this.state;
    const breadCrumbItems = {
      title: formType + " Product",
      items: [
        { name: "Home", link: "/dashboard" },
        { name: "Products", link: "/catalog/products" },
        { name: `${formType} Product `, active: true },
      ]
    };
    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <Row>
          <Form className="col-12 ">
            <Row className="form-div">
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Category Name</Label>
                  <select type="text" className="form-control" id="exampleEmail" >
                    {!isCatagoryLoading && this.catagoryOptionsForm()}
                  </select>
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Product Name</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>

              <Col md={6} sm={12} >
                <FormGroup>
                  <Label for="email">Description</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Quantity</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Unit Of Measurement</Label>
                  <select type="text" className="form-control" id="exampleEmail" >
                    {!isLoading && this.uomOptionsForm()}
                  </select>
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">MRP(Rs)</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Selling Price(Rs)</Label>
                  <Input type="text" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Preview Image</Label>
                  <Input type="file" className="form-control" id="exampleEmail" />
                </FormGroup>
              </Col>
              <Col md={3} sm={12} >
                <FormGroup>
                  <Label for="email">Status</Label>
                  <select className="form-control"  >
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
      </Fragment >
    )
  }
}


export default AddProduct;