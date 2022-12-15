import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import '../App.css';

// import components
import SearchBar from './SearchBar';
import ResultsRenderer from './ResultsRenderer';

const sampleData = require('../sample-data.json');
const { users, content } = sampleData;

const Results = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    let results;
    if (content.length > 0 && location.pathname.includes('/people')) {
        console.log('Show people only');
        results = users.map(result => 
            <ResultsRenderer 
                key={result.id}
                handle={result.handle}
                alias={result.alias}
                bio={result.bio}
                website={result.bio}
                stat={result.stat}
            />
        )
    } else if (content.length > 0) {
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
                <div className="header-anchor">
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