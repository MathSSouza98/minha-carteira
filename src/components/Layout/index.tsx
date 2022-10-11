import React from "react";

import { Grid } from './Styles';

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'


const Layout: React.FC<{children:React.ReactNode}> = ({ children }) => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content >
        </Grid>
    );
}

export default Layout;