import React from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { Tabs, Tab } from 'react-bootstrap';

function UserGreeting(props) {
  return <h2>Welcome back!</h2>;
}

function GuestGreeting(props) {
  return <h2>Please login or sign up</h2>;
}

const GetUser = props => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <div>
        <UserGreeting />
      </div>
    );
  }
  return (
    <>
      <div>
        <GuestGreeting />
      </div>
      <div>
        <Tabs defaultActiveKey="login" id="uncontrolled-tab">
          <Tab eventKey="login" title="Login">
            <SignIn />
          </Tab>
          <Tab eventKey="signUp" title="Sign Up">
            <SignUp />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default GetUser;
