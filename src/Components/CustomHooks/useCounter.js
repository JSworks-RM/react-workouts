import React, { useState, useEffect } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0)

    function increase () {
        setCount(count + 1)
    }

    function decrease () {
        setCount(count - 1)
    }

    useEffect (() => {
        console.log(count)
    }, [count])

    return {
        increase,
        decrease,
        count
    }
}

export default useCounter