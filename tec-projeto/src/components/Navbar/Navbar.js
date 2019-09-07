import React, { Component } from 'react'

import './Navbar.scss'


class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="barContainer">
                    <div className="menu">
                        <ul>
                            <li><a href='/'>Pagina Inicial</a></li>
                            <li><a href='/'>Explorar</a></li>
                            <li><a href='/'>Mensagens</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar