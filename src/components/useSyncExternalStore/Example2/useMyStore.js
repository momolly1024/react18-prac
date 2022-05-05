import { useSyncExternalStore } from 'react'
import createStore from './createStore'

const initialState = {
    count: 0,
    text: 'milkmidi',
}

const store = createStore(initialState)

const loop = (v) => v
export default function useTodoStore(selector = loop) {
    return useSyncExternalStore(store.subscribe, () =>
        selector(store.getSnapshot())
    )
}

export const { setState } = store
