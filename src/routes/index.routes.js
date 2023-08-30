import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index/index.jsx';
import Register from '../pages/Register/index.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )

}

export default Routers;