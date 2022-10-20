import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousale from '../Brand/BrandCarousale';
import { AuthContext } from '../context/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const RightSidebar = () => {
    const {googleSignIn} = useContext(AuthContext);

    // Google Sign In 
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleSignIn(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogle} variant="outline-primary" className='mb-3 rounded'><FaGoogle /> Sign In with Google</Button>
                <Button variant="outline-secondary" className='mb-3 rounded'><FaGithub /> Sign In with GitHub</Button>
            </ButtonGroup>
            <ListGroup>
                <ListGroup.Item className='mb-3 rounded border'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-3 rounded border'><FaYoutube /> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-3 rounded border'><FaTwitter /> Twitter</ListGroup.Item>
            </ListGroup>
            <BrandCarousale></BrandCarousale>
        </div>
    );
};

export default RightSidebar;