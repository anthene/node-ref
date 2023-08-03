import type { JSONSchemaType } from "ajv/dist/types/json-schema"

import type Person from "./Person"
import petValidationSchema from "./petValidationSchema"
import { nameRegex } from "./nameRegex"

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
        pets: {
            type: "array",
            items: petValidationSchema,
            nullable: true,
        }
    },
    required: [ "firstName", "lastName" ],
    additionalProperties: false,
}
