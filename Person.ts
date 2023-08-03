import Pet from "./Pet"

export default interface Person {
    firstName: string
    lastName: string
    hobby?: string
    pets?: Pet[]
}
