export interface User {
    _id?: string
    name: string
    email: string
    passwordHash: string
    preferences?: {
      servingsPerMeal: number
      mealsPerWeek: number
      dietaryRestrictions: string[]
      goals: string[]
      preferredCuisines: string[]
      allergies?: string[]
      dislikes?: string[]
    }
    createdAt?: Date
    updatedAt?: Date
  }