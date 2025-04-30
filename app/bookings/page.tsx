'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

const dates = ["Tomorrow", "Day After", "Next Monday"]
const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"]
const cooks = ["Cook A", "Cook B", "Auto-Assign"]

export default function BookingPage() {
  const router = useRouter()
  const [selectedDate, setDate] = useState("")
  const [selectedTime, setTime] = useState("")
  const [selectedCook, setCook] = useState("")

  const isComplete = selectedDate && selectedTime && selectedCook

  return (
    <div className="px-4 py-16 max-w-5xl mx-auto space-y-16">
      <h1 className="text-5xl font-extrabold text-center text-primary mb-8">
        Let’s Book Your Meal Session 🍽️
      </h1>

      {/* Date selection */}
      <section className="space-y-6 mb-16 min-h-[300px]">
        <h2 className="text-2xl font-bold text-primary text-center mb-[50px]">1. Choose a Date</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {dates.map(date => (
            <Card
              key={date}
              onClick={() => setDate(date)}
              className={`w-[160px] text-center cursor-pointer transition-transform duration-300 p-4 border-2 rounded-xl ${
                selectedDate === date
                  ? "border-secondary bg-orange-50 scale-105"
                  : "hover:scale-105 hover:shadow-md"
              }`}
            >
              <CardContent>
                <p className="text-base font-semibold text-primary">{date}</p>
                {selectedDate === date && <CheckCircle2 className="text-secondary mt-2 mx-auto" />}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Time slot selection */}
      <section className="space-y-6 mb-16 min-h-[300px]">
        <h2 className="text-2xl font-bold text-primary text-center mb-[50px]">2. Select a Time Slot</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {timeSlots.map(time => (
            <Card
              key={time}
              onClick={() => setTime(time)}
              className={`w-[160px] text-center cursor-pointer transition-transform duration-300 p-4 border-2 rounded-xl ${
                selectedTime === time
                  ? "border-secondary bg-orange-50 scale-105"
                  : "hover:scale-105 hover:shadow-md"
              }`}
            >
              <CardContent>
                <p className="text-base font-semibold text-primary">{time}</p>
                {selectedTime === time && <CheckCircle2 className="text-secondary mt-2 mx-auto" />}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cook selection */}
      <section className="space-y-6 mb-16 min-h-[300px]">
        <h2 className="text-2xl font-bold text-primary text-center mb-[50px]">3. Choose a Cook</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {cooks.map(cook => (
            <Card
              key={cook}
              onClick={() => setCook(cook)}
              className={`w-[160px] text-center cursor-pointer transition-transform duration-300 p-4 border-2 rounded-xl ${
                selectedCook === cook
                  ? "border-secondary bg-orange-50 scale-105"
                  : "hover:scale-105 hover:shadow-md"
              }`}
            >
              <CardContent>
                <p className="text-base font-semibold text-primary">{cook}</p>
                {selectedCook === cook && <CheckCircle2 className="text-secondary mt-2 mx-auto" />}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Confirm button */}
      
      {/*
      <div className="text-center pt-4">
        <Button
          onClick={() => router.push("/dashboard")}
          disabled={!isComplete}
          className="bg-secondary text-white text-lg px-10 py-4 rounded-full shadow-md transition-all hover:bg-primary hover:scale-105 disabled:opacity-50"
        >
          Confirm Booking →
        </Button>
      </div>
      */}
      
    </div>
  )
}