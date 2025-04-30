'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import clsx from 'clsx'
import { useQuiz } from "@/app/context/QuizContext"

export default function Step2() {
  const router = useRouter()
  const [selected, setSelected] = useState<number | null>(null)
  const { setMealsPerWeek } = useQuiz()

  const options = [2, 3, 5, 7]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fef6ec] px-4 text-center">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-4">How many meals per week?</h1>
        <p className="text-secondary text-lg mb-10">Select your weekly meal frequency.</p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {options.map((num, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(num)}
              className={clsx(
                "transition-all duration-300 transform px-6 py-4 text-xl font-semibold rounded-lg shadow-md cursor-pointer transition-colors",
                selected === num
                  ? "bg-[#d86642] text-white scale-105 text-[1.3rem]"
                  : "btn-primary hover:bg-[#e3a683] hover:text-white"
              )}
            >
              {num}
            </button>
          ))}
        </div>

        {selected && (
          <Button
            className="btn-secondary text-xl px-10 py-4 rounded-full mt-4 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={() => {
              if (selected) {
                console.log("Setting mealsPerWeek to:", selected)
                setMealsPerWeek(selected)
              }
              router.push('/quiz/step-3')
            }}
          >
            Next →
          </Button>
        )}
      </div>
    </div>
  )
}