import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    // Navigate to other page
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState('');
    const { loginWithEmail, setLoading } = useContext(AuthContext);

    const handlelogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                setError('')
                if(user.emailVerified) {
                    navigate(from, { replace: true });
                } else {
                    toast.warning('Please Verify your email', {autoClose: 1000})
                }
            })
            .catch((error) => {
                console.error('error', error);
                setError(error.message);
            })
            .finally (() => {
                setLoading(false);
            })
    }
    return (
        <Form onSubmit={handlelogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Your Password" />
            </Form.Group>
            {
                error && <p className='text-danger'>{error}</p>
            }
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Login;