import React, { PureComponent, Fragment } from 'react'
 
import ContactList from 'components/contact/ContactList';
import AddContact from 'components/contact/forms';


class Contact extends PureComponent {


  frameLoad = () => {
    const { match: { params: { pageName } } } = this.props;
    switch (pageName) {
      case 'list':
        return <ContactList />
      case 'form':
        return <AddContact />
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

export default Contact;