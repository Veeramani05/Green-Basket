import React, { PureComponent, Fragment } from 'react';
import BreadCrumb from 'components/common/forms/BreadCrumb';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { getUserDetails } from 'service/customerService';

import 'styles/table.css';


const columns = [
  { dataField: 'sno', text: 'S.No', formatter: sNoFormater},
  { dataField: 'userId', text: 'User Id', sort: true },
  { dataField: 'userName', text: 'Name', sort: true },
  { dataField: 'email', text: 'Email', sort: true },
  { dataField: 'phone', text: 'Phone No', sort: true },
];

class UserDetails extends PureComponent {
  state = {
    data: [],
    isTableLoading: true
  }

  componentDidCatch = async () => {

  }

  componentDidMount = async () => {
    await this.getUserDetails();
  }

  getUserDetails = async () => {
    const res = await getUserDetails();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ data: [], isTableLoading: false });
    await this.setState({ data, isTableLoading: false })
    console.info(data);

  }


  render() {
    const { isTableLoading, data } = this.state;
    const breadCrumbItems = {
      title: 'User Details',
      items: [
        { name: 'Home', active: false, link: '/dashboard' },
        { name: 'User Details', active: true },
      ]
    };

    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />

        {!isTableLoading &&
          <div className="table-responsive table-div">
            <BootstrapTable keyField='userId' data={data} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
          </div>}
      </Fragment>
    )
  }
}

export default UserDetails;

let i = 1;
function sNoFormater(cell, row, rowIndex, formatExtraData) {
  return i++;
}