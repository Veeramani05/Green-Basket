import React, { PureComponent, Fragment } from 'react';
import { Container, Col, Row } from 'reactstrap';

import Routes from 'components/common/Routes';

import SideNav from 'components/common/forms/SideNav';


class Wrapper extends PureComponent {
  render() {
    return (
      <Fragment>
        <Container fluid >
          <Row>
            <Col md={2} sm={12} className="p-0">
              <SideNav />
            </Col>
            <Col className="content" md={10} sm={12} >
              <Routes />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Wrapper;