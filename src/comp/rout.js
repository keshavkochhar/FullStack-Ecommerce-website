import React from 'react'
import { Routes, Route} from 'react-router';
import Home from './home';
import Shop from './shop';
import Cart from './cart';

import UserInfoForm from './UserInfoForm';
import PaymentGateway from './PaymentGateway';
import PaymentResult from './PaymentResult';
import Contact from './contact';
const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart ={setCart}/>} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
        <Route path='/contact' element={<Contact />} />

        <Route path="/user-info" element={<UserInfoForm />} />
        <Route path="/payment" element={<PaymentGateway />} />
        <Route path="/payment-result" element={<PaymentResult />} />
    </Routes>
    </>
  )
}

export default Rout