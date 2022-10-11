import styled from "styled-components";

import Switch, {ReactSwitchProps} from 'react-switch';
import { text } from "stream/consumers";
import { off } from "process";

export const Container = styled.div`
    display:flex;
    align-items:center ;
`;

export const ToggleLabel = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.black,
        offColor: theme.colors.gray
    }))<ReactSwitchProps>`

    margin: 0 10px;
    .text-left {
        padding: 4px 5px;
        font-weight: 700;
        color:white;
    }

    .text-right {
        padding: 4px 5px 4px 0;
        font-weight: 700;
        color:black;
    }

`;