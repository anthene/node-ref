import { useState } from "react"

import Item from "./Item"

export default function () {
    const [val, setVal] = useState(false)
    function forceUpdate() {
        setVal(!val)
    }
    const [items, setItems] = useState<{ key: string, clickCount: number }[]>([])
    const [maxClickCount, maxClickCountChange] = useState(0)
    const maxClick = { maxClickCount, maxClickCountChange }

    function add() {
        items.push({ key: new Date().toISOString(), clickCount: 0 })
        setItems(items)
        forceUpdate()
    }

    return (
        <>
            <p onClick={add}>Add</p>
            <ul>
                {items.map(item => <Item {...item} {...maxClick} />)}
            </ul>
            <p>Max click count: {maxClickCount}</p>
        </>
    )
}