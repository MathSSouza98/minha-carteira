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

import listOfMonths from "../../utils/months";

import {
        gains,
        expenses

    } from '../../repositories';

import formatCurrency from '../../utils/formatCurrency'
import formatDate from "../../utils/formatDate";
import { v4 } from "uuid";
import { useTheme } from "../../hooks/theme";



interface IData {
    id: any;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor : string;
}

const List: React.FC = () => {

    const [data, setData] = useState <IData[]>([]);
    const [monthSelected, setMonthSelected] = useState(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState(String(new Date().getFullYear()));
    const [selectedFrequency, setSelectedFrequency] = useState<String[]>(['recorrente','eventual']);

    const {type} = useParams();
    const titleOptions = useMemo(() => {
        return type === 'entry-balance' ? {title: 'Entradas', linecolor: '#4E41F0'} : {title: 'Saídas', linecolor: '#E44C4E'}
    },[type]);

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

    const {theme} = useTheme()

    const handleFrequencyClick = (frequency: String) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);


        if(alreadySelected >= 0){
           const filtered = selectedFrequency.filter(item =>item !== frequency);
           setSelectedFrequency(filtered);
        }else{
            setSelectedFrequency((prev) =>[...prev, frequency]);
        }
    };

    useEffect (() => {
        
        const filteredData = listData.filter((item: any) => {
            const date = new Date (item.date);
            const month = (date.getMonth() + 1);
            const year = (date.getFullYear());

            return month === Number(monthSelected) && year === Number(yearSelected) && selectedFrequency.includes(item.frequency);

        });

        const formattedData = filteredData.map((item:any) =>{
            

            return{
                id: v4(),
                description: item.description,
                amountFormatted: formatCurrency((item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor : item.frequency === 'recorrente' ? theme.colors.success : theme.colors.warning
            }
        });
    
        setData(formattedData)

    },[listData, monthSelected, yearSelected, data.length, selectedFrequency, theme]);

    return (
        <Container>
            <ContentHeader title={titleOptions.title} lineColor={titleOptions.linecolor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>
           
            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent
                    ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                    >
                    Recorrentes
                </button>

                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual
                    ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                    >
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
                            amount={`R$ ${item.amountFormatted}`}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;