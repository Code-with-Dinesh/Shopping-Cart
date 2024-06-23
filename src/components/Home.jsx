
import Spinner from './Spinner';
import Cart from './Cart';
const Home = ({loader,raw,clickHandler}) => {
  
  return (
    <div className='home bg-slate-500 p-4 flex flex-wrap gap-5 justify-center '>
      {
        loader == true ? (<Spinner/>) : (
             raw.map((item,index)=> <Cart key={index} item={item} clickHandler={clickHandler} index={index}/>)
        )
      }
    </div>
  )
}

export default Home