import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsPrevies = ({ newses }) => {
    console.log(newses);
    const { author, details, image_url, rating, title, total_view, _id } = newses;
    return (
        <Card className='mb-4'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Image roundedCircle className='me-2' src={author?.img} style={{ height: '60px' }}>
                    </Image>
                    <div>
                        <h4 className='mb-0'>{author.name}</h4>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark  />
                    <FaShareAlt  />
                </div>
            </Card.Header>
            <Card.Body className='text-start'>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                        <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NewsPrevies;