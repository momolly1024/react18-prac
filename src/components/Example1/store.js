// https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore
const store = {
    state: {
        count: 0,
        text: 'milkmidi',
        someData: ['vue', 'react'],
    },
    setState: (fnOrState) => {
        const newState =
            typeof fnOrState === 'function' ? fnOrState(store.state) : fnOrState
        store.state = {
            ...store.state,
            ...newState,
        }
        store.listeners.forEach((listener) => {
            listener()
        })
    },
    listeners: new Set(),
    subscribe: (callback) => {
        store.listeners.add(callback)
        return () => {
            store.listeners.delete(callback)
        }
    },
    getSnapshot: () => store.state,
}
export default store
