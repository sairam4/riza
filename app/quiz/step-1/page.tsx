'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import clsx from 'clsx'

export default function Step1() {
  const router = useRouter()
  const [selected, setSelected] = useState<number | string | null>(null)

  const options = [1, 2, 3, 4, 5, '6+']

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fef6ec] px-4 text-center">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-4">How many people are you cooking for?</h1>
        <p className="text-secondary text-lg mb-10">Choose the number of servings per meal.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(option)}
              className={clsx(
                "transition-all duration-300 transform px-6 py-4 text-xl font-semibold rounded-lg shadow-md cursor-pointer transition-colors",
                selected === option
                  ? "bg-[#d86642] text-white scale-105"
                  : "btn-primary hover:bg-[#e3a683] hover:text-white"
              )}
            >
              {option}
            </button>
          ))}
        </div>

        {selected && (
          <Button
            className="btn-secondary text-xl px-10 py-4 rounded-full mt-4 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => router.push('/quiz/step-2')}
          >
            Next →
          </Button>
        )}
      </div>
    </div>
  )
}