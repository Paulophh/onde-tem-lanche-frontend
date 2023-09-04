import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index/index.jsx';
import Login from '../pages/Login/index.jsx';
import Register from '../pages/Register/index.jsx';

import CustomerSpecifications from '../pages/CustomerSpecifications/index.jsx';
import RestaurantSpecifications from '../pages/RestaurantSpecifications/index.jsx';
import Favorites from '../pages/Favorites/index.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/customer/info' element={<CustomerSpecifications />} />
            <Route path='/restaurant/info' element={<RestaurantSpecifications />} />

            <Route path='/favorites' element={<Favorites/>} />
        </Routes>
    )

}

export default Routers;