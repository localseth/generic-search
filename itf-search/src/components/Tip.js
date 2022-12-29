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

    // I probably shouldn't call the isSearch() this way, but it works for now
    const setHidden = () => {
        console.log('useEffect called! Is it a search? ', isSearch())
        const tipElement = document.querySelector('.tip');
        if (isSearch()) {
            if (!tipElement.classList.value.includes('hidden')) {
                tipElement.classList.add('hidden')
            }
        } else if(!isSearch()) {
            if (tipElement.classList.value.includes('hidden')) {
                tipElement.classList.remove('hidden');
            }
        }
    };

    useEffect(setHidden, []);
    // window.addEventListener('DOMContentLoaded', setHidden);

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