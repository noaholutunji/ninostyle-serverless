import React, { useState, useEffect, SyntheticEvent } from 'react';
import axios from '../../../axios-orders';
import { useRouter } from 'next/router';
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

export const EditProduct = props => {
  const [name, setName] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBrand(event.target.value);
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(event.target.value);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setImage(event.target.value);
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setDescription(event.target.value);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/product/${id}`);
        setName(response.data.product.name);
        setBrand(response.data.product.brand);
        setPrice(response.data.product.price);
        setImage(response.data.product.image);
        setDescription(response.data.product.description);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const obj = {
      name: name,
      brand: brand,
      price: price,
      image: image,
      description: description
    };

    const token = cookie.get('jwtToken');
    await axios.patch(`/product/${id}`, obj, {
      headers: {
        Authorization: `${token}`
      }
    });
    Router.push(`/product/${id}`);
  };

  return (
    <>
      <MDBContainer>
        <MDBRow className="justify-content-center mt-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-1">Edit Product</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Name"
                      icon="user"
                      group
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Brand"
                      icon="mobile"
                      group
                      type="text"
                      value={brand}
                      onChange={handleBrandChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Price"
                      icon="tag"
                      group
                      type="number"
                      value={price}
                      onChange={handlePriceChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Image"
                      icon="image"
                      group
                      type="text"
                      value={image}
                      onChange={handleImageChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Description"
                      icon="pencil-alt"
                      group
                      type="text"
                      value={description}
                      onChange={handleDescriptionChange}
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="cyan" type="submit">
                      Edit Product
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

export default EditProduct;
