import React from "react";

import {
    ContentHeader,
    SelectInput
} from '../../components/index'

import { Container } from "./styles";

const Dashboard: React.FC = () => {

    const options = [{
        value: 'Matheus', label: 'Matheus'
    }]

    return (
        <Container>
            <ContentHeader title="dashboard" lineColor="#fff">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;