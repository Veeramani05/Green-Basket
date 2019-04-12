import React, { PureComponent, Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BreadCrumb from 'components/common/forms/BreadCrumb';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as InoIcons from 'react-icons/io';


import { getContactList } from 'service/contactService';



const columns = [
  { dataField: 'id', text: 'S.No', formatter: sNoFormater },
  { dataField: 'email', text: 'Email', },
  { dataField: 'contactNo', text: 'Phone No', sort: true },
  { dataField: 'address1', text: 'Primary Address', sort: true },
  { dataField: 'address2', text: 'Secondary Address', sort: true },
  { dataField: 'facebook', text: 'Facebook', sort: true },
  { dataField: 'instagram', text: 'Instagram', sort: true },
  { dataField: 'twitter', text: 'Twitter', sort: true },
  { dataField: 'aboutus', text: 'About Us', sort: true },
  { dataField: 'terms', text: 'Terms', sort: true },
  { dataField: 'policy', text: 'Pilocy', sort: true },
  { dataField: 'status', text: 'Status' },
  { dataField: 'actions', text: 'Actions', formatter: actionFormater },
];

class ContactList extends PureComponent {
  state = {
    data: [],
    isTableLoading: true
  }


  componentDidMount = async () => {
    await this.getContactList();
  }

  getContactList = async () => {
    const res = await getContactList();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ data: [], isTableLoading: false });
    await this.setState({ data, isTableLoading: false })

  }


  render() {
    const { isTableLoading, data } = this.state;
    const breadCrumbItems = {
      title: "Contact List",
      items: [
        { name: "Home", active: false, link: "/dashboard" },
        { name: "Contact list", active: true },
      ]
    };

    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <div className="d-flex justify-content-end">
          <Link to="/contact/form">
            <Button size={'sm'} color="primary">
              Add Contact
            </Button>
          </Link>
        </div>

        <div className="clearfix"> </div>
        {
          !isTableLoading && <div className="table-responsive table-div">
            <BootstrapTable keyField='email' data={data} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
          </div>
        }

      </Fragment>
    )
  }
}

export default ContactList;
let i = 1;
function sNoFormater(cell, row, rowIndex, formatExtraData) {
  return i++;
}

function actionFormater(cell, row, rowIndex, formatExtraData) {
  return <div className="actions">
    <InoIcons.IoIosEye title="View" />
    <InoIcons.IoMdCreate title="Edit" />
    <InoIcons.IoMdTrash title="Delete" />
  </div>
}