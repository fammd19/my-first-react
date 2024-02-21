//Don't need a state form child, will try to update from parent - in this case we do because of the form 
import {useState} from 'react'

export default function Child ({updateMessage}) {
    //Expecting a callback function as a props as that will trigger thte update for the message 
    const [input, setInput] = useState("")

    function handleSubmit (event) {
        event.preventDefault();
        updateMessage(input)
    }

    return (
        <form>
            <input type="text" value={input} onChange={ (e) => {setInput(e.target.value)}}/>
            <button type="submit" onClick={handleSubmit}>Update message</button>
        </form>
    )
    
}