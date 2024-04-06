import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, useParams } from 'react-router-dom';
import '../App.css';

// import components
import SearchBar from './SearchBar.js';
import SingleResultRenderer from './SingleResultRenderer';
import Navbar from './Navbar.js';

// get sample data
const sampleData = require('../sample-data.json');
const { users, content } = sampleData;
const searchResult = users.concat(content);

const SingleResult = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const { id } = useParams();

    const single = searchResult.find( item => item.id === id);
    console.log('single: ', single);

    return(
        <div className='container results single-result'>
            <header>
                <div className="header-anchor">
                    <SearchBar />
                </div>
            </header>
            <main className="container">
                <SingleResultRenderer key={id} result={single} />
            </main>
        </div>
    )
}

export default SingleResult;