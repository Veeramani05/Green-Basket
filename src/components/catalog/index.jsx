import React, { PureComponent, Fragment } from 'react'


import CatagoryList from 'components/catalog/CatagoryList';
import ProductList from 'components/catalog/ProductList';
import OfferList from 'components/catalog/OfferList';

class Catalog extends PureComponent {


  frameLoad = () => {
    const { match: { params: { pageName } } } = this.props;
    switch (pageName) {
      case 'categories':
        return <CatagoryList />
      case 'products':
        return <ProductList />
      case 'offers':
        return <OfferList />
      default:
        return;
    }
  }

  render() {
    return (
      <Fragment>
        {this.frameLoad()}
      </Fragment>
    )
  }

}

export default Catalog;