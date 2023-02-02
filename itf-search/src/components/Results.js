import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import '../App.css';

// import components
import SearchBar from './SearchBar';
import ResultsRenderer from './ResultsRenderer';
import Navbar from './Navbar';

const sampleData = require('../sample-data.json');
const { users, content } = sampleData;
const searchResult = users.concat(content);
console.log(searchResult);




const Results = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    
    // shuffle function to make sample data appera more natural
    const shuffleArray = (arr) => {
        const newArray = arr.sort(() => Math.random() - 0.5);
        return newArray;
    }

    const searchResults = shuffleArray(searchResult);

    const results = searchResults.map((result, id) => {
        return <ResultsRenderer key={id} result={result} />;
    });

    return(
        <div className='container results'>
            <header>
                <div className="header-anchor">
                    <SearchBar />
                </div>
                <Navbar searchParams={searchParams} />
            </header>
            <main className="container">
                {results}
            </main>
        </div>
    )
};

export default Results;