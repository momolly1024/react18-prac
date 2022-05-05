import { useState, useDeferredValue, useEffect, useTransition } from 'react'
const words = [
    'pattern',
    'pay',
    'peace',
    'people',
    'per',
    'perform',
    'performance',
    'perhaps',
    'yard',
    'yeah',
    'year',
    'yes',
    'yet',
    'you',
    'young',
    'your',
    'yourself',
]

const WordsList = ({ words }) => {
    return (
        <div>
            {words.map((word) => (
                <div key={word}>{word}</div>
            ))}
        </div>
    )
}

const getWordsFor = (searchedText) =>
    words.filter(
        (word) => word.toLowerCase().indexOf(searchedText.toLowerCase()) !== -1
    )
const someHugeAsyncBlockTask = () => {
    setTimeout(() => {
        wait(2500)
    })
}

const wait = (ms) => {
    let start = Date.now(),
        now = start
    while (now - start < ms) {
        now = Date.now()
    }
}
function UseTransition2() {
    const [searchText, setSearchText] = useState('')
    const deferredSearchText = useDeferredValue(searchText)
    const [words, setWords] = useState([])
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        someHugeAsyncBlockTask()
        startTransition(() => {
            const newWords = getWordsFor(deferredSearchText)
            setWords(newWords)
        })
    }, [deferredSearchText, startTransition])

    const onSearchTextChange = (event) => setSearchText(event.target.value)

    return (
        <div className='App'>
            <div className='input-block'>
                <span>Search : </span>
                <input value={searchText} onChange={onSearchTextChange} />
            </div>
            <h2>SearchText entered: {deferredSearchText}</h2>
            {!isPending && <WordsList words={words} />}
            {isPending && <div>Loading words...</div>}
        </div>
    )
}

export default UseTransition2
