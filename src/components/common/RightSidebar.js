import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousale from '../Brand/BrandCarousale';

const RightSidebar = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary" className='mb-3 rounded'><FaGoogle /> Sign In with Google</Button>
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