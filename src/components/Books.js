import {Component} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//THIS IS NOT WOKRING REVIEW

class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            title: "",
            author: "",
            genre: ""
        }
    }

    updateTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    updateAuthor = (event) => {
        this.setState({
            author: event.target.value
        })
    }

    updateGenre = (event) => {
        this.setState({
            genre: event.target.value
        })
    }

    addBook = (event) => {
        event.preventDefault();
        let book = {
                title: this.state.title,
                author: this.state.author,
                genre: this.state.genre
            }
            this.setState ({books: [...this.state.books, book], title: "", author: "", genre: ""})
        }

    

render () {
    return(
            <>
                <form>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.state.title} onChange={this.updateTitle}/>
                    <br/>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" value={this.state.author} onChange={this.updateAuthor}/>
                    <br/>
                    <label htmlFor="genre">Genre</label>
                    <input type="text" id="genre" value={this.state.genre} onChange={this.updateGenre}/>
                    <br/>
                    <button type="submit" onClick={this.addBook}>Add Book</button>
                </form>
                <h1>List of books</h1>
                <Container>
                    <Row>
                        {this.state.books.map (book => {
                            return (
                                <Col sm={3}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Title: {book.title}</Card.Title>
                                            <Card.Text>
                                                Author: {book.author}
                                                Genre: {book.genre}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }) 
                    }
                    </Row>
                </Container>
            </>
    )
    }
}

export default Books;