import React, { useEffect, useState } from 'react';
import '../App.css';

const SingleResultRenderer = (props) => {
    const { result } = props;
    console.log('result loaded', result.id);
    
    if (result.type !== "user") {
        return(
            <main className={`result-container ${result.type}`}>
                <h1>{result.title}</h1>
                <div className="featured-img">
                    <img src={result.thumbnail} alt="image of creator or content preview"></img>
                    <div className="content-meta">
                        <h2>Meta Info</h2>
                        <h3>Stats</h3>
                        <ul>
                            <li>Views: 256k</li>
                            <li>Likes: 512k</li>
                            <li>Big brain score: 10/1</li>
                        </ul>
                            <p className="tight-margin">Some kind of linky thing</p>
                            <a href="#" className='timestamp'>{result.datePublished}</a>
                    </div>
                </div>
                <div className="search-result">
                    <p>{result.bodyText}</p>
                </div>
            </main>
        )}
    else {
        return(
            <main className="result-container user">
                <img className="user-img large-profile-pic" src={result.thumbnail} alt={`${result.handle} profile picture`}></img>
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
            </main>
        )
    }     
};

export default SingleResultRenderer;