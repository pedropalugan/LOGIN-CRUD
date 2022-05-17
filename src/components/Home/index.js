import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import imgAstro from '../../assets/img/astro.svg'
import './style.css'

const Home = () =>{
    return(
        <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                </Container>
            </Navbar>

            <section>
                <img className="imgAstro" src={imgAstro} alt="Atronauta" />
                <h1>Seja bem-vindo</h1>
            </section>

        </>
    );
}

export default Home;