import React, { PureComponent, Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import * as InoIcons from 'react-icons/io'
import BreadCrumb from 'components/common/forms/BreadCrumb';

import { getAllProducts } from 'service/catalogService'


import img from 'images/1.svg';

const columns = [
  { dataField: 'categoryId', text: 'Catagory Name', sort: true },
  { dataField: 'productName', text: 'Product Name', sort: true },
  { dataField: 'image', text: 'Image', formatter: imageFormater },
  { dataField: 'description', text: 'Description', sort: true },
  { dataField: 'quantity', text: 'Quantity', sort: true },
  { dataField: 'product_uom', text: 'UoM', sort: true },
  { dataField: 'mrp', text: 'MRP(Rs)', sort: true },
  { dataField: 'sellingPrice', text: 'Selling Price(Rs)', sort: true },
  { dataField: 'productStatus', text: 'Status', sort: true },
  { dataField: 'actions', text: 'Actions', formatter: actionFormater },
];

class CatalogList extends PureComponent {

  state = {
    data: [],
    isTableLoading: true
  }

  componentDidMount = async () => {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const res = await getAllProducts();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ data: [], isTableLoading: false });
    await this.setState({ data, isTableLoading: false })
    console.info(data);
  }

  render() {
    const breadCrumbItems = {
      title: "Products",
      items: [
        { name: "Home", active: false, link: "/dashboard" },
        { name: "Products", active: true },
      ]
    };
    const { data, isTableLoading } = this.state;
    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <div className="d-flex justify-content-end">
          <Link to="/catalog/product/add">
            <Button size={'sm'} color="primary">
              Add Product
            </Button>
          </Link>
        </div>
        <div className="clearfix"> </div>
        {!isTableLoading &&
          <div className="table-responsive table-div">
            <BootstrapTable keyField='categoryId' data={data} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
          </div>}

      </Fragment>
    )
  }
}

export default CatalogList;


function imageFormater(cell = img, row, rowIndex, formatExtraData) { 
  return <img className="img-thumbnail" src={cell} alt="Hello" />
}


function actionFormater(cell, row, rowIndex, formatExtraData) {
  return <div className="actions">
    <InoIcons.IoIosEye title="View" />
    <InoIcons.IoMdCreate title="Edit" />
    <InoIcons.IoMdTrash title="Delete" />
  </div>
}



