import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { gains, expenses } from "../../repositories";
import listOfMonths from "../../utils/months";
import {
    ContentHeader,
    SelectInput,
    WalletBox,
    MessageBox,
    PieChartBox
} from '../../components/index'

import { 
    Container,
    Content
 } from "./styles";

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';



const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState(String(new Date().getFullYear()));

    const {type} = useParams();

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    },[type]);

    const years = useMemo (() => {
        let uniqueYears: number[] = []
        listData.forEach(item =>{
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });
        
        return uniqueYears.map(year =>{
            return{
                value: year,
                label: year,
            }
        }); 
    },[listData])
            
    const months = useMemo(() => {
        return listOfMonths.map((month,index) =>{           
                return{
                    value: index + 1,
                    label:month,
                };           
        });
    },[]);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === Number(monthSelected) && year === Number(yearSelected)){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number')
                }
            }
        });
        return total;
    },[monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === Number(monthSelected) && year === Number(yearSelected)){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number')
                }
            }
        });
        return total;
    },[monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses

    },[totalExpenses, totalGains]);

    const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        }
        else if(totalBalance === 0){
            return {
                title: "Ufaa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro.",
                icon: grinningImg
            }
        
        }
        else{
            return{
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }

    },[totalBalance]);

    const relationExpensesVersusGains = useMemo(() =>{
        const total = totalGains + totalExpenses;

        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;

        const data= [
            {
                name: "Entradas",
                value: totalGains,
                percent: Number(percentGains.toFixed(1)),
                color: '#F7931B'
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: Number(percentExpenses.toFixed(1)),
                color: '#E44C4E'
            },
        ];

        return data;
    },[totalGains,totalExpenses]);
     

    return (
        <Container>
            <ContentHeader title="dashboard" lineColor="#F7931B">
                <SelectInput options={months} 
                onChange={(e) => setMonthSelected(e.target.value)} 
                defaultValue={monthSelected}/>
                <SelectInput options={years} 
                onChange={(e) => setYearSelected(e.target.value)} 
                defaultValue={yearSelected}/>
            </ContentHeader>

            <Content>
                <WalletBox
                title="saldo"
                color="#4E41F0"
                amount={totalBalance}
                footerlabel="Atualizado com base nas entradas e saídas"
                icon="dolar"
                />

                <WalletBox
                title="entradas"
                color="#F7931B"
                amount={totalGains}
                footerlabel="Atualizado com base nas entradas e saídas"
                icon="arrowUp"
                />

                <WalletBox
                title="saídas"
                color="#E44C4E"
                amount={totalExpenses}
                footerlabel="Atualizado com base nas entradas e saídas"
                icon="arrowDown"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartBox data={relationExpensesVersusGains} />
            </Content>
        </Container>
    );
}

export default Dashboard;