import React, { PureComponent, Fragment } from 'react'

import BannerList from 'components/banner/BannerList';
import BannerForms from 'components/banner/forms';

class Banner extends PureComponent {


  frameLoad = () => {
    const { match: { params: { pageName } } } = this.props; 
    switch (pageName) {
      case 'list':
        return <BannerList />
      case 'upload':
        return <BannerForms />
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

export default Banner;