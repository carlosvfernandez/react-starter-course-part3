import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logo.png'
const Footer = styled.div`
    background: rgba(38,50,56,1);
    padding: 10px;
`

export default () => (
    <Footer>
        <img src={Logo} alt="Logo moviedb" width="100" height="75"></img>
    </Footer>
)