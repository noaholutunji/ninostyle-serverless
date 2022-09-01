import React, { useState, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import cookie from 'js-cookie';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

const Register = (props: {
  userRegisterRequest: (arg0: { email: string; password: string }) => void;
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const data = {
      email,
      password
    };
    try {
      await props.userRegisterRequest(data);
      Router.push('/verify');
    } catch (error) {
      console.log(error);
    }
  };

  if (cookie.get('jwtToken')) {
    Router.push('/products');
  }

  return (
    <>
      <MDBContainer>
        <MDBRow className="justify-content-center mt-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-1">Sign Up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Email Address"
                      icon="envelope"
                      group
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Password"
                      icon="lock"
                      group
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="cyan" type="submit">
                      Sign Up
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

Register.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired
};

export default Register;
