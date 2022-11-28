import styled from "styled-components";



export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;

    @media (max-width: 320px) {
        flex-direction: column ;
    }


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

    @media (max-width: 420px) {
          > h1 {
            font-size: 22px;

          }      
    }

`;

export const Controllers = styled.div`
    display:flex;
    
    @media (max-width: 320px) {
        width: 100%;
        justify-content: space-around;
        margin-top: 20px;
    }
`;