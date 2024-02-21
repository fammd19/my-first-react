import { useState } from "react";
import FormChild from "./FormChild";

function FormDisplay () {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");

    function updateTitleAndGenre (inputTitle, inputGenre) {
        setTitle(inputTitle);
        setGenre(inputGenre);
    }

    return (
        <>
            <h1>Title: {title}</h1>
            <h2>Genre: {genre}</h2>

            <FormChild updateData={updateTitleAndGenre} />
        </>
    )
}

export default FormDisplay