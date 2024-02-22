import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, useParams } from 'react-router-dom';
import '../App.css';

// import components
import SearchBar from './SearchBar';
import ResultsRenderer from './ResultsRenderer';
import Navbar from './Navbar';

const sampleData = require('../sample-data.json');
const { users, content } = sampleData;
const searchResult = users.concat(content);
// console.log(searchResult);




const Results = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const { type } = useParams();
    
    // shuffle function to make sample data appera more natural
    
    const shuffleArray = (arr) => {
        const newArray = arr.sort(() => Math.random() - 0.5);
        return newArray;
    }

    const filterArray = (arr) => {
        console.log(type);
        // console.log(arr);
        if (location.pathname === '/search') {
            return arr
        } else {
            return arr.filter(item => item.type === typeDecoder(type));
        }
    }

    const typeDecoder = (str) => {
        switch (str) {
            case 'videos':
                return 'video';
                break;
            case 'articles':
                return 'article';
                break;
            case 'people':
                return 'user';
                break;
            case 'users':
                return 'user';
                break;
            default:
                return str;
        }
    }

    const searchResults = shuffleArray(filterArray(searchResult));

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