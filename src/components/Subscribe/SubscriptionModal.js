import React, { Component } from 'react';
import update from 'react-addons-update';
import Axios from 'axios';

export default class SubscriptionModal extends Component {
  constructor() {
    super()

    this.state = {
      userInfo: {
        first: '',
        last: '',
        email: ''
      }
    }
  }

  handleChange() {
    let newState = update(this.state, {
      userInfo: {
        $merge: {
          [event.target.name] : event.target.value
        }
      }
    })

    this.setState(newState);
  }

  // handleSubmit(event){
  // event.preventDefault();

  //   axios('http://localhost:8000/users', {
  //     method: 'POST',
  //     body: JSON.stringify(this.state),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }).then(() => {
  //     browserHistory.push('/login');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

  // }//closes handleSubmit

  render() {
    return(
      <div id="subscription-modal">
        <div className="subscription-modal-content">
          <h2>Subscribe to our Newsletter</h2>
          <form onChange={this.handleChange.bind(this)}>
            <input type="text" name="first" placeholder="First Name" />
            <input type="text" name="last" placeholder="Last Name" />
            <input type="email" name="email" placeholder="E-mail" />
            <button type="submit">Sign Up</button>
          </form>
         </div>
      </div>
    )
  }

}
