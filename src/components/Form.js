import { useState } from "react";

function Form () {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");

    function handleTitleChange (event) {
        setTitle(event.target.value)
    }

    function handleGenreChange (event) {
        setGenre(event.target.value)
    }

    return (
        <>
            <h1>Title: {title}</h1>
            <h2>Genre: {genre}</h2>
            <label htmlFor="titleInput">Title</label>
            <input type="text" id="titleInput" value={title} onChange={ (event) => { setTitle(event.target.value)}}/>
            {/* <input type="text" id="titleInput" value={title} onChange={handleTitleChange}/> */}
            {/* //Always assign the value to make sure it updates the state */}
            <br/>
            <label htmlFor="genreInput">Genre</label>
            <select id="genreInput" onChange={handleGenreChange}>
                <option>Horror</option>
                <option>Romance</option>
                <option>Comedy</option>
            </select>
        </>
    )
}

export default Form