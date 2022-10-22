import React from "react";

import {useState} from 'react'

import logoImg from '../../assets/logo.svg';

import mailImg from '../../assets/email.svg';

import lockImg from '../../assets/password.svg';

import personImg from "../../assets/person.svg";

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
                    <h1>Cadastrar</h1>
                </FormTitle>
                    <fieldset className="name">
                        <label>
                            <img src={personImg} alt="name"/>
                        </label>
                        <input type="text"></input>
                    </fieldset>
                    <fieldset className="email">
                        <label>
                            <img src={mailImg} alt="email"/>
                        </label>
                        <input type="email"></input>
                    </fieldset>
                     <fieldset className="password">
                        <label>
                            <img src={lockImg} alt="password"/>
                        </label>
                        <input type="text"></input>
                    </fieldset>
                    <fieldset className="passwordConfirm">
                        <label>
                            <img src={lockImg} alt="Password"/>
                        </label>
                        <input type="password"></input>
                    </fieldset>
                <button className="submit" type= "submit">
                    Cadastrar
                </button>
            </Form>
            <a href="/">Já tenho uma conta</a>
        </Container>
    );
}

export default SignIn;