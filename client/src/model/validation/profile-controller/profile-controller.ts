/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  z as zod
} from 'zod'

export const updateProfileParams = zod.object({
  "id": zod.number()
})

export const updateProfileBody = zod.object({
  "firstName": zod.string(),
  "lastName": zod.string(),
  "email": zod.string(),
  "password": zod.string(),
  "role": zod.string().optional(),
  "isAuthor": zod.boolean().optional()
})

export const addProfileBody = zod.object({
  "firstName": zod.string(),
  "lastName": zod.string(),
  "email": zod.string(),
  "password": zod.string(),
  "role": zod.string().optional(),
  "isAuthor": zod.boolean().optional()
})

export const getProfileParams = zod.object({
  "id": zod.number()
})

export const findAllProfilesQueryParams = zod.object({
  "firstName": zod.string().optional()
})

export const deleteProfileParams = zod.object({
  "id": zod.number()
})
