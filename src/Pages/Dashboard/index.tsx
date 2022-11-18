import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { gains, expenses } from "../../repositories";
import listOfMonths from "../../utils/months";
import {
    ContentHeader,
    SelectInput,
    WalletBox,
    MessageBox,
    PieChartBox,
    HistoryBox,
    BarChartBox,
} from '../../components/index'

import { 
    Container,
    Content
 } from "./styles";

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';



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
        
        else if(totalGains === 0 && totalExpenses === 0){
            return{
                title: 'Ops!',
                description: "Neste mês não há registros de entradas ou saídas.",
                footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon: opsImg
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

    },[totalBalance, totalGains, totalExpenses  ]);

    const relationExpensesVersusGains = useMemo(() =>{
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data= [
            {
                name: "Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: '#F7931B'
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0,
                color: '#E44C4E'
            },
            
        ];

        

        return data;
    },[totalGains,totalExpenses]);

    const relationExpensesRecurrentVersusEventual = useMemo(() =>{
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses
        .filter((expense) =>{
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === Number(monthSelected) && year === Number(yearSelected);
        })
        .forEach((expense) =>{
            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount);
            }

            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
    
        const percentRecurrent = Number((amountRecurrent / total * 100).toFixed(1));
        const percentEventual = Number((amountEventual / total * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: '#F7931B'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: '#E44C4E'
            },
        ]
    },[monthSelected, yearSelected])

    const relationGainsRecurrentVersusEventual = useMemo(() =>{
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains
        .filter((gains) =>{
            const date = new Date(gains.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === Number(monthSelected) && year === Number(yearSelected);
        })
        .forEach((gains) =>{
            if(gains.frequency === 'recorrente'){
                return amountRecurrent += Number(gains.amount);
            }

            if(gains.frequency === 'eventual'){
                return amountEventual += Number(gains.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        
        const recurrentPercent = Number((amountRecurrent / total * 100).toFixed(1));
        const eventualPercent = Number((amountEventual / total * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: '#F7931B'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: '#E44C4E'
            },
        ]
    },[monthSelected, yearSelected])
     
    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) =>{
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === Number(yearSelected)){
                    try{
                        amountEntry += Number(gain.amount);
                    }catch{
                        throw new Error('amounEntry is invalid. amountEntry must be a valid number.')
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expenses => {
                const date = new Date(expenses.date);
                const expenseMonth = date.getMonth();
                const expensesYear = date.getFullYear();

                if(expenseMonth === month && expensesYear === Number(yearSelected)){
                    try{
                        amountOutput += Number(expenses.amount);
                    }catch{
                        throw new Error('amounOutput is invalid. amountOutput must be a valid number.')
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substring(0, 3),
                amountEntry,
                amountOutput
            }
        })
        .filter(item =>{
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (Number(yearSelected) === currentYear && item.monthNumber <= currentMonth || Number(yearSelected) < currentYear)
        })
    },[yearSelected]);


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

                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry='#F7931B'
                    lineColorAmountOutput='#E44C4E'
                />

                <BarChartBox 
                title="Saídas"
                data={relationExpensesRecurrentVersusEventual}/>

                <BarChartBox 
                title="Entradas"
                data={relationGainsRecurrentVersusEventual}/>

            </Content>
        </Container>
    );
}

export default Dashboard;