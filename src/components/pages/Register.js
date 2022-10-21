import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { registrationWithEmail, updateName, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirm = form.confirm.value;


        // console.log(name, email, photoURL, password, confirm);

        if (password.length < 6 && password.length < 6) {
            setError("Your password should be 6 digits");
        }
        if (password !== confirm) {
            setError("Your Password didn't match")
        }

        registrationWithEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                handleNameAndUrl(name, photoURL);
                verifyYourEmail();
                toast.success('A verify Message is sent to your email', {
                    autoClose: 500,
                  })
            })
            .catch((error) => {
                console.error('error', error);
                setError(error.message);
            })
    }

    // Handle update name and PhotoUrl
    const handleNameAndUrl = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateName(profile)
        .then(() => {})
        .catch((error) => {});
    }

    // Handle checked event
    const [btnChecked, setBtnChecked] = useState(false);
    const handleAccepeted = event => {
        setBtnChecked(event.target.checked);
    }

    // Varification Email
    const verifyYourEmail = () => {
        verifyEmail()
        .then(() => {});
    }
    return (
        <div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Your Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirm" type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleAccepeted}
                        label={<p>Accept <Link to='/login'>Terms and Conditions</Link></p>} />
                </Form.Group>
                {
                    error && <p className='text-danger'>{error}</p>
                }
                <Button variant="primary" type="submit" disabled={!btnChecked}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;