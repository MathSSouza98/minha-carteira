import styled from "styled-components";

const Container = styled.div`
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.primary};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;


>a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    margin-top: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: opacity .3s;
    :hover{
        opacity: .5;
    }
    
}

`

export const Logo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

>img{
    margin-right: 10px;
}

`;

export const Form = styled.form`
border-radius: 5px;
padding: 8px;
background-color: ${props => props.theme.colors.tertiary};
width: 350px;
height: 354px;
display: flex;
flex-direction: column;
align-items: center;

input{
    padding-bottom: 5px;
    width: 200px;
    margin-left: 10px;
    align-items: center;
    border: none;
}

.email{
    margin-top: 10px;
    width: 251px;
    height: 40px;
    display: flex;
    padding-top: 12px;
    padding-left: 5px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.white};

}

.password{
    margin-top: 10px;
    margin-bottom: 10px;
    width: 251px;
    height: 40px;
    display: flex;
    padding-top: 8px;
    padding-left: 5px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.white};
}

.submit{
    margin-top: 30px;
    padding: 10px;
    width: 251px;
    height: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.warning};
    font-size : 18px;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
}
`;

export const FormTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        font-size: 36px;
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-right: 145px ;
        margin-bottom: 20px;
        margin-top: 20px;

        color: ${props => props.theme.colors.white};
    
        &::after {
            margin-left: 2px;
            animation: 1s animacao forwards;
            content: '';
            display: block;
            width: 55px;
            border-bottom: 5px solid #E44C4E;
        }

        @keyframes animacao {
            0%{
                width: 0;
            }

            100%{
                width: 55px;
            }
            
        }
    
    }
    

`;

export default Container