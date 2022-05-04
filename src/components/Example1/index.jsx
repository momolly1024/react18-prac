import React, { useSyncExternalStore } from 'react'
import RenderTip from '../RenderTip'
import store from './store'

// https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js
// https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.new.js#L1265-L1355

const CountOnlyChildData = React.memo(() => {
    // 不會有多餘的 render 也，好神
    const text = useSyncExternalStore(
        store.subscribe,
        () => store.getSnapshot().text
    )
    return (
        <section data-name='store.text'>
            <RenderTip />
            <h3>store.text:{text}</h3>
        </section>
    )
})
const CountOnlyChild = React.memo(() => {
    // 不會有多餘的 render 也，好神
    const count = useSyncExternalStore(
        store.subscribe,
        () => store.getSnapshot().count
    )
    return (
        <section data-name='store.count'>
            <RenderTip />
            <h3>store.count:{count}</h3>
        </section>
    )
})

const Example = () => {
    const state = useSyncExternalStore(store.subscribe, store.getSnapshot)
    return (
        <section data-name='Example1'>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button
                className='my-btn'
                onClick={() => {
                    store.setState((prevState) => ({
                        count: prevState.count + 1,
                    }))
                }}
            >
                increment
            </button>
            <button
                className='my-btn'
                onClick={() => {
                    store.setState({
                        text: `${Date.now()}`,
                    })
                }}
            >
                text
            </button>
            <CountOnlyChild />
            <CountOnlyChildData />
        </section>
    )
}

export default Example
