import React, { useState } from 'react'

const UseState = () => {
    //! Hook : like Function used to implement Life-Cycle and state inside functional component
    // let count = 0
    let [count, setCount] = useState([0])
    //! useState : Hook used to implement state inside functional component. It return a variable to store value and a funtion to update that value 


    const handleIncrement = () => {
        // count = count + 1
        setCount(++count)
    }

    const handledecrement = () => {
        setCount(--count)
    }

    const handleReset = () => {
        setCount(count = 0)
    }

    return (
        <>
            <div>Count : {count}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handledecrement}>Decrement</button>
        </>
    )
}

export default UseState