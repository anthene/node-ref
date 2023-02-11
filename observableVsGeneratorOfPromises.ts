import { Observable } from "rxjs"

const iterator: Iterator<number> & { item: number } = {
    item: 0,
    next() {
        iterator.item ++
        return {
            value: iterator.item,
            done: iterator.item < 4,
        }
    },
    return() {

    }
}

const period = 3000
function* getNums() {
    yield 1
    console.log("next num")
    yield 2
    console.log("next num")
    yield 3
    return "end"
}

function* getNumsPromises() {
    yield new Promise<number>(resolve => {
        setTimeout(() => resolve(1), period)
    })
    console.log("next promise")
    yield new Promise<number>(resolve => {
        setTimeout(() => resolve(2), period)
    })
    console.log("next promise")
    yield new Promise<number>(resolve => {
        setTimeout(() => resolve(3), period)
    })
}

const observable = new Observable<number>(subscriber => {
    subscriber.next(4)
    console.log("next item")
    subscriber.next(5)
    console.log("next item")
    subscriber.next(6)
    subscriber.complete()
})

export default async function() {
    for (const num of getNums()) {
        console.log(num)
    }

    console.log("----------")

    for await (const num of getNumsPromises()) {
        console.log(num)
    }

    console.log("----------")

    observable.subscribe(num => console.log(num))
}
