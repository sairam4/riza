'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type QuizContextType = {
  mealsPerWeek: number
  setMealsPerWeek: (n: number) => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [mealsPerWeek, setMealsPerWeek] = useState<number>(3)

  return (
    <QuizContext.Provider value={{ mealsPerWeek, setMealsPerWeek }}>
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => {
  const context = useContext(QuizContext)
  if (!context) throw new Error('useQuiz must be used within QuizProvider')
  return context
}