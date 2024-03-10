import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import { About } from '../Pages/About';
import AddBlog from '../Pages/Add_blog';
import Error from '../Pages/Error';
import Navbar from '../Layouts/Navbar';
import Protected from './Protected';

const Index = () => {

 const [isLoggedIn,setIsLoggedIn] = useState(false);

 const handleToggle = (data) => {
    console.log(data);
    setIsLoggedIn(data);
 }

  return (
    <BrowserRouter>
        <Navbar onToggle={handleToggle}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/add-blog' element={<Protected isLoggedIn={isLoggedIn}><AddBlog /></Protected>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index
