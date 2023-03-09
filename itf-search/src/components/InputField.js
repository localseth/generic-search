import React, { useState } from 'react';

const InputField = ({handleChange, textInput, searchParams, selectedTags}) => {
    const [tags, setTags] = useState([]);

    const hashTagRegex = /#\w+/i;

    const addTags = event => {
        console.log(event.target.value);
        if (event.key === " " && event.target.value !== "" && event.target.value.match(hashTagRegex) ) {
            console.log('space button pressed')
            setTags([...tags, event.target.value]);
            selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

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