
import { useState } from "react";

function FormChild ({updateData}) {

    const [inputTitle, setInputTitle] = useState("");
    const [inputGenre, setInputGenre] = useState("");

    function handleSubmit (event){
        event.preventDefault();
        updateData(inputTitle, inputGenre)
    }

    return (
        <>
            <label htmlFor="titleInput">Title</label>
            <input type="text" id="titleInput" value={inputTitle} onChange={ (event) => {setInputTitle(event.target.value)}}/>
            <br/>
            <label htmlFor="genreInput">Genre</label>
            <select id="genreInput" value={inputGenre} onChange={ (event) => {setInputGenre(event.target.value)}}>
                <option>Horror</option>
                <option>Romance</option>
                <option>Comedy</option>
            </select>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default FormChild