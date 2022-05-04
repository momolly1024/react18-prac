import React from 'react'
import useReducerStore, { dispatch } from './useReducerStore'
import RenderTip from '../RenderTip'

const CountOnlyChild = React.memo(() => {
    // 不會有多餘的 render 也，好神
    const count = useReducerStore((state) => state.count)
    return (
        <section data-name='store.count'>
            <RenderTip />
            <h3>store.count:{count}</h3>
        </section>
    )
})

const Example = () => {
    const state = useReducerStore()
    return (
        <section data-name='Example3'>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button
                className='my-btn'
                onClick={() => {
                    dispatch({ type: 'increment' })
                }}
            >
                increment
            </button>
            <button
                className='my-btn'
                onClick={() => {
                    dispatch({ type: 'text', payload: Date.now() + '' })
                }}
            >
                text
            </button>
            <CountOnlyChild />
        </section>
    )
}

export default Example
