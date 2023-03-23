import React, { useState, useEffect } from 'react';

const InputField = (props) => {
    const {handleChange, textInput, searchParams, selectedTags, selectedAuthors} = props;
    const [tags, setTags] = useState([]);
    const [authors, setAuthors] = useState([]);
    
    useEffect(() => {
        initiateTags();
    },[])

    const hashTagRegex = /#\w+/i;
    const authorRegex = /@\w+/i;

    const addTags = (event) => {
        if (event.key === " " && event.target.value !== "") {
            if (event.target.value.match(hashTagRegex)) {
                console.log('space button pressed');
                const tagSimplified = event.target.value.replace('#','').trim();
                if (!tags.includes(tagSimplified)) {
                    setTags([...tags, tagSimplified]);
                    selectedTags([...tags, tagSimplified]);
                    event.target.value = "";
                }
            } else if (event.target.value.match(authorRegex)) {
                const tagSimplified = event.target.value.replace('@','').trim();
                if (!authors.includes(tagSimplified)) {
                    setAuthors([...authors, tagSimplified]);
                    selectedAuthors([...authors, tagSimplified]);
                    event.target.value = "";
                }
            }
        
        }
    };

    // const addTags = event => {
    //     // an attempt at using an object in state for author and tags
    //     if (event.key === " " && event.target.value !== "" ) {
    //         if (event.target.value.match(hashTagRegex)) {
    //             const tagSimplified = event.target.value.replace('#','').trim();
    //             if (!tags.tags.includes(tagSimplified)) {
    //                 setTags(prevState => ({
    //                     tags: [...prevState.tags, tagSimplified] || tagSimplified
    //                 }));
    //                 event.target.value = "";
    //             }
    //         } else if (event.target.value.match(authorRegex)) {
    //             const tagSimplified = event.target.value.replace('@','').trim();
    //             if (!tags.authors.includes(tagSimplified)) {
    //                 setTags(prevState => ({
    //                     authors: [...prevState.tags, tagSimplified] || tagSimplified
    //                 }));
    //                 event.target.value = "";
    //             }
    //         }
    //     }

    //     if (event.key === "Backspace" && event.target.value === "" && selectedTags) {
    //         console.log('backspace pressed');
    //         removeTags(tags.length - 1);
    //     }
    // };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    const removeAuthors = (index) => {
        setAuthors([...authors.filter(author => authors.indexOf(author) !== index)]);
    };

    const initiateTags = () => {
        if (searchParams.get('author')) {
            const list = searchParams.get('tags').split(',');
            setAuthors(list);
        }
        if (searchParams.get('tags')) {
            const tags = searchParams.get('tags').split(',');
            console.log(tags);
            setTags(tags);
        }
    }

    return(
        <div className="tags-input">
            <ul className="author-list">
                {authors.map((author, index) => (
                    <li className="hashtag creator" key={index}>
                        <span>{author}</span>
                        <span 
                            className="tag-close-icon fa-sharp fa-regular fa-circle-xmark"
                            onClick={() => removeAuthors(index)}>
                        </span>
                    </li>
                ))}
            </ul>
            <ul className="hashtag-list">
                {tags.map((tag, index) => (
                    <li className="hashtag" key={index}>
                        <span>{tag}</span>
                        <span 
                            className="tag-close-icon fa-sharp fa-regular fa-circle-xmark"
                            onClick={() => removeTags(index)}>
                        </span>
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