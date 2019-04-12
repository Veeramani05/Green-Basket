
import React, { PureComponent, Fragment } from 'react';

import UserDetails from 'components/customers/UserDetails';
import UserFeedBack from 'components/customers/FeedBack';

class Customers extends PureComponent {

  frameLoad = () => {
    const { match: { params: { pageName } } } = this.props;
    switch (pageName) {
      case "details":
        return <UserDetails />
      case 'feedback':
        return <UserFeedBack />
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

export default Customers;