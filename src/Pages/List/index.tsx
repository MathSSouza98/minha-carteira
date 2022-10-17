import React, { useMemo, useState, useEffect } from "react";

import { BrowserRouter, useParams } from 'react-router-dom'

import { ContentHeader,
         SelectInput,
         HistoryFinanceCard
} from '../../components/index'
import { Container, 
         Content,
         Filters
} from "./styles";

import {
        gains,
        expenses

    } from '../../repositories';

import formatCurrency from '../../utils/formatCurrency'
import formatDate from "../../utils/formatDate";


interface IData {
    id:number;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor : string;
}

const List: React.FC = () => {

    const [data, setData] = useState<IData[]> ([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const {type} = useParams();
    const titleOptions = useMemo(() => {
        return type === 'entry-balance' ? {title: 'Entradas', linecolor: '#4E41F0'} : {title: 'Saídas', linecolor: '#E44C4E'}
    },[type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    },[type]);

    const months = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'}
    ];

    const years = [
        {value: 2022, label: 2022},
        {value: 2023, label: 2023},
        {value: 2024, label: 2024},
        {value: 2025, label: 2025},
        {value: 2026, label: 2026},
        {value: 2027, label: 2027},
        {value: 2028, label: 2028},
        {value: 2029, label: 2029},
        {value: 2030, label: 2030},
        {value: 2031, label: 2031},
        {value: 2032, label: 2032},
        {value: 2033, label: 2033}
    ];

    useEffect (() => {
        
        const response = listData.map((item: any) => {
            return{
                id: Math.random () * listData.length,
                description: item.description,
                amountFormatted: formatCurrency((Number(item.amount))),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor : item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })
    
        setData(response);

    },[]);

    return (
        <Container>
            <ContentHeader title={titleOptions.title} lineColor={titleOptions.linecolor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>
           
            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>

                <button
                    type="button"
                    className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                       
                        <HistoryFinanceCard 
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;