import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props => props.theme.colors.primary};

.newAccount{
    color: ${props => props.theme.colors.white};
    display: flex  ;
    flex-direction: column ;
    align-items: flex-end ;
    margin-top: 10px;
};

.signup {
    color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    transition: opacity .3s;
    :hover{
        opacity: .5;
    }
};

`;

export const Form = styled.form`
    width: 300;
    height: 500;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    background-color: ${props => props.theme.colors.tertiary};

    .nameField{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .nameLabel{
        padding-left: 10px;
        padding-right: 10px;
        font-size: 16px;
        color: ${props => props.theme.colors.white};

        align-items: left;
    }

    .nameInput{
        border-radius: 5px;
        margin-right: 10px;
        padding-left: 5px;

        align-items: right;
    }

    .emailField{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .emailLabel{
        padding-left: 10px;
        padding-right: 85px;
        font-size: 16px;
        color: ${props => props.theme.colors.white};

        align-items: left;
    }

    .emailInput{
        border-radius: 5px;
        margin-right: 10px;
        padding-left: 5px;

        align-items: right;
    }

    .passwordField{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .passwordLabel{
        padding-left: 10px;
        padding-right: 80px;
        font-size: 16px;
        color: ${props => props.theme.colors.white};
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    .passwordInput{
        border-radius: 5px;
        margin-right: 10px;
        padding-left: 5px;
        display: flex;
        flex-direction: column;
        align-items: right;
    }

    .passConfirmField{
        display: flex;
        align-items: center;

        margin-top: 5px;
        margin-bottom: 5px;
    }

    .passConfirmLabel{
        padding-left: 10px;
        padding-right: 10px;
        font-size: 16px;
        color: ${props => props.theme.colors.white};
    }

    .passConfirmInput{
        border-radius: 5px;
        margin-right: 10px;
        padding-left: 5px;
    }


`;

