import React, { PureComponent, Fragment } from 'react';
import BreadCrumb from 'components/common/forms/BreadCrumb';

import { Row, Col } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import Filter from 'components/common/forms/Filter';

import { getAllOrders } from 'service/ordersService'

import 'styles/table.css';


const columns = [
  { dataField: 'orderId', text: 'Order Id', sort: true },
  { dataField: 'productName', text: 'Product Name', sort: true },
  { dataField: 'quantity', text: 'Quantity', sort: true },
  { dataField: 'noOfOrder', text: 'No of Order', sort: true },
  { dataField: 'address', text: 'Delivery Address', sort: true },
  { dataField: 'preferedDeliveryTime', text: 'Prefered Delivery Time', sort: true },
  { dataField: 'netAmount', text: 'Amount(Rs)', sort: true },
  { dataField: 'deliveryStatus', text: 'Status', sort: true },
];

class OrderList extends PureComponent {

  state = {
    data: [],
    isTableLoading: true
  }

  componentDidMount = async () => {
    this.getOrederDetails();
  }

  getOrederDetails = async () => {
    const res = await getAllOrders();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ data: [], isTableLoading: false })
    await this.setState({ data, isTableLoading: false })
    console.info(data);
  }
 
  render() {
    const { isTableLoading, data } = this.state
    const breadCrumbItems = {
      title: 'Order List',
      items: [
        { name: 'Home', active: false, link: '/dashboard' },
        { name: 'Order List', active: true },
      ]
    };

    const statusOptions = ["Pending", "In Progress", "Delivered"];
    const options = ["All time", "Last 24h", "Past Week", "Past Month", "Past Year"];

    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <Row>
          <Col>
            <div className="filters">
              <Filter options={statusOptions} checkBox title="Status" />
              <Filter options={options} title="All time" />
            </div>
          </Col>
        </Row>
        <br></br>
        {
          !isTableLoading && <Row>
            <Col>
              <div className="table-responsive table-div">
                <BootstrapTable keyField='orderId' data={data} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
              </div>
            </Col>
          </Row>
        }

      </Fragment>
    )
  }
}

export default OrderList;