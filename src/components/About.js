export default function About ({ hobbies }) {
    return (
        <div className="aboutSection">
            <h2>About - Hobbies</h2>
            {
                hobbies 
                ? 
                <ul> 
                {
                    hobbies.map(hobby => {
                        return <li>{hobby}</li>
                    }) 
                }
                </ul>
                :
                <p>No hobbies</p>
            }

        </div>
    )
}