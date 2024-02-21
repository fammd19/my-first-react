import { Component } from "react";

class FormTwo extends Component {
    constructor(props) {
        super(props) //Means we can wrte this.props = props
        this.state = {
            title: "No title yet",
            genre: "No genre yet",
            rating: "No rating yet"
        }
        this.handleRatingClick = this.handleRatingClick.bind(this);
    }

    // handleButtonClick = () => {
    //     this.setState({title: "The title has been updated", genre: "Horror"})
    // }

    handleRatingClick () {
        this.setState({rating: "4 stars out of 5"})
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleGenreChange = (event) => {
        this.setState({
            genre: event.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Title: {this.state.title}</h1>
                {/* this.state.[] is how we access state via class based */}
                <h2>Genre: {this.state.genre}</h2>
                <h2>Rating: {this.state.rating}</h2>
                <form>
                    <label htmlFor="titleInput">Title</label>
                    <input type="text" id="titleInput" value={this.state.title} onChange={this.handleTitleChange}/>
                    {/* <input type="text" id="titleInput" value={title} onChange={handleTitleChange}/> */}
                    {/* //Always assign the value to make sure it updates the state */}
                    <br/>
                    <label htmlFor="genreInput">Genre</label>
                    <select id="genreInput" value={this.state.genre} onChange={this.handleGenreChange}>
                        <option>Horror</option>
                        <option>Romance</option>
                        <option>Comedy</option>
                    </select>
                </form>
                {/* <button type="button" onClick={this.handleButtonClick}>Update title & genre</button> */}
                <button type="button" onClick={this.handleRatingClick}>Update rating</button>
            </>
        )
    }
}

export default FormTwo;