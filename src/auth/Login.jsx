import React, { PureComponent, Fragment } from 'react';
import { Link  } from 'react-router-dom';





class Login extends PureComponent {

  componentDidMount() { 
  }
  render() {
    return (
      <Fragment >
        <h1>Login</h1>
        <Link to="/" >Dashboard</Link>
      </Fragment>
    );
  }
}

export default Login;


