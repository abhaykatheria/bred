import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './main.css';
import Phone from '../components/phone';

class Block extends Component {

    constructor(props) {
        super(props);
    }

    state = {}

    render() {
        return (
            <Row style={{height:'100vh'}}>
                <Col sm={8} style={{display : 'flex' , alignItems:'center'}}>
                    <Container className='left-col' fluid>
                        <h1 style={{ fontSize: '100px', marginLeft: '50px' }}>
                            {this.props.title}
                        </h1>
                        <br></br>
                        <br></br>
                        <h3 style={{ fontSize: '40px', marginLeft: '50px' }}>
                            {this.props.content}
                        </h3>
                    </Container>
                </Col>
                <Col sm={4} style={{display : 'flex' , alignItems:'center'}}><Phone url={this.props.img}></Phone></Col>
            </Row>
        );
    }
}

export default Block;
