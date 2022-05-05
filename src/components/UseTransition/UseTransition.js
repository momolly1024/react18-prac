import React, { useState, useTransition, useDeferredValue } from 'react'
function generateProducts() {
    const products = []
    for (let i = 0; i < 10000; i++) {
        products.push(`Product ${i + 1}`)
    }
    return products
}

const dummyProducts = generateProducts()

function filterProducts(filterTerm) {
    if (!filterTerm) {
        return dummyProducts
    }
    return dummyProducts.filter((product) => product.includes(filterTerm))
}
function ProductList({ products }) {
    const deferredProducts = useDeferredValue(products)
    return (
        <ul>
            {deferredProducts.map((product,i) => (
                <li key={i}>{product}</li>
            ))}
        </ul>
    )
}
function UseTransition() {
    const [isPending, startTransition] = useTransition()
    const [filterTerm, setFilterTerm] = useState('')

    const filteredProducts = filterProducts(filterTerm)

    function updateFilterHandler(event) {
        startTransition(() => {
            setFilterTerm(event.target.value)
        })
    }
    return (
        <div>
            UseTransition
            <input type='text' onChange={updateFilterHandler} />
            {isPending && <p>Updating List...</p>}
            <ProductList products={filteredProducts} />
        </div>
    )
}

export default UseTransition
