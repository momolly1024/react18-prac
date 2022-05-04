import './App.css'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3Reducer from './components/Example3Reducer'

function App() {
    return (
        <div className='App'>
            <div className='container mx-auto'>
                <Example1 />
                <Example2 />
                <Example3Reducer />
            </div>
        </div>
    )
}

export default App
