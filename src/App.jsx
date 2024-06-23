import React from 'react'
import logo from "./images/logo.png"
import { BrowserRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import Home from './components/Home'
import Products from './components/Products'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const URL = "https://fakestoreapi.com/products";
  const [loader,setloader] = useState(false)
  const [raw,setraw] = useState([])
  const [newstate,setnewstate] = useState([])
   
  function clickHandler(newitem){
     setnewstate((prev)=>[...prev,newitem],console.log(newitem))
     toast.success("Item Added",{
      position:"top-center"
     });
  }
  function removeHandler(newitem){
    setnewstate(newstate.filter((elem,index)=>newitem!=elem))
    toast.error("Item remove",{
      position:"top-center"
    })
  }
  useEffect(()=>{
    const fetchdata = async()=>{
        try{
            setloader(true)
            let response =  await axios.get(URL)
            setraw(response.data)
            console.log(response.data)
        }catch(e){
            console.log("Error while fetching the data")
        }
      }
      fetchdata()
      setloader(false)
     
  },[])
  return (
    <>
    <BrowserRouter>
     <div className='parent bg-purple-600 flex items-center justify-evenly relative'>
      <img className='w-14 h-14' src={logo} alt="" />
     <NavLink className="test " to="/">Home</NavLink>
     <NavLink className="test" to="/products">Products</NavLink>
     <FaCartShopping className='check text-white mt-2' />
     <p className='para absolute right-[16%] top-[0%] text-xl  text-black '>{newstate.length}</p>
     </div>

      <Routes>
         <Route path='/' element={<Home loader={loader} clickHandler={clickHandler} raw={raw}/>}></Route>
         <Route path="/products" element={<Products newstate={newstate} removeHandler={removeHandler} />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App