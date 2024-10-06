'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../_lib/hooks/ReduxHooks'
import { decrement, increment } from '../_lib/redux/features/counter/counterSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Counter = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
  return (
    <div>
    <button
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
    >
      Increment
    </button>
    <span>{count}</span>
    <button
        aria-label="Decrement value"
        className='bg-primary-300 text-black hover:bg-primary-400'
        onClick={() => dispatch(decrement())}
    >
      Decrease
    </button>
<FontAwesomeIcon icon={faEnvelope} />
  </div>
  )
}

export default Counter
