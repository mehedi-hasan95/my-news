import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const {title, author, image_url, details} = news;
    return (
        <Card>
            <Card.Body className='text-start'>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <h4 className='my-4'>Writen by: {author?.name}</h4>
                <Card.Text>
                    {details}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default News;