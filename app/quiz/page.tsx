'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function QuizIntro() {
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fef6ec] text-center px-4">
      <h1 className="text-4xl font-bold text-primary mb-6">Let’s personalize your meal plan</h1>
      <p className="text-secondary text-lg max-w-xl mb-8">
        Answer a few quick questions so we can recommend meals tailored to your needs and preferences.
      </p>
      <Button
        className="btn-secondary text-xl px-10 py-5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
        onClick={() => router.push('/quiz/step-1')}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Start Quiz {isHovering ? '🤌' : '→'}
      </Button>
    </div>
  )
}