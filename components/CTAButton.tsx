'use client'

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function CTAButton() {
  const router = useRouter()

  return (
    <div className="bg-[#fefaf3] py-16 flex justify-center">
      <Button
        onClick={() => router.push('/quiz')}
        className="text-xl px-10 py-5 bg-[#d86642] hover:bg-[#c95435] text-white font-semibold rounded-full shadow-lg transition-all cursor-pointer"
      >
        Take the Quiz →
      </Button>
    </div>
  )
}