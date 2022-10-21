import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsPrevies = ({ newses }) => {
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
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body className='text-start'>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
                            :
                            <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <span><FaStar className='text-warning' /> {rating.number}</span>
                <h5><FaEye /> {total_view}</h5>
            </Card.Footer>
        </Card>
    );
};

export default NewsPrevies;