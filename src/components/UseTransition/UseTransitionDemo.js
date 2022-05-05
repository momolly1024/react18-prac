import React, { Suspense, useState, useTransition } from 'react'
// import { startTransition } from 'react';

function UseTransitionDemo() {
    const [value, setValue] = useState('')
    const [isPending, startTransition] = useTransition()

    const handleChange = (e) => {
        startTransition(() => setValue(e.target.value))
    }

    // --- 2 ---
    const [value1, setValue1] = useState(0)

    const [value2, setValue2] = useState(100000)

    const SlowUI = ({ value }) => (
        <>
            {Array(value)
                .fill(1)
                .map((_, index) => (
                    <span key={index}>{value - index} </span>
                ))}
        </>
    )
    const handleClick = () => {
        setValue1(value1 + 1)
        startTransition(() => setValue2(value2 + 1))
    }

    return (
        <div>
            <p>
                useTransition 就像一個時光隧道,
                讓組件進入一個平行宇宙，在這個平行宇宙中等待異步狀態(異步請求、延時、whatever)就緒。當然組件也不能無限期待在平行宇宙，useTranstion
                可以配置超時時間，如果超時了，就算異步狀態未就緒也會被強制拉回現實世界。回到現實世界後，React
                會立即對組件 Pengding 的變更進行合併，呈現在用戶面前。
            </p>
            <input onChange={handleChange} />
            {isPending && <div>transition...</div>}
            {!isPending && (
                <div>
                    {Array(50000)
                        .fill('a')
                        .map((item) => (
                            <div>{value}</div>
                        ))}
                </div>
            )}
            <p> --- 2 --- </p>
            <button onClick={handleClick}>{value1}</button>
            <div
                style={{
                    opacity: isPending ? 0.5 : 1,
                }}
            >
                <SlowUI value={value2} />
            </div>
        </div>
    )
}

export default UseTransitionDemo
