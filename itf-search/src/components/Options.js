import React, { useEffect } from 'react';

import Tip from './Tip';

const Options = (props) => {
    const { searchParams, location, handleChange, optionsHidden } = props;

    const showHideOptions = () => {
        const element = document.getElementById('options-box');
        console.log(element.classList)
        if (element.classList.value.includes('show')) {
            element.classList.remove('show');
        } else {
            element.classList.add('show');
        }
    }

    return(
        optionsHidden ?
        <></>
        :
        <div className="item options" id="options-box">
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
                        <h3>Filter & Sort</h3>
                        <div className="item sort">
                            <label htmlFor="sort">Sort by:
                                <select defaultValue={searchParams.get('sort')} onChange={handleChange} data-key="sort" id="sort" name="user-sort">
                                    <option value="" hidden>choose an option</option>
                                    <option value="recent">Recent</option>
                                    <option value="old">Old</option>
                                    <option value="popular">Popular</option>
                                    <option value="unpopular">Unpopular</option>
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
    )
};

export default Options;