import React from "react";

import {useState} from 'react'

import logoImg from '../../assets/logo.svg';

import mailImg from '../../assets/email.svg';

import lockImg from '../../assets/password.svg';

import 
{    Container,
     Form
   
}from "./styles";



const SignUp: React.FC = () => {
    function pass (passwordInput:any, passConfirmInput: any) {
        if (passwordInput === passConfirmInput)
            return <p color="#4E41F0">As senha são iguais</p>

            else{
                <p color="#E44C4E">
                    As senhas não correspondem
                </p>
            }
    };
    return (
        <Container>
            <img className="logo" src={logoImg}/>
            <h1 className="newAccount">
                Criar conta
            </h1>
            <Form>
                <fieldset className="nameField">
                    <label className="nameLabel">
                        Nome completo
                    </label>
                    
                    <input className="nameInput">

                    </input>
                </fieldset>

                <fieldset className="emailField">
                    <label className="emailLabel">
                        Email
                    </label>
                    
                    <input className="emailInput">
                        
                    </input>
                </fieldset>

                <fieldset className="passwordField">
                    <label className="passwordLabel">
                        Senha
                    </label>
                    
                    <input className="passwordInput" type={'password'}>
                        
                    </input>
                </fieldset>

                <fieldset className="passConfirmField">
                    <label className="passConfirmLabel">
                        Confirmar senha
                    </label>
                    
                    <input className="passConfirmInput" type={'password'}>
                        
                    </input>
                </fieldset>
                <button>
                    SSSSS
                </button>
                <button>
                    SSSSS
                </button>
            </Form>
            <a className="signup" href="/login">
                Fazer login
            </a>
        </Container>
    );
}

export default SignUp;

