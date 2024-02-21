import {useState} from 'react';
import Child from './Child';

export default function Parent () {
    const [message, setMessage] = useState("")

    return (
        <>
            <h1>Message: {message}</h1>
            <Child updateMessage={setMessage}/>
        </>
    )
}