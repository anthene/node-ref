import Ajv from "ajv"

import type Person from "./Person"
import { personValidationSchema } from "./personValidationSchema"

const ajv = new Ajv({ allErrors: true })
const validatePerson = ajv.compile(personValidationSchema)

// incorrect name format
const personWithIncorrectName: Person = {
    firstName: "John ",
    lastName: "Smith",
}

if (!validatePerson(personWithIncorrectName))
    console.error(validatePerson.errors)

// missing property
const personWithMissingProperty: Omit<Person, "lastName"> = {
    firstName: "John ",
}

if (!validatePerson(personWithMissingProperty))
    console.error(validatePerson.errors)

// extra property
const personWithExtraProperty: Person & { age: number } = {
    firstName: "John ",
    lastName: "Smith",
    age: 30,
}

if (!validatePerson(personWithExtraProperty))
    console.error(validatePerson.errors)
