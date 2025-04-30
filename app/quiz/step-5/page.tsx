'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import { useQuiz } from "@/app/context/QuizContext"

export default function Step5() {
  const router = useRouter()
  const { mealsPerWeek } = useQuiz()
  console.log("mealsPerWeek in Step 5:", mealsPerWeek)
  const [selected, setSelected] = useState<string | null>(null)

  const allergies = ["Nuts", "Dairy", "Eggs", "None"]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#fef6ec]">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-6">Any allergies we should know about?</h1>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {allergies.map((allergy) => (
            <button
              key={allergy}
              onClick={() => setSelected(allergy)}
              className={clsx(
                "transition-all duration-300 transform px-6 py-4 text-xl font-semibold rounded-lg shadow-md cursor-pointer transition-colors",
                selected === allergy
                  ? "bg-[#d86642] text-white scale-105 text-[1.2rem]"
                  : "btn-primary hover:bg-[#e3a683] hover:text-white"
              )}
            >
              {allergy}
            </button>
          ))}
        </div>

        {selected && (
          <Button
            className="btn-secondary text-xl px-10 py-4 rounded-full mt-4 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={() => router.push('/quiz/dishes')}
          >
            Next →
          </Button>
        )}
      </div>
    </div>
  )
}