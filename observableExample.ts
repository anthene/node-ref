import { Observable, Observer, Subscriber } from "rxjs"

export default function () {
    const subscribe = (subscriber: Subscriber<number>) => {
        try {
            subscriber.next(1)
            subscriber.next(2)
            subscriber.next(3)
            subscriber.complete()
            subscriber.next(4) // will not be printed
        } catch (error: unknown) {
            subscriber.error(error)
        }
    }
    const observable = new Observable<number>(subscribe)

    const observer1: Observer<number> = {
        next(num) {
            console.log({ num })
        },
        error(num) {
            console.error({ num })
        },
        complete() {
            console.log("complete!")
        }
    }

    const observer2: Partial<Observer<number>> = {
        next(num) {
            console.log(`Message from second observer: ${num}`)
        }
    }

    console.log("start")
    const subscription1 = observable.subscribe(observer1)
    const subscription2 = observable.subscribe(observer2)
    console.log("end")
    subscription1.unsubscribe()
    subscription2.unsubscribe()
}
