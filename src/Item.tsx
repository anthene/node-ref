import { useState } from "react"

interface ItemProps {
    clickCount: number
    maxClickCount: number
    maxClickCountChange(newValue: number): void
}

export default function (props: ItemProps) {
    const [clickCount, setClickCount] = useState(props.clickCount)
    const { maxClickCount, maxClickCountChange } = props

    function increaseClickCount() {
        const newMaxClickCount = clickCount + 1
        setClickCount(newMaxClickCount)
        if (newMaxClickCount > maxClickCount)
            maxClickCountChange(newMaxClickCount)
    }

    return (
        <li onClick={() => increaseClickCount()}>
            Click count: {clickCount}{maxClickCount > clickCount ? "" : " (it is max value)"}
        </li>
    )
}