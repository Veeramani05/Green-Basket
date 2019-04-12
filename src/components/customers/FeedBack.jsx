import React, { PureComponent, Fragment } from 'react';
import BreadCrumb from 'components/common/forms/BreadCrumb';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as InoIcons from 'react-icons/io';

import _ from 'lodash';
import { getFeedbacks } from 'service/customerService';

import 'styles/table.css';

const columns = [
  { dataField: 'id', text: 'S.No', formatter: sNoFormater },
  { dataField: 'userId', text: 'Name', sort: true },
  { dataField: 'ratings', text: 'Rating', sort: true, formatter: ratingFormater },
  { dataField: 'comments', text: 'Comments', sort: true },
  { dataField: 'actions', text: 'Actions', formatter: actionFormater },

];

class UserFeedBack extends PureComponent {
  state = {
    data: [],
    isTableLoading: true
  }


  componentDidMount = async () => {
    await this.getFeedbacks();
  }

  getFeedbacks = async () => {
    const res = await getFeedbacks();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ data: [], isTableLoading: false });
    await this.setState({ data, isTableLoading: false })
    console.info(data);

  }


  render() {
    const { isTableLoading, data } = this.state;
    const breadCrumbItems = {
      title: 'User FeedBack',
      items: [
        { name: 'Home', active: false, link: '/dashboard' },
        { name: 'User FeedBack', active: true },
      ]
    };

    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />

        {!isTableLoading &&
          <div className="table-responsive table-div">
            <BootstrapTable keyField='categoryID' data={data} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
          </div>}
      </Fragment>
    )
  }
}

export default UserFeedBack;

let i = 1;
function sNoFormater(cell, row, rowIndex, formatExtraData) {
  return i++;
}

function ratingFormater(cell, row, rowIndex, formatExtraData) {
  return _.fill(Array(cell)).map((v, i) => <InoIcons.IoIosStar />);
}


function actionFormater(cell, row, rowIndex, formatExtraData) {
  return <div className="actions">
    <InoIcons.IoMdTrash title="Delete" />
  </div>
}