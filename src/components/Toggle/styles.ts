import styled from "styled-components";

import Switch, {ReactSwitchProps} from 'react-switch';

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

    margin: -4px 10px;
    

`;