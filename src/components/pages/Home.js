import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsPrevies from '../common/NewsPrevies';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>Home</h2>
            {
                news.map(n => <NewsPrevies key={n._id} newses={n}></NewsPrevies>)
            }
        </div>
    );
};

export default Home;