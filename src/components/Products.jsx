import React from 'react'
import delimg from '../images/delete.png'
const Products = ({newstate,removeHandler}) => {
    console.log(newstate)
    
  return (

    <div className='w-full testing  p-4 bg-gray-300 flex-col flex  relative '>
          {
            newstate.length == 0?(<div className='text-4xl  '>
              <div className='flex flex-col bg-gray-300 h-screen items-center justify-center'>
                <p>Cart is Empty</p>
                <img className='w-32 h-32 mt-5' src={delimg} alt="" />
              </div>
              </div>):(
              newstate.map((newstate)=>(<div key={newstate.id} className='grand'>
                <div className='bg-gray-400 flex-col mb-4 gap-5 rounded-lg border-2 p-4 max-w-[40%]'>
                        <img className='w-52 h-52' src={newstate.image} alt="not oa" />
                        <p className='title mt-4'>{newstate.title}</p>
                        <p className='price  text-green-900 text-xl'>${newstate.price}</p>
                        <button onClick={()=>removeHandler(newstate)} className='bg-black px-3 py-2 mt-2 text-lg rounded-md text-white'>Remove to cart</button>
               </div>
         </div>))
            )
          },
           {
             newstate.length ==0 ?(<div></div>):(
              <div className='absolute right-[20%]'>
           <h1 className='text-4xl text-green-500 font-bold'>Your Summay</h1>
           <p className='mt-4 text-xl'>Total Price :  ${newstate.reduce((total,item)=>total +item.price,0).toFixed(2)}</p>
             
           </div>
            )
           }
          
        
    </div>
  )
}

export default Products