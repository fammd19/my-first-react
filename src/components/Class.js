//Import react from the react component

// import React from 'react'

// class Class extends React.Component {

//Alternative way of importing

import { Component } from 'react'

class Class extends Component {

    render() {
        return (
            <div className="aboutSection">
                <h1>About</h1>

                <h2>Hobbies:</h2>
                {
                    this.props.hobbies
                    ?
                    <ul>
                        {
                            this.props.hobbies.map( hobby => {
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
}

export default Class;