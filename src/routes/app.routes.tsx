import React from "react";
import {
    Routes,
    Route
} from 'react-router-dom';

import { Layout } from "../components";

import {Dashboard,
        List
} from '../Pages/index';

const AppRoutes: React.FC =() => (
    <Layout>
        <Routes>
            <Route path="" element={<Dashboard />}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/list/:type" element={<List />} />
        </Routes>
    </Layout>
);

export default AppRoutes;
