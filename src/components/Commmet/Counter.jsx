
import {BiSolidUpArrow, BiSolidDownArrow} from 'react-icons/bi'
import { useState } from 'react';

const Counter = ({vote}) => {

    const [count, setCount] = useState(vote)
    return (
      <div className="flex flex-col opacity-50 items-center">
        <button onClick={() => setCount(count+1)} className='bg'><BiSolidUpArrow/></button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count-1)}><BiSolidDownArrow/></button>
      </div>
    )
}

export default Counter