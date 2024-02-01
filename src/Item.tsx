import { useContext, useState } from "react"

import AppContext from "./AppContext"

export default function () {
    const [clickCount, setClickCount] = useState(0)
    const [maxClickCount, setAppContextData] = useContext(AppContext)

    function increaseClickCount() {
        const newMaxClickCount = clickCount + 1
        setClickCount(newMaxClickCount)
        if (newMaxClickCount > maxClickCount)
            setAppContextData(newMaxClickCount)
    }

    return (
        <li onClick={() => increaseClickCount()}>
            Click count: {clickCount}{maxClickCount > clickCount ? "": " (it is max value)"}
        </li>
    )
}