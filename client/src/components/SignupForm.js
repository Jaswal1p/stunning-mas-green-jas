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
    const handleFormsubmit = async (event) => {
        event.preventDefault();
    }
}