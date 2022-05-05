import React, { useState, useDeferredValue, useMemo } from 'react'
import { faker } from '@faker-js/faker'
import styles from './style.module.css'

// const fakeNames = Array.from(Array(10000), () => {
//     return faker.name.findName()
// })

const fakeNames = Array.from(Array(10), () => {
    return faker.name.findName()
})

function ListItem({ name, highlight }) {
    const index = name.toLowerCase().indexOf(highlight.toLowerCase())
    if (index < 0) {
        return <div>{name}</div>
    }
    return (
        <div>
            {name.slice(0, index)}
            <span className={styles.highlight}>
                {name.slice(index, index + highlight.length)}
            </span>
            {name.slice(index + highlight.length)}
        </div>
    )
}

function UseDeferredValue() {
    const [query, setQuery] = useState('')
    const deferredQuery = useDeferredValue(query)

    const changeHandler = ({ target: { value } }) => {
        setQuery(value)
    }
    const List = useMemo(() => {
        return fakeNames.map((name, i) => (
            <ListItem key={i} name={name} highlight={deferredQuery} />
        ))
    }, [deferredQuery, fakeNames])

    //  2 ----
    const SlowUI = () => (
        <>
            {Array(50000)
                .fill(1)
                .map((_, index) => (
                    <span key={index}>{100000} </span>
                ))}
        </>
    )
    const [value, setValue] = useState(0)
    const deferredValue = useDeferredValue(value)
    const handleClick = () => {
        setValue(value + 1)
    }
    return (
        <div>
            <div>
                {' '}
                可以讓你延遲屏幕上不那麼重要的部分的更新
                <input onChange={changeHandler} value={query} type='text' />
                deferredQuery: {deferredQuery}
                {List}
            </div>
            <div>
                <p> -- 2 -- </p>
                <button onClick={handleClick}>{value}</button>
                <div>DeferredValue: {deferredValue}</div>
                <div>
                    <SlowUI />
                </div>
            </div>
        </div>
    )
}

export default UseDeferredValue
