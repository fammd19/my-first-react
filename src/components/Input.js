import { useState } from "react";

function Input () {

    const [inputValue, setInputValue] = useState("");
    //Best practes is to put the state and setter as the same name (with set in front for the setter)
    //Needs an argument

    function handleChange (event) {
        setInputValue(event.target.value)
    }

    return (
        <>
            <input type="text" onChange={handleChange}/>
            <h2>Value of input: {inputValue}</h2>
        </>
    )
}

export default Input