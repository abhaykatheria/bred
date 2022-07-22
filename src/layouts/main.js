import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import './main.css';
import Block from '../components/block';


export default class Main extends Component {
    state = { active: 0 };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = event => {
        const { pageYOffset } = window;
        const { active } = this.state;

        if (pageYOffset >= 500 && active === 0) {
            this.setState({ active: 1 });
        } else if (pageYOffset < 500 && active === 1) {
            this.setState({ active: 0 });
        }
    };




    render() {
        // const { active } = this.state;
        // urls = [
        //     "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
        //     "https://web-images.credcdn.in/_next/assets/images/home-page/features/fol2.png"
        // ]
        return (
            <Container className='Main' fluid>

                <Block
                    title="This is block 1"
                    content="It took very long time to work"
                    img="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png">
                </Block>

                <Block
                    title="This is block 2"
                    content="It took very long time to work"
                    img="https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png">
                </Block>
            </Container>
        )
    }
}
