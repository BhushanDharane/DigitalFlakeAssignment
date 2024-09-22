import React from 'react'
import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Category from './Category'
import Subcategory from './Subcategory'
import Product from './Product'
import User from './User'
import Home from './Home'
import Navbar from './Navbar'
import Fogotpassword from './Fogotpassword'
import Logout from './Logout'

const App = () => {
  return (
    <div>
      
    <BrowserRouter>
    <Navbar />
   
       <Routes>
       <Route path='/' element ={<User />}></Route>
        <Route path='/home' element ={<Home/>}></Route>
        <Route path='/category' element ={<Category/>}></Route>
        <Route path='/Subcategory' element ={<Subcategory/>}></Route>
        <Route path='/product' element ={<Product />}></Route>
        <Route path='/forgotPassword' element ={<Fogotpassword  />}></Route>
        <Route path='/logout' element ={<Logout />}></Route>
       </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App