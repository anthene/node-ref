import type { JSONSchemaType } from "ajv/dist/types/json-schema"

import type Person from "./Person"

const nameRegex = "^[A-Z][a-z]+$"

export const personValidationSchema: JSONSchemaType<Person> = {
    type: "object",
    properties: {
        firstName: {
            type: "string",
            pattern: nameRegex,
        },
        lastName: {
            type: "string",
            pattern: nameRegex,
        },
        hobby: {
            type: "string",
            nullable: true,
        },
    },
    required: [ "firstName", "lastName" ],
    additionalProperties: false,
}
