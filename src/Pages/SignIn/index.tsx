import React from "react";

import {useState} from 'react'

import logoImg from '../../assets/logo.svg';

import mailImg from '../../assets/email.svg';

import lockImg from '../../assets/password.svg';

import 
    Container,
{   Logo,
    FormTitle,
    Form
}from "./styles";
import { Link } from "react-router-dom";



const SignIn: React.FC = () => {
    const signup = <Link className="orange-link" to="/product">Criar minha conta</Link>
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="minha-carteira" />
                <h3>Minha Carteira</h3>
            </Logo>
            <Form>
                <FormTitle>
                    <h1>Entrar</h1>
                </FormTitle>
                    <fieldset className="email">
                        <label>
                            <img src={mailImg} alt="Email"/>
                        </label>
                        <input type="text"></input>
                    </fieldset>
                    <fieldset className="password">
                        <label>
                            <img src={lockImg} alt="Password"/>
                        </label>
                        <input type="password"></input>
                    </fieldset>
                <button className="submit" type= "submit">
                    Acessar
                </button>
            </Form>
            <a href="/signup">Criar minha conta</a>
        </Container>
    );
}

export default SignIn;

