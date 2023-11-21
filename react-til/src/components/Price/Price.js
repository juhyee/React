import React, { useState } from 'react'
import Mart from './Mart'

const initialItems = {
    drink: [
        { name: "Powerade", price: "1800" },
        { name: "Coca Cola", price: "1100" },
    ],
    fruits: [
        { name: "Apple", price: "3500" },
        { name: "Grape", price: "6000" },
    ],
};

function Price() {
    const [items, setItems] = useState(initialItems)

    const addDrink = (newDrink) => {
        setItems({...items, drink: [...items.drink, newDrink] })
        console.log(i)
    }
    return (
        <>
            <h1>마트</h1>
            <Mart />
        </>
    )
}

export default Price