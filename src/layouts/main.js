import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main.css';
import Phone from '../components/phone';



export default class Main extends Component {
    render() {
        return (
            <Container className='Main' fluid>
                {/* <div style={{height:'50px', position:'sticky', zIndex:'2'}}></div> */}
                <Row>
                    <Col sm={8}>
                    <Container className='left-col' fluid>
                        <h1 style={{fontSize: '100px', marginLeft:'50px'}}>
                            dsbasndasmndnasbd
                            sdbajdbmnnmasd
                            sdnmsdbasda
                            asdmnasdbmsd
                            smdbbdsdasdasdas
                            dsbasndasmndnasbd
                            sdbajdbmnnmasd
                            sdnmsdbasda
                            asdmnasdbmsd
                            smdbbdsdasdasdas
                            
                            dsbasndasmndnasbd
                            sdbajdbmnnmasd
                            sdnmsdbasda
                            asdmnasdbmsd
                            smdbbdsdasdasdas
                            
                            
                        </h1>
                    </Container>
                    </Col>
                    <Col sm={4} ><Phone></Phone></Col>
                </Row>

            </Container>
        )
    }
}
