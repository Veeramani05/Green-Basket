import React, { PureComponent, Fragment } from 'react';

import AddCatagory from 'components/catalog/forms/AddCatagory'
import AddProduct from 'components/catalog/forms/AddProduct';
import AddOffer from 'components/catalog/forms/AddOffer';

class CatalogForms extends PureComponent {


  frameLoad = () => { 
    const { match: { params: { formType, pageName } } } = this.props;

    switch (pageName) {
      case "catagory":
        return <AddCatagory formType={formType} />;
      case "product":
        return <AddProduct formType={formType} />;
      case "offers":
        return <AddOffer formType={formType} />;
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

export default CatalogForms;