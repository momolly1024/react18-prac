import './App.css'
import CallBackTutorial from './components/UseCallback/CallbackTutorial'
import ContextTutorial from './components/UseContext/ContextTutorial'
import UseDebugValueDemo from './components/UseDebugValue/UseDebugValueDemo'
import UseDeferredValue from './components/UseDeferredValue/UseDeferredValue'
import EffectTutorial from './components/UseEffect/EffectTutorial'
import UseIdDemo from './components/UseId/UseIdDemo'
import ImperativeHandle from './components/UseImperativeHandle/ImperativeHandle'
import UseInsertionEffect from './components/UseInsertionEffect/UseInsertionEffect'
import MemoTutorial from './components/UseMemo/MemoTutorial'
import ReducerTutorial from './components/UseReducer/ReducerTutorial'
import RefTutorial from './components/UseRef/RefTutorial'
import StateTutorial from './components/UseState/StateTutorial'
import DemoUseSyncExternalStore from './components/useSyncExternalStore/DemoUseSyncExternalStore'
import UseTransition from './components/UseTransition/UseTransition'
import UseTransition2 from './components/UseTransition/UseTransition2'
import UseTransitionDemo from './components/UseTransition/UseTransitionDemo'

function App() {
    return (
        <div className='App'>
            <div className='container mx-auto'>
                {/* <EffectTutorial /> */}
                {/* <ReducerTutorial/> */}
                {/* <StateTutorial/> */}
                {/* <ContextTutorial/> */}
                {/* <ImperativeHandle/> */}
                {/* <RefTutorial/> */}
                {/* <MemoTutorial /> */}
                {/* <CallBackTutorial/> */}
                {/* <DemoUseSyncExternalStore /> */}
                {/* <UseIdDemo /> */}
                {/* <UseDebugValueDemo /> */}
                {/* <UseTransition /> */}
                {/* <UseTransition2 /> */}
                <UseTransitionDemo />
                {/* <UseDeferredValue /> */}
                <UseInsertionEffect />
            </div>
        </div>
    )
}

export default App
