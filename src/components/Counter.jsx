import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className='flex flex-col justify-center items-center mx-auto my-[250px]' >
      <button className='border-2 py-2 px-2 rounded-md bg-red-300 text-black hover:bg-red-800 hover:text-white  color text-center transition-all'
      onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <br/>
      <br/>

      <div>{count}</div>

      <br/>
      <br/>

      <button className='border-2 py-2 px-2 rounded-md bg-red-300 text-black hover:bg-red-800 hover:text-white  color text-center transition-all'
      onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
