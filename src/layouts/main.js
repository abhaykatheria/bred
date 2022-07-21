import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import './main.css';
import Block from '../components/block';



export default class Main extends Component {
    render() {
        return (
            <Container className='Main' fluid>
                <Block 
                title="This is block 1" 
                content="It took very long time to work" 
                img="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png">
                </Block>
                
                <Block 
                title="This is block 1" 
                content="It took very long time to work" 
                img="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png">
                </Block>
            </Container>
        )
    }
}
