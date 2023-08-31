import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index/index.jsx';
import Login from '../pages/Login/index.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )

}

export default Routers;