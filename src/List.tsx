import { useState } from "react"

import Item from "./Item"
import AppContext from "./AppContext"

export default function () {
    const [items, setItems] = useState<{ key: string, clickCount: number }[]>([])
    const appContextDataState = useState<number>(0)
    const [maxClickCount] = appContextDataState

    function add() {
        items.push({ key: new Date().toISOString(), clickCount: 0 })
        setItems([...items])
    }

    return (
        <AppContext.Provider value={appContextDataState}>
            <p onClick={add}>Add</p>
            <ul>
                {items.map(({ key }) => <Item key={key} />)}
            </ul>
            <p>Max click count: {maxClickCount}</p>
        </AppContext.Provider>
    )
}