export interface Meal {
    _id?: string
    name: string
    category: 'Starter' | 'Main' | 'SideStepper'
    cuisine: string
    dietType?: string[] // e.g., Vegetarian, Vegan, Keto
    description?: string
    imageURL?: string
    nutritionDetails?: {
      calories?: number
      protein?: number
      carbs?: number
      fats?: number
    }
    createdAt?: Date
  }