import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Auth from './auth.app.routes'
import App from './app.routes';



const Routes: React.FC = () => (
    <BrowserRouter>
    <App/>
    </BrowserRouter>
);

export default Routes;