import React, { PureComponent, Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BreadCrumb from 'components/common/forms/BreadCrumb';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as InoIcons from 'react-icons/io';

import Filter from 'components/common/forms/Filter';
import { getBanners } from 'service/bannerService';


const columns = [
  { dataField: 'id', text: 'S.No', formatter: sNoFormater },
  { dataField: 'imageId', text: 'Banner Id' },
  { dataField: 'imageURL', text: 'Banner', formatter: imageFormater },
  { dataField: 'imageDescription', text: 'Description' },
  { dataField: 'imageStatus', text: 'Status', sort: true },
  { dataField: 'actions', text: 'Actions', formatter: actionFormater },
];

class BannerList extends PureComponent {
  state = {
    data: [],
    isTableLoading: true
  }


  componentDidMount = async () => {
    await this.getBanners();
  }

  getBanners = async () => {
    const res = await getBanners();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ data: [], isTableLoading: false });
    await this.setState({ data, isTableLoading: false });
  }

  render() {
    const { isTableLoading, data } = this.state;
    const breadCrumbItems = {
      title: "Banner List",
      items: [
        { name: "Home", active: false, link: "/dashboard" },
        { name: "Banner list", active: true },
      ]
    };
    const statusOptions = ["Active", "In Active"];

    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <Row>
          <Col>
            <div className="filters">
              <Filter options={statusOptions} checkBox title="Status" />
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Link to="/banner/upload">
            <Button size={'sm'} color="primary">
              Upload Banner
            </Button>
          </Link>
        </div>

        <div className="clearfix"> </div>
        {
          !isTableLoading && <div className="table-responsive table-div">
            <BootstrapTable keyField='imageId' data={data} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
          </div>
        }

      </Fragment>
    )
  }
}

export default BannerList;

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