import React, { useState, SyntheticEvent } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import axios from '../../axios-orders';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

const Verify = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCode(event.target.value);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const data = {
      email,
      code
    };
    axios
      .post('/verify', data)
      .then(response => {
        Router.push('/login');
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <>
      <MDBContainer className="pb-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-1">Verify Code</p>
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
                    label="Code"
                    icon="lock"
                    group
                    type="text"
                    value={code}
                    onChange={handleCodeChange}
                    validate
                  />

                  <div className="text-center">
                    <MDBBtn color="cyan" type="submit">
                      Verify
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

export default Verify;
