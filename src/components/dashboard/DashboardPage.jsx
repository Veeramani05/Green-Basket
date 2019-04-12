import React, { PureComponent, Fragment } from 'react'
import BreadCrumb from 'components/common/forms/BreadCrumb';
import { Row, Col } from 'reactstrap';
import * as IonIcons from 'react-icons/io';  

import DashBox from 'components/common/forms/DashBox';

import 'styles/style.css';

class Dashboard extends PureComponent {
 
  render() {
    const breadCrumbItems = {
      title: 'Dashboard',
      items: [
        { name: 'Home', active: false, link: '/' },
        { name: 'Dashboard', active: true },
      ]
    };

    return (
      <Fragment>
        <BreadCrumb data={breadCrumbItems} />
        <Row>
          <Col md={4} sm={12}>
            <DashBox bgClass="fst-div" topic="Stock Total" value="$150000" status="Increased by 60%" icon={<IonIcons.IoMdCube />} />
          </Col>
          <Col md={4} sm={12}>
            <DashBox bgClass="snd-div" topic="Total Profit" value="$250000" status="Increased by 30%" icon={<IonIcons.IoMdAnalytics />} />
          </Col>
          <Col md={4} sm={12}>
            <DashBox bgClass="trd-div" topic="Unique Visiters" value="150000" status="Increased by  32%" icon={<IonIcons.IoIosFlag />} />
          </Col>
        </Row>
        <Row>
          <Col md={8} sm={12}>
             
          </Col>
          <Col md={4} sm={12}>
            <div className="summary p-3">
              <h6>Summary<i>(30 days)</i></h6>
              <p className="tqty">Total Quantity <span>10000 Kg</span></p>
              <p className="trvnu">Total Revenue <span>$52,648</span></p>
              <p className="tcst">Total Cost <span>$24,754</span></p>
              <p className="tpft">Total Profit <span>$25,546</span></p>
            </div>
            <div className="rating p-3">
              <h6>Customer Rating</h6>
              <p className="tqty m-0">
                <IonIcons.IoIosStar />
                <IonIcons.IoIosStar />
                <IonIcons.IoIosStar />
                <IonIcons.IoIosStarHalf />
                <IonIcons.IoIosStarOutline />
                <span>(15,436)</span></p>
            </div>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Dashboard;

