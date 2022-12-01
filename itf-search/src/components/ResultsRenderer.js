import React, { useState } from 'react';
import '../App.css';

const ResultsRenderer = (props) => {
    console.log(props);
    const { key, type, datePublished, dateUpdate, thumbnail, author, title, link, bodyText } = props;
    return(
        <div className="result-container">
            <img src='/sample-image.png' alt="image of creator or content preview"></img>
            <div className="search-result">
                <h3>{title}</h3>
                <div className='creator-container'>
                    <a href="#" className='timestamp'>{datePublished}</a>
                    <a className="no-decoration" href="#" title={`see more by ${author}`}></a>
                    <div className="tooltip-container">
                        <a className="no-decoration" href="#"><span class="creator">{author}</span></a>
                        <div className="tooltip">
                            <div className="mini-profile">
                                <img className="user-img" src="/default-user.png" alt={author}></img>
                                <p>User stats: 102%<br></br>Half-life: 0.65 millenia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="preview">{bodyText}</p>
                <a href="#">https://webaddres.onion</a>
            </div>
        </div>
    )
};

export default ResultsRenderer;