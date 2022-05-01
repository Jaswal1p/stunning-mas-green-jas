// initial declarations as we learned in the MERN stack lesson & in book-search assignment
import React, { useState } from 'react';
import Auth from '../utils/auth';

import { Form, Button, Alert } from 'react-bootstrap';

import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const LoginForm = () => {
      const [login, {error}] = useMutation(LOGIN_USER);
      const [userFormData, setUserFormData] = useState({ email: '', password: '' });

}