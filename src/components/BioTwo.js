import { Component } from 'react'

class BioTwo extends Component {
    constructor (props) {
        super (props)
    }
    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default BioTwo;