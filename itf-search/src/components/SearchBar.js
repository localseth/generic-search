import React, { useState, useEffect }from 'react';
import { useNavigate, useLocation, useParams, useSearchParams, Link } from 'react-router-dom';
import '../App.css';

import Tip from './Tip';

const SearchBar = () => {
    // set state
    const [submitting, setSubmitting] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => console.log(searchParams.get('searchText')));

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?${searchParams.toString()}`)

    };

    const showHideOptions = () => {
        const element = document.getElementById('options-box');
        console.log(element.classList)
        if (element.classList.value.includes('show')) {
            element.classList.remove('show');
        } else {
            element.classList.add('show')
        }
    }
    // update search query state
    const handleChange = (e) => {
        const key = e.target.dataset.key || null;
        const value = e.target.value;
        console.log(key, value);
        if (key) {
            searchParams.set(key, value);
            searchParams.forEach(item => console.log(item));
        }
    }

    // update searchParams
    // const updateSearchParams = () => {
    //     searchParams.forEach();
    // }

    return(
        <form className="container" autoComplete="off" onSubmit={handleSubmit}>
            <div className="item searchbar">
                <h2 className={location.pathname === '/' ? 'hidden' : ''}><Link to='/' className='no-style'>Open Network Search</Link></h2>
                <input onChange={handleChange} data-key="searchText" type="text" id="search-box" name="search" placeholder="Enter search terms here..."></input>
                <button type="submit" id="search-btn" htmlFor="search-box" className="search-btn">Search</button>
            </div>
                <button type="button" id="options-btn" className="options-btn" name="options-btn" onClick={showHideOptions}>Show search options</button>
            <div className="item options hidden-options" id="options-box">
                <div className="column">
                    <div className="item date-range border">
                        <h3 className="item">Date Range</h3>
                        <div className="item">
                            <label htmlFor="date-from">From:</label>
                            <input type="date" id="date-from" name="date-from" />
                        </div>
                        <div className="item">
                            <label htmlFor="date-to">To:</label>
                            <input type="date" id="date-to" name="date-to" />
                        </div>
                    </div>
                    <div className="item column border">
                        <div className="item sort">
                            <label htmlFor="sort">Sort by:
                                <select onChange={handleChange} data-key="sort" id="sort" name="user-sort">
                                    <option value="" hidden>choose an option</option>
                                    <option value="recent">Recent</option>
                                    <option value="popular">Old</option>
                                    <option value="option 3">Popular</option>
                                    <option value="option 4">Unpopular</option>
                                </select>
                            </label>
                        </div>
                        <div className="item">
                            <label htmlFor="regex" className="form-control">
                                <input onChange={handleChange} data-key="premium" type="checkbox" id="regex" name="user-regex" />
                                Premium content only
                            </label>
                        </div>
                    </div>
                </div>
               
               <Tip location={location}/>
               
            </div>
        </form>
    )
};

export default SearchBar;