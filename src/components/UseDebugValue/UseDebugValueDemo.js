import React, { useState, useDebugValue } from 'react'

const useCustomHook = () => {
    const [count, setCount] = useState(0)
    useDebugValue(`My Count: ${count}`)
    return [count, setCount]
}

function UseDebugValueDemo() {
    const [count, set] = useCustomHook()
    return (
        <>
            UseDebugValueDemo
            <pre>{count}</pre>
            <button onClick={() => set((c) => c + 1)}>Press me</button>
        </>
    )
}

export default UseDebugValueDemo
