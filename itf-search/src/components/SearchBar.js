import React, { useState }from 'react';
import '../App.css';

const SearchBar = () => {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form className="container" autocomplete="off" onSubmit={handleSubmit}>
            <div className="item searchbar">
                <input type="text" id="search-box" name="search" placeholder="Enter search terms here..."></input>
                <button type="submit" id="search-btn" for="search-box" className="search-btn">Search</button>
            </div>
                <button type="button" id="options-btn" className="options-btn" name="options-btn">Show search options</button>
            <div className="item options" id="options-box">
                {/* <div className="column">
                    <div className="item date-range border">
                        <h3 className="item">Date Range</h3>
                        <div className="item">
                            <label for="date-from">From:</label>
                            <input type="date" id="date-from" name="date-from"></input>
                        </div>
                        <div className="item">
                            <label for="date-to">To:</label>
                            <input type="date" id="date-to" name="date-to"></input>
                        </div>
                    </div>
                    <div className="item column border">
                        <div className="item sort">
                            <label for="sort">Sort by:</label>
                            <select id="sort" name="user-sort">
                                <option value="" hidden>choose an option</option>
                                <option value="recent">Recent</option>
                                <option value="popular">Old</option>
                                <option value="option 3">Popular</option>
                                <option value="option 4">Unpopular</option>
                            </select>
                        </div>
                        <div className="item">
                            <label for="regex" className="form-control">
                                <input type="checkbox" id="regex" name="user-regex">Premium content only</input>
                            </label>
                        </div>
                    </div>
                </div> */}
               
                <div className="tip">
                  <span>Tip</span>
                  <p>
                    To search for creators, use "@" before your search term. For tags, use "#"
                  </p>
                  <p className="example"><i>example: </i> <span className="creator">@Iancrossland</span> <span className="hashtag">&#35;music</span> <span className="hashtag">&#35;rock</span></p>
                </div>
            </div>
        </form>
    )
};

export default SearchBar;