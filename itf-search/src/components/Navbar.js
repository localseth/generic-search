import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const { searchParams } = props;

    return(
        <nav>
            <ul className='nav'>
                <li><NavLink end to={`/search?${searchParams.toString()}`}>All</NavLink></li>
                <li><NavLink to={`/search/people?${searchParams.toString()}`}>People</NavLink></li>
                <li><NavLink to={`/search/articles?${searchParams.toString()}`}>Articles</NavLink></li>
                <li><NavLink to={`/search/videos?${searchParams.toString()}`}>Videos</NavLink></li>
                <li><NavLink to={`/search/audio?${searchParams.toString()}`}>Audio</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;