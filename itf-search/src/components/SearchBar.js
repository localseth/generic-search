import React, { useState, useEffect }from 'react';
import { useNavigate, useLocation, useParams, useSearchParams, Link } from 'react-router-dom';
import '../App.css';

import Options from './Options';

const SearchBar = () => {
    // set state
    const [submitting, setSubmitting] = useState(false);
    const [optionsHidden, setOptionsHidden] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    // const [searchQuery, setSearchQuery] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => console.log(searchParams.get('searchText')));
    // useEffect(() => {
    //     if (searchParams.get('searchText')) {
    //         setSearchQuery()
    //     }
    // });

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?${searchParams.toString()}`)

    };

    

    const toggleHidden = () => {
        optionsHidden ? setOptionsHidden(false) : setOptionsHidden(true);
    }

    // update search query state
    const handleChange = (e) => {
        const key = e.target.dataset.key || null;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        console.log(e.target.checked);
        // console.log(key, value);
        if (key) {
            searchParams.set(key, value);
            console.log(searchParams.get('searchText'));
            // searchParams.forEach(item => console.log(item));
        }
    }

    // consider using React Mentions to style text inside the input element https://github.com/signavio/react-mentions

    return(
        <form className="container" autoComplete="off" onSubmit={handleSubmit}>
            <div className="item searchbar">
                <h2 className={location.pathname === '/' ? 'hidden' : ''}><Link to='/' className='no-style'>Open Network Search</Link></h2>
                <input defaultValue={searchParams.get('searchText') || ''} onChange={handleChange} data-key="searchText" type="text" id="search-box" name="search" placeholder="Enter search terms here..."></input>
                <button type="submit" id="search-btn" htmlFor="search-box" className="search-btn">Search</button>
            </div>
                <button type="button" id="options-btn" className="options-btn" name="options-btn" onClick={toggleHidden}>{optionsHidden ? 'Show' : 'Hide'} search options</button>
            <Options 
                location={location}
                handleChange={handleChange}
                optionsHidden={optionsHidden}
                searchParams={searchParams}
            />    
        </form>
    )
};

export default SearchBar;