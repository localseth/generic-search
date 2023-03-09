import React, { useState, useEffect, useRef }from 'react';
import { useNavigate, useLocation, useParams, useSearchParams, Link } from 'react-router-dom';
import '../App.css';

import Options from './Options';
import InputField from './InputField';

const SearchBar = () => {
    // set state
    const [submitting, setSubmitting] = useState(false);
    const [optionsHidden, setOptionsHidden] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    // const [searchQuery, setSearchQuery] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const textInput = useRef(null);

    useEffect( () => {
        textInput.current.focus();
    }, [])
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
            // console.log(searchParams.get('searchText'));
            // searchParams.forEach(item => console.log(item));
        }
    }

    // log value (for development only)
    const logValue = (e) => {
        console.log(e.target.dataset.key, e.target.value);
        const date1 = new Date(e.target.value)
        console.log(date1.toISOString());
    }

    // package date into range and set parameters
    const handleDate = (e) => {
        const key = e.target.dataset.key || null;
        const value = new Date(e.target.value);
        if (key) {
            searchParams.set(key, value.toISOString());
            console.log(searchParams.get(key));
        }
    }

    const selectedTags = tags => console.log(tags);

    // consider using React Mentions to style text inside the input element https://github.com/signavio/react-mentions

    return(
        <form className="container" autoComplete="off" onSubmit={handleSubmit}>
            <div className="item searchbar">
                <h2 className={location.pathname === '/' ? 'hidden' : ''}><Link to='/' className='no-style'>Open Network Search</Link></h2>
                <InputField
                    searchParams={searchParams}
                    handleChange={handleChange}
                    textInput={textInput}
                    selectedTags={selectedTags}
                />
                <button type="submit" id="search-btn" htmlFor="search-box" className="search-btn">Search</button>
            </div>
                <button type="button" id="options-btn" className="options-btn" name="options-btn" onClick={toggleHidden}>{optionsHidden ? 'Show' : 'Hide'} search options</button>
            <Options 
                location={location}
                handleChange={handleChange}
                handleDate={handleDate}
                optionsHidden={optionsHidden}
                searchParams={searchParams}
            />    
        </form>
    )
};

export default SearchBar;