import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Student from "./Student";
import React from "react";

function Students ({ students }) {

    return (
      <Container>
        <Row>
          {
              students.map(student => {
                  return (
                    <React.Fragment key={student.id}>
                      <Col sm={4} md={3} lg={4}>
                        <Student name={student.name} degree={student.degree}/>
                      </Col>
                    </React.Fragment>
                    )  
                }    
              ) 
              }          

        </Row>
      </Container>
    )
}



export default Students;
