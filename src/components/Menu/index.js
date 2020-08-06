import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../../assets/Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="FabiFlix Logo" /> 
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo 
            </Button>
        </nav>
    );
}

export default Menu; 