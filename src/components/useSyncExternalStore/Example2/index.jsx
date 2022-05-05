import React from 'react'
import RenderTip from '../RenderTip'
import useMyStore, { setState } from './useMyStore'

const CountOnlyChild = React.memo(() => {
    // 不會有多餘的 render 也，好神
    const count = useMyStore((state) => state.count)
    return (
        <section data-name='store.count'>
            <RenderTip />
            <h3>store.count:{count}</h3>
        </section>
    )
})

const Example = () => {
    const state = useMyStore()
    return (
        <section data-name='Example2'>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button
                className='my-btn'
                onClick={() => {
                    setState((prevState) => ({
                        count: prevState.count + 1,
                    }))
                }}
            >
                increment
            </button>
            <button
                className='my-btn'
                onClick={() => {
                    setState({
                        text: Date.now() + '',
                    })
                }}
            >
                text
            </button>
            <CountOnlyChild />
        </section>
    )
}

export default Example
