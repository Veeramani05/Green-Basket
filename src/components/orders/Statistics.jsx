import React, { PureComponent, Fragment } from 'react';
import BreadCrumb from 'components/common/forms/BreadCrumb';
import { Row, Col } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as IonIcons from 'react-icons/io';

import Filter from 'components/common/forms/Filter';
import DashBox from 'components/common/forms/DashBox';

import 'styles/table.css';

const products = [
  { id: 1, name: 'Oil', quantity: 2, noOrder: 4, deliveryAddress: 'Adyar Ananda Bhavan (A2B), Hosur, Tamil Nadu, India', PDT: '01/04/2019', amount: 230, status: 'Packed' },
  { id: 2, name: 'Oil', quantity: 2, noOrder: 4, deliveryAddress: 'Adyar Ananda Bhavan (A2B), Hosur, Tamil Nadu, India', PDT: '01/04/2019', amount: 230, status: 'Packed' },
];
const columns = [
  { dataField: 'name', text: 'Product Name', sort: true },
  { dataField: 'quantity', text: 'Quantity', sort: true },
  { dataField: 'noOrder', text: 'No of Order', sort: true },
  { dataField: 'deliveryAddress', text: 'Delivery Address', sort: true },
  { dataField: 'PDT', text: 'Prefered Delivery Time', sort: true },
  { dataField: 'amount', text: 'Amount(Rs)', sort: true },
  { dataField: 'status', text: 'Status', sort: true },
];

class Statistics extends PureComponent {

  render() {
    const breadCrumbItems = {
      title: 'Order Statistics',
      items: [
        { name: 'Home', active: false, link: '/dashboard' },
        { name: 'Order Statistics', active: true },
      ]
    };

    const options = ["All time", "Last 24h", "Past Week", "Past Month", "Past Year"];

    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <Row>
          <Col>
            <div className="filters">
              <Filter options={options} title="All time" />
            </div>
          </Col>
        </Row>
        <div className="clearfix"></div>
        <Row>
          <Col md={4} sm={12}>
            <DashBox bgClass="fst-div" topic="Completed" value="500" status="Increased by 60%" icon={<IonIcons.IoMdDoneAll />} />
          </Col>
          <Col md={4} sm={12}>
            <DashBox bgClass="snd-div" topic="In-Process" value="50000" status="Increased by 30%" icon={<IonIcons.IoIosTime />} />
          </Col>
          <Col md={4} sm={12}>
            <DashBox bgClass="trd-div" topic="Cancelled" value="150000" status="Decreased by 50%" icon={<IonIcons.IoIosCloseCircleOutline />} />
          </Col>
        </Row>
        <div className="clearfix"></div>
        <Row>
          <Col>
            <h6>Top Selling Products</h6>
            <div className="table-responsive table-div">
              <BootstrapTable keyField='id' data={products} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
            </div>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Statistics;