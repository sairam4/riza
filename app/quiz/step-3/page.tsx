'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import clsx from 'clsx'
import { useQuiz } from "@/app/context/QuizContext"

export default function Step3() {
  const router = useRouter()
  const { mealsPerWeek } = useQuiz()
  console.log("mealsPerWeek in Step 3:", mealsPerWeek)
  const [selected, setSelected] = useState<string | null>(null)

  const options = ["Vegetarian", "Vegan", "Gluten-Free", "None"]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fef6ec] px-4 text-center">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-4">Any dietary restrictions?</h1>
        <p className="text-secondary text-lg mb-10">Let us know if we need to avoid anything.</p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {options.map(option => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={clsx(
                "transition-all duration-300 transform px-6 py-4 text-xl font-semibold rounded-lg shadow-md cursor-pointer transition-colors",
                selected === option
                  ? "bg-[#d86642] text-white scale-105 text-[1.2rem]"
                  : "btn-primary hover:bg-[#e3a683] hover:text-white"
              )}
            >
              {option}
            </button>
          ))}
        </div>

        {selected && (
          <Button
            className="btn-secondary text-xl px-10 py-4 rounded-full mt-4 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={() => router.push('/quiz/step-4')}
          >
            Next →
          </Button>
        )}
      </div>
    </div>
  )
}