export interface Booking {
    _id?: string
    userId: string
    cookId: string
    date: string
    timeSlot: string
    selectedMeals: {
      mealId: string
      category: 'Starter' | 'Main' | 'SideStepper'
    }[]
    status: 'Scheduled' | 'Completed' | 'Cancelled'
    createdAt?: Date
    updatedAt?: Date
  }