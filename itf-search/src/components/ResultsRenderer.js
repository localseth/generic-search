import React, { useEffect, useState } from 'react';
import '../App.css';

const ResultsRenderer = (props) => {
    const { result } = props;
    // console.log('results renderer loaded', result.type);
    
    if (result.type !== "user") {
        return(
            <a href={"/search/single/" + result.id} className="wrapped-link no-style">
                <article className={`result-container ${result.type}`}>
                    <div className="featured-img">
                        <img src={result.thumbnail} alt="image of creator or content preview"></img>
                    </div>
                    <div className="search-result">
                        <h3>{result.title}</h3>
                        <div className='creator-container'>
                            <a href="#" className='timestamp'>{result.datePublished}</a>
                            <a className="no-decoration" href="#" title={`see more by author`}></a>
                            <div className="tooltip-container">
                                <a className="no-decoration" href="#"><span className="creator">{result.author}</span></a>
                                <div className="tooltip">
                                    <div className="mini-profile">
                                        <img className="user-img" src="/default-user.png" alt={result.author}></img>
                                        <p>User stats: 102%<br></br>Half-life: 0.65 millenia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="preview">{result.bodyText}</p>
                        <a href="#">{result.link}</a>
                    </div>
                </article>
            </a>
        )}
    else {
        return(
            <a href="#user-link-address-todo" className="wrapped-link no-style user">
                <article className="result-container user">
                    <div className="featured-img">
                        <img className="user-img large-profile-pic" src={result.thumbnail} alt={`${result.handle} profile picture`}></img>
                    </div>
                    <div className='search-result'>
                        <h3>{result.alias}</h3>
                        <a href="#">{result.website}</a>
                        <p>{result.bio}</p>
                        <p className="stats">ESG Score: <span>{result.stat}</span></p>
                        <div className="link-section">
                            <ul>
                                <li><a href="#">articles</a></li>
                                <li><a href="#">videos</a></li>
                                <li><a href="#">images</a></li>
                                <li><a href={result.website}>more...</a></li>
                            </ul>
                        </div>
                    </div>
                </article>
            </a>
        )
    }     
};

export default ResultsRenderer;