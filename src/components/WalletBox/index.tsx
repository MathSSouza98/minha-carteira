import React, { useMemo } from "react";
import CountUp from "react-countup";

import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';

interface IwalletBoxProps{
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
};

const WalletBox: React.FC<IwalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color
}) => {

    const iconSelected = useMemo(() =>{
        switch (icon){
            case 'dolar':
                return dolarImg;

            case 'arrowUp':
                return arrowUpImg;

            case 'arrowDown':
                return arrowDownImg;  
            
            default:
                return dolarImg;  
            }
    },[icon])

    return (
        <Container color={color} >
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp 
                end={amount}
                separator="."
                decimals={2}
                />
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title}/> 
        </Container>
    );
}

export default WalletBox;