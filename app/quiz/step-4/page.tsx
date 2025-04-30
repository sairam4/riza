'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import { useQuiz } from "@/app/context/QuizContext"

export default function Step4() {
  const router = useRouter()
  const { mealsPerWeek } = useQuiz()
  console.log("mealsPerWeek in Step 4:", mealsPerWeek)
  const [selected, setSelected] = useState<string | null>(null)

  const goals = ["Weight Loss", "Muscle Gain", "Balanced Diet", "Just Eat Better"]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fef6ec] text-center px-4">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-4">What is your goal?</h1>
        <p className="text-secondary text-lg mb-10">Let us know how we can support your journey.</p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {goals.map(goal => (
            <button
              key={goal}
              onClick={() => setSelected(goal)}
              className={clsx(
                "transition-all duration-300 transform px-6 py-4 text-xl font-semibold rounded-lg shadow-md cursor-pointer transition-colors",
                selected === goal
                  ? "bg-[#d86642] text-white scale-105 text-[1.2rem]"
                  : "btn-primary hover:bg-[#e3a683] hover:text-white"
              )}
            >
              {goal}
            </button>
          ))}
        </div>

        {selected && (
          <Button
            className="btn-secondary text-xl px-10 py-4 rounded-full mt-4 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={() => router.push('/quiz/step-5')}
          >
            Next →
          </Button>
        )}
      </div>
    </div>
  )
}