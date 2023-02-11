import { Observable } from "rxjs"

function getNum() {
    return 1
}

function* getNums(): Generator<number> {
    yield 2
    yield 3
    yield 4
}

const period = 5000

const getNumPromise = new Promise<number>(resolve => {
    setTimeout(() => resolve(5), period)
})

const getNumsObservable = new Observable<number>(subscriber => {
    setTimeout(() => {
        subscriber.next(6)

        setTimeout(() => {
            subscriber.next(7)

            setTimeout(() => {
                subscriber.next(8)

                setTimeout(() => {
                    subscriber.complete()
                }, period)
            }, period)
        }, period)
    }, period)
})

function* getNumsPromises() {
    yield new Promise<number>(resolve => {
        setTimeout(() => resolve(9), period)
    })
    yield new Promise<number>(resolve => {
        setTimeout(() => resolve(10), period)
    })
    yield new Promise<number>(resolve => {
        setTimeout(() => resolve(11), period)
    })
}

export default async function () {
    console.log(getNum())

    Array.from(getNums()).forEach(num => console.log(num))
    // the same as:
    // for (const num of getNums()) {
    //     console.log(num)
    // }

    getNumPromise.then(num => console.log(num))
    // the same as:
    // const num = await getNumPromise
    // console.log(num)

    getNumsObservable.subscribe(num => console.log(num))

    Array.from(getNumsPromises()).forEach(numPromise => numPromise.then(num => console.log(num)))
    // the same as:
    // for await (const num of getNumsPromises()) {
    //     console.log(num)
    // }
}
