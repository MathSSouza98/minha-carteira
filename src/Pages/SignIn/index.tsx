import React, {useState} from "react";

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
import { Button, Input } from "../../components";

import { useAuth } from "../../hooks/auth";



const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth()

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="minha-carteira" />
                <h3>Minha Carteira</h3>
            </Logo>
            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>
                    <h1>Entrar</h1>
                </FormTitle>
                
                <Input 
                    type='email'
                    placeholder="e-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input 
                    type='password'
                    placeholder="senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <Button type="submit">Acessar</Button>
            </Form>
            <a href="/signup">Criar minha conta</a>
        </Container>
    );
}

export default SignIn;

