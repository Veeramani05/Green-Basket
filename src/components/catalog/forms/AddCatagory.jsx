import React, { PureComponent, Fragment } from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap'
import { Form } from 'informed';
import Joi from 'joi-browser';

import { Input } from 'components/common/forms/Input'

import BreadCrumb from 'components/common/forms/BreadCrumb';
import 'styles/forms.css';

class AddCatagory extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isEditForm: false
    }

  }

  validateProperty = (name, value) => {
    const schema = Joi.reach(Joi.object(this.schema), name)
    const { error } = Joi.validate(value, schema);
    return error ? error.details[0].message : null;
  };

  schema = {
    categoryName: Joi.string().required().label("Name"),
    categoryImage: Joi.string().required().label("Image"),
    categoryStatus: Joi.string().required().label("Status"),
  };


  setFormApi = (formApi) => {
    this.formApi = formApi;
  }

  handleChange = async ({ currentTarget: Input }) => {
    const { name, value } = Input;
    const { data } = this.state;
    data[name] = value;
    await this.setState({ data })
    await this.formApi.setValues(data);
    let data1 = this.formApi.getState().values;
    console.log(data1)
  }

  onSubmit = () => {
    // const { isEditForm } = this.state;
    let data = this.formApi.getState().values;
    console.log(data)
  }




  render() {
    const { formType } = this.props;
    const breadCrumbItems = {
      title: formType + " Categories",
      items: [
        { name: "Home", link: "/dashboard" },
        { name: "Catagories", link: "/catalog/categories" },
        { name: `${formType} Catagories `, active: true },
      ]
    };
    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <Row>

          <Form className="col-12" getApi={this.setFormApi} onSubmit={this.onSubmit}>
            {({ formApi, formState }) => (

              <div>
                {JSON.stringify(formState)}
                <Row className="form-div">
                  <Col md={3} sm={12} >
                    <FormGroup>
                      <Label for="email">Category Name</Label>
                      <Input type="text" field="categoryName" validate={e => this.validateProperty('categoryName', e)} validateonblur onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                  <Col md={3} sm={12} >
                    <FormGroup>
                      <Label for="email">Category Image</Label>
                      <Input type="file" className="form-control" accept="image/*" field="categoryImage" validateOnBlur validate={e => this.validateProperty('categoryImage', e)} onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                  <Col md={3} sm={12} >
                    <FormGroup>
                      <Label for="email">Status</Label>
                      <select type="text" className="form-control" field="categoryStatus" validateOnBlur validate={e => this.validateProperty('categoryStatus', e)} onChange={this.handleChange}   >
                        <option value="N">Active</option>
                        <option value="N">InActive</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-warning btn-sm mr-3" id="cancelbtn">Cancel</button>
                  <button type="submit" className="btn btn-primary btn-sm" >Submit</button>
                </div>
              </div>

            )}
          </Form>
        </Row>
      </Fragment>
    )
  }
}


export default AddCatagory;