import React, { PureComponent, Fragment } from 'react'

import Login from 'auth/Login';
import SignUp from 'auth/SignUp';

class Auth extends PureComponent {


  frameLoad = () => {
    const { pageName } = this.props;
    switch (pageName) {
      case 'login':
        return <Login />
      case 'signUp':
        return <SignUp />
      default:
        return <Login />;
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






export default Auth;