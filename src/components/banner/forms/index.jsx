import React, { PureComponent, Fragment } from 'react';

import AddBanner from 'components/banner/forms/AddBanner';

class BannerForms extends PureComponent {


  frameLoad = () => {
    return <AddBanner />
  }
  render() {
    return (
      <Fragment>
        {this.frameLoad()}
      </Fragment>
    )
  }
}

export default BannerForms;