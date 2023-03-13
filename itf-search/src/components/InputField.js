import React, { useState, useEffect } from 'react';

const InputField = ({handleChange, textInput, searchParams, selectedTags, selectedAuthors}) => {
    const [tags, setTags] = useState([]);
    const authors = searchParams.get('author');

    useEffect(() => {
        initiateTags();
    },[])

    const hashTagRegex = /#\w+/i;
    const authorRegex = /@\w+/i;

    const addTags = event => {
        // console.log(event.target.value, event.key);
        if (event.key === " " && event.target.value !== "" && event.target.value.match(hashTagRegex) ) {
            console.log('space button pressed');
            const tagSimplified = event.target.value.replace('#','').trim();
            if (!tags.includes(tagSimplified)) {
                setTags([...tags, tagSimplified]);
                selectedTags([...tags, tagSimplified]);
                event.target.value = "";
            }
        }
        // if (event.key === " " & event.target.value !== "" && event.target.value.match(authorRegex) ) {
        //     const tagSimplified = event.target.value.replace('@','').trim();
        //     selectedAuthors([...authors, tagSimplified]);
        //     console.log(authors);
        // }
        if (event.key === "Backspace" && event.target.value === "" && selectedTags) {
            console.log('backspace pressed');
            removeTags(tags.length - 1);
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    const initiateTags = () => {
        if (searchParams.get('tags')) {
            const tags = searchParams.get('tags').split(',');
            console.log(tags);
            setTags(tags);
        }
    }

    return(
        <div className="tags-input">
            <ul>
                {tags.map((tag, index) => (
                    <li className="hashtag" key={index}>
                        <span>{tag}</span>
                        <span
                            className="material-icons tag-close-icon"
                            onClick={() => removeTags(index)}
                        >x</span>
                    </li>
                ))}
            </ul>
            <input
                defaultValue={searchParams.get('searchText') || ''}
                onChange={handleChange}
                onKeyUp={event => addTags(event)}
                // onBeforeInput={initiateTags}
                ref={textInput}
                data-key="searchText"
                type="text"
                id="search-box"
                name="search"
                placeholder="Enter search terms here...">

                </input>
        </div>
    )
};

export default InputField;