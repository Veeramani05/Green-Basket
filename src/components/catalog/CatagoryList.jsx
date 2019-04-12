import React, { PureComponent, Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BreadCrumb from 'components/common/forms/BreadCrumb';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as InoIcons from 'react-icons/io';

import { getCategories } from 'service/catalogService';




class CatagoryList extends PureComponent {

  state = {
    data: [],
    columns: [
      { dataField: 'categoryId', text: 'Category Id' },
      { dataField: 'categoryName', text: 'Catagory Name', sort: true },
      { dataField: 'categoryImage', text: 'Image', formatter: imageFormater },
      { dataField: 'categoryStatus', text: 'Status', sort: true },
      { dataField: 'actions', text: 'Actions', formatter: this.actionFormater },
    ],
    isTableLoading: true,
  }

  componentDidMount = async () => {
    await this.getCategories();
  }

  getCategories = async () => {
    const res = await getCategories();
    const { data: { statusCode, data } } = res;

    if (!statusCode)
      return this.setState({ data: [], isTableLoading: false });
    await this.setState({ data, isTableLoading: false })
    console.info(data);

  }


  actionFormater(cell, row, rowIndex, formatExtraData) {
    let links = []
    links.push(<InoIcons.IoIosEye title="View" />)
    links.push(<InoIcons.IoMdCreate title="Edit" onClick={() => this.actionSetting()} />)
    links.push(<InoIcons.IoMdTrash title="Delete" />)

    return <div className="actions">{links.concat(" ")}</div>
  }


  async actionSetting() {
    console.log("fgfgf")
  }



  editRow = async (data) => {
    console.log(data)
  }


  render() {
    const { isTableLoading, data, columns } = this.state;
    const breadCrumbItems = {
      title: "Categories",
      items: [
        { name: "Home", active: false, link: "/dashboard" },
        { name: "Categories", active: true },
      ]
    };

    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <div className="d-flex justify-content-end">
          <Link to="/catalog/catagory/add">
            <Button size={'sm'} color="primary">
              Add Category
            </Button>
          </Link>
        </div>
        <div className="clearfix"> </div>
        {
          !isTableLoading &&
          <div className="table-responsive table-div">
            <BootstrapTable keyField='categoryId' data={data} columns={columns} bootstrap4 pagination={paginationFactory()} striped hover condensed />
          </div>
        }

      </Fragment>
    )
  }
}

export default CatagoryList;

function imageFormater(cell, row, rowIndex, formatExtraData) {
  return <img className="img-thumbnail" src={cell} alt="Hello" />
}

