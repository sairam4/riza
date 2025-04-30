export interface Cook {
    _id?: string
    name: string
    bio: string
    specialties: string[]
    availability: {
      date: string // e.g., '2025-04-28'
      slots: string[] // e.g., ['9:00 AM', '12:00 PM']
    }[]
    createdAt?: Date
  }