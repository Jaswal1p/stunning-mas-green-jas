import React, { useState } from 'react';

import Auth from '../utils/auth';

import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../utils/mutations';

import { useMutation } from '@apollo/client';

const SignupForm = () => {
    const [addUser, {error}] = useMutation76(ADD_USER);
    const [userFormData, setUserFormData] = useState({ username:'', email:'', password:''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleInputChagne = (event) => {
        const {name, value} = event.target;
        setUserFormData({...userFormData, [name]: value});
    };
    const handleFormSubmit = async (event) =>{
        event.preventDefault();   
    }
    try {
        const { data} = await addUser({
            variables:{...userFormData}
        });
        Auth.login(data.addUser.Token);
    } catch (e){
        console.error(e);
        setShowAlert(true);
    }
    setUserFormData({
        username: '',
        email: '',
        password:'',
    });
};

return (
    <>
    {}
    <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
        <Form.Group>
            <Form htmlFor='username'>Username</Form>
            <Form.Control
            type='text'
            placeholder='username'
            onChange={hangleInputChange}
            value={userFormData.username}
            required />
        <Form.Control.Feedback type='invalid'>Username is required</Form.Control.Feedback>
        </Form.Group>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChagne}
            value={userFormData.email}
            required />
        <Form.Group>
            <Form.Control.Feedback type='invalid'>Email is required</Form.Control.Feedback>
        </Form.Group>
    </>
)