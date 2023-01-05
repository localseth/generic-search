import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import '../App.css';

// import components
import SearchBar from './SearchBar';
import ResultsRenderer from './ResultsRenderer';

const sampleData = require('../sample-data.json');
const { users, content } = sampleData;
const searchResult = users.concat(content);
console.log(searchResult);

// shuffle function to make sample data appera more natural
function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}

shuffleArray(searchResult);

const Results = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    let results;

    results = searchResult.map((result, id) => <ResultsRenderer key={id} result={result} />)

    return(
        <div className='container results'>
            <header>
                <div className="header-anchor">
                    <SearchBar />
                </div>
            </header>
            <main className="container">
                {results}
            </main>
        </div>
    )
};

export default Results;