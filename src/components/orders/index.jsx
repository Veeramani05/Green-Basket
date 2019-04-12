
import React, { PureComponent, Fragment } from 'react';

import OrdersList from 'components/orders/OrderList'
import Statistics from 'components/orders/Statistics'

class Orders extends PureComponent {

  frameLoad = () => {
    const { match: { params: { pageName } } } = this.props;
    switch (pageName) {
      case "order-list":
        return <OrdersList />
      case 'order-statistics':
        return <Statistics />
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

export default Orders;