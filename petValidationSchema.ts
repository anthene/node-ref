import { JSONSchemaType } from "ajv/dist/types/json-schema"

import type Pet from "./Pet"
import type { PetTypes, PetType } from "./PetTypes"
import { nameRegex } from "./nameRegex"

const petTypes: PetTypes = [ "cat", "dog", "turtle" ]

const petTypeValidationSchema: JSONSchemaType<PetType> = {
    type: "string",
    enum: petTypes,
}

const petValidationSchema: JSONSchemaType<Pet> = {
    type: "object",
    properties: {
        name: {
            type: "string",
            pattern: nameRegex,
        },
        type: petTypeValidationSchema,
    },
    required: [ "name", "type" ],
    additionalProperties: false,
}

export default petValidationSchema
