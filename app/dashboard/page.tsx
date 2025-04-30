'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Your Dashboard</h1>

      <Card className="mb-8 shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Upcoming Booking</h2>
          <p><strong>Date:</strong> Tomorrow</p>
          <p><strong>Time:</strong> 12:00 PM</p>
          <p><strong>Cook:</strong> Cook A</p>
        </CardContent>
      </Card>

      <Card className="mb-8 shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Selected Meals</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tomato Soup (Starter)</li>
            <li>Spring Rolls (Starter)</li>
            <li>Grilled Chicken (Main)</li>
            <li>Pasta Alfredo (Main)</li>
            <li>Garlic Bread (Side)</li>
            <li>Salad Bowl (Side)</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4 mt-10">
        <Button variant="outline" onClick={() => router.push('/quiz')}>
          Start New Quiz
        </Button>
        <Button onClick={() => router.push('/bookings')}>
          Book Again
        </Button>
      </div>
    </div>
  )
}