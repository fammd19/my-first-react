import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Student ( {name, degree="I.T."} ) {

    return(
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Studies {degree}
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                </Card.Body>
            </Card>
        )
}

export default Student