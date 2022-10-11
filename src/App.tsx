import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';

import Dashboard from './Pages/Dashboard';

import GlobalStyles from './styles/GlobalStyles';

import dark from './styles/themes/dark';

import light from './styles/themes/light';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Layout>
            <Dashboard />
        </Layout>
            
        
        </ThemeProvider>
    );
}

export default App;