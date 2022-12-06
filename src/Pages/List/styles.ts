import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`


export const Container = styled.div``;

export const Content = styled.main`
    animation: ${animate} .5s;
`;

export const Filters = styled.div`
    width: 100%;
    
    display:flex;
    justify-content: center;
    
    margin-bottom: 30px;
    

    .tag-filter{
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};


        margin: 0 10px;

        transition: opacity .3s;
        opacity: .4;

        cursor:pointer;

        :hover {
            opacity: .7;
        }

        ::after{
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.warning};

            border-radius: 5px;
        }
       
        

    }

    .tag-filter-recurrent::after{
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.success};
        }

        .tag-filter-eventual::after{
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.warning};
        }

    .tag-actived{
        opacity: 1;
    }
`;