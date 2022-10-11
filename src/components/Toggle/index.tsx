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
        <ToggleSelector
            width={85}
            checked={on}
            uncheckedIcon={<p className='text-right'>Light</p>}
            checkedIcon={<p className='text-left'>Dark</p>}
            onChange={() => setOn(!on)}
        />
    </Container>
)}

export default Toggle;