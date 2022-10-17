import styled from "styled-components";



export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;


`;

export const TitleContainer = styled.div<{lineColor: String;}>`

> h1 {
        color: ${props => props.theme.colors.white};
    
        &::after {
            animation: 1s animacao forwards;
            content: '';
            display: block;
            width: 55px;
            border-bottom: 5px solid ${(props:any) => props.lineColor};
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

export const Controllers = styled.div`
    display:flex;
    
`;