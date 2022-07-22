import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Block extends Component {

    constructor(props) {
        super(props);
    }

    state = {}

    render() {
        return (
                    <Row style={{height:'100vh',  display:'flex', alignItems:"center"}}>
                    <Container className='left-col' fluid>
                        <h1 style={{ fontSize: '100px', marginLeft: '50px' }}>
                            {this.props.title}
                        </h1>
                        
                        <h3 style={{ fontSize: '40px', marginLeft: '50px' }}>
                            {this.props.content}
                        </h3>
                    </Container>
                    </Row>
        );
    }
}

export default Block;
