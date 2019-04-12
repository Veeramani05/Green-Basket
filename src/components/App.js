import React, { Component, Fragment } from 'react';

import Wrapper from 'components/Wrapper';

import Header from 'components/common/forms/Header';
import Auth from '../auth';



class App extends Component {

  componentDidMount = async () => {
    console.log(this.props)
  }


  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper />

        <Auth pageName="login" />
      </Fragment>
    );
  }
}

export default App;
