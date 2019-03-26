import React, { Component } from "react";
import {Link} from 'react-router';
import { firebaseApp } from "../firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message:''
      }
    };
  }

  signIn() {
    console.log("this state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log("error", error);
        this.setState({error})
      });
  }
  render() {
    return (
      <div className="form-inline" style={{margin:'5%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            styel={{marginRight:'5px'}}
            className="form-control"
            type="text"
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            styel={{marginRight:'5px'}}
            className="form-control"
            type="password"
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/SignUp'}>sign up instead</Link></div>
      </div>
    );
  }
}

export default SignIn;
