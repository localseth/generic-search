import { React, useEffect } from 'react';

const Tip = (props) => {

    console.log(props.location);

    const isSearch = () => {
        if (props.location.pathname.includes('/search')) {
            console.log("It's a search route!")
            return true;
        } else {
            console.log("It's not a search route!");
            return false
        }
    };

    const setHidden = () => {
        const tipElement = document.querySelector('.tip');
        console.log(tipElement);
        if (isSearch) {
            if (!tipElement.classList.value.includes('hidden')) {
                tipElement.classList.add('hidden')
            }
        } else if(!isSearch) {
            if (tipElement.classList.value.includes('hidden')) {
                tipElement.classList.remove('hidden');
            }
        }
    };

    window.addEventListener('DOMContentLoaded', setHidden);

    return(
        <div className="tip">
            <span>Tip</span>
            <p>
            To search for creators, use "@" before your search term. For tags, use "#"
            </p>
            <p className="example"><i>example: </i> <span className="creator">@Iancrossland</span> <span className="hashtag">&#35;music</span> <span className="hashtag">&#35;rock</span></p>
        </div>
    )
}

export default Tip;