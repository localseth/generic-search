import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../App.css';

// import components
import SearchBar from './SearchBar';
import ResultsRenderer from './ResultsRenderer';

const sampleData = require('../sample-data.json');
const { users, content } = sampleData;

const Results = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(users);
    let results;
    if (content.length > 0) {
       results = content.map(result =>
       <ResultsRenderer
        key={result.id}
        type={result.type} 
        datePublished={result.datePublished}
        dateUpdate={result.dateUpdated}
        thumbnail={result.thumbnail}
        author={result.author}
        title={result.title}
        link={result.link}
        bodyText={result.bodyText}
        />) 
    }

    return(
        <div className='results'>
            <header>
                <div className='item searchbar'>
                    <h2>Open Network Search</h2>
                    <SearchBar />
                </div>
            </header>
            <ul className="container">
                {results}
            </ul>
        </div>
    )
};

export default Results;