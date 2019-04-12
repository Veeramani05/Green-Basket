import React, { PureComponent, Fragment } from 'react';

class DashBox extends PureComponent {
  render() {
    const { bgClass, topic, value, status, icon } = this.props;
    return (
      <Fragment>
        <div className={bgClass}>
          {icon}
          <p className="sml-title">{topic}</p>
          <p className="price">{value}</p>
          <p className="percent">{status} </p>
        </div>
      </Fragment>
    )
  }
}

export default DashBox;