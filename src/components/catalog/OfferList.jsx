import React, { PureComponent, Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from 'reactstrap';
import * as InoIcons from 'react-icons/io'
import { Link } from 'react-router-dom';
import BreadCrumb from 'components/common/forms/BreadCrumb';

import { getOfferList } from 'service/catalogService'; 

const columns = [
  { dataField: 'id', text: 'S.No', formatter: sNoFormater },
  { dataField: 'categoryID', text: 'Catagory Id', sort: true },
  { dataField: 'productName', text: 'Product Name', sort: true },
  { dataField: 'imageUrl', text: 'Image', formatter: imageFormater },
  { dataField: 'description', text: 'Description', sort: true },
  { dataField: 'productQty', text: 'Quantity', sort: true },
  { dataField: 'productUom', text: 'UoM', sort: true },
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
    await this.getOfferList();
  }

  getOfferList = async () => {
    const res = await getOfferList();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ data: [], isTableLoading: false });
    await this.setState({ data, isTableLoading: false })
    console.info(data);

  }


  render() {
    const { isTableLoading, data } = this.state;
    const breadCrumbItems = {
      title: "Offers",
      items: [
        { name: "Home", active: false, link: "/dashboard" },
        { name: "Offers", active: true },
      ]
    };
    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <div className="d-flex justify-content-end">
          <Link to="/catalog/offers/add">
            <Button size={'sm'} color="primary">
              Add Offer
            </Button>
          </Link>
        </div>
        <div className="clearfix"> </div>
        {!isTableLoading &&
          <div className="table-responsive table-div">
            <BootstrapTable keyField='categoryID' data={data} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
          </div>}

      </Fragment>
    )
  }
}

export default CatalogList;

let i = 1;
function sNoFormater(cell, row, rowIndex, formatExtraData) {
  return i++;
}

function imageFormater(cell, row, rowIndex, formatExtraData) {
  return <img className="img-thumbnail" src={cell} alt="Hello" />
}

function actionFormater(cell, row, rowIndex, formatExtraData) {
  return <div className="actions">
    <InoIcons.IoIosEye title="View" />
    <InoIcons.IoMdCreate title="Edit" />
    <InoIcons.IoMdTrash title="Delete" />
  </div>
}
