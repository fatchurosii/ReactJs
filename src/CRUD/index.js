import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'
import Formulir from './Formulir'
import { Container } from 'react-bootstrap'
export default class index extends Component {
    render() {
        return (
            <div>
                <NavbarComponent/>
                <Container>
                <Tabel/>
                <Formulir/>
                </Container>
     
            </div>
        )
    }
}
