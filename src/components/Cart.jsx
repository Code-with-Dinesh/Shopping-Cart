import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = ({item,index,clickHandler}) => {
  return (
    <div className='grand rounded-md  flex  border-2 gap-9 w-[20%] flex-wrap'>
        <div className='parent-box bg-gray-300   w-full flex justify-between flex-col relative '>
            <img className='w-52 p-4 h-52 rounded-md' src={item.image} alt="not oa" />
            <p className='title ml-2'>{item.title}</p>
            <p className='price  mb-4 text-green-700 text-xl  mt-4 ml-2'>$ {item.price}</p>
           <button className="bg-blue-900 mb-2 text-white w-1/2 rounded-lg   py-1 absolute bottom-0 right-2" onClick={()=>clickHandler(item)} >Add to cart</button>
        </div>
       
    </div>
  )
}

export default Cart