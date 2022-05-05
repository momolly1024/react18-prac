import { useSyncExternalStore } from 'react'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3Reducer from './Example3Reducer'

function DemoUseSyncExternalStore() {
    // const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot]);
    const width = useSyncExternalStore(
        (listener) => {
            window.addEventListener('resize', listener)
            return () => {
                window.removeEventListener('resize', listener)
            }
        },
        () => window.innerWidth
        // () => -1,
    )
    return (
        <div>
            <h1>DemoUseSyncExternalStore</h1>

            <div>
                <Example1 />
                <Example2 />
                <Example3Reducer />
            </div>
            <div>
                <p> --- 2 ---</p>
                <p>Size: {width}</p>;
            </div>
        </div>
    )
}

export default DemoUseSyncExternalStore
