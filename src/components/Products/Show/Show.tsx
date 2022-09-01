import React, { useState, useEffect } from 'react';
import axios from '../../../axios-orders';
import { MDBCard, MDBRow } from 'mdbreact';
import Table from './Table/Table';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

export interface IUser {
  sub: string;
}

export interface IProduct {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  owner: string;
}

export type ShowProps = {
  id: string;
};

const Products = (props: any) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const authUser = cookie.get('user');

    if (authUser) {
      setUser(JSON.parse(authUser));
    }

    axios
      .get(`/product/${id}`)
      .then(response => {
        setProduct(response.data.product);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    // console.log(user.id);
    return (
      product && (
        <Table obj={product} userId={user ? user.sub : ''} key={product.id} />
      )
    );
  };

  return (
    <>
      <div className="mt-5 container">
        <MDBRow className="justify-content-center">
          <MDBCard
            className="m-2 mx-3 justify-content-center"
            style={{ width: '20rem' }}
            cascade
            ecommerce
          >
            {tabRow()}
          </MDBCard>
        </MDBRow>
      </div>
    </>
  );
};

export default Products;
