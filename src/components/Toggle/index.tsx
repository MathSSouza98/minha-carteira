import React, { useState } from 'react';

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';


const Toggle: React.FC = () => {
    const [on, setOn] = useState(false);

    return(
    <Container>
        <ToggleLabel>
            Light
            <ToggleSelector
                width={40}
                height={20}
                checked={on}
                uncheckedIcon
                checkedIcon
                onChange={() => setOn(!on)}
            />
            Dark
        </ToggleLabel>
        
    </Container>
)}

export default Toggle;