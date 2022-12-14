import React from 'react'
import { Route,Routes } from 'react-router-dom'

import { 
    SignIn,
    SignUp
} from '../Pages'

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<SignIn />} />
        <Route path="/list/:type" element={<SignIn />} />
    </Routes>
);

export default AuthRoutes