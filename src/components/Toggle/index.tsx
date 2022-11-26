import React, { useState } from 'react';

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';

interface IToggleProps{
    labelLeft: string;
    labelRight: string;

    checked: boolean;

    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
    labelLeft,
    labelRight,
    checked,
    onChange
}) => {

    return(
    <Container>
        <ToggleLabel>
            {labelLeft}
            <ToggleSelector
                width={40}
                height={20}
                checked={checked}
                uncheckedIcon
                checkedIcon
                onChange={onChange}
            />
            {labelRight}
        </ToggleLabel>
        
    </Container>
)}

export default Toggle;