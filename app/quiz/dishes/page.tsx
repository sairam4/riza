'use client'

import { useState } from "react"
import { useQuiz } from "@/app/context/QuizContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import clsx from "clsx"

type Dish = {
  id: string
  name: string
  cuisine: string
  category: "starter" | "main" | "side"
}

const allDishes: Dish[] = [
  // Indian
  { id: "ind-s1", name: "Samosa", category: "starter", cuisine: "Indian" },
  { id: "ind-s2", name: "Paneer Tikka", category: "starter", cuisine: "Indian" },
  { id: "ind-m1", name: "Butter Chicken", category: "main", cuisine: "Indian" },
  { id: "ind-m2", name: "Chole Bhature", category: "main", cuisine: "Indian" },
  { id: "ind-si1", name: "Jeera Rice", category: "side", cuisine: "Indian" },
  { id: "ind-si2", name: "Raita", category: "side", cuisine: "Indian" },

  // Asian
  { id: "asi-s1", name: "Spring Rolls", category: "starter", cuisine: "Asian" },
  { id: "asi-s2", name: "Dumplings", category: "starter", cuisine: "Asian" },
  { id: "asi-m1", name: "Kung Pao Chicken", category: "main", cuisine: "Asian" },
  { id: "asi-m2", name: "Ramen Bowl", category: "main", cuisine: "Asian" },
  { id: "asi-si1", name: "Steamed Rice", category: "side", cuisine: "Asian" },
  { id: "asi-si2", name: "Pickled Veggies", category: "side", cuisine: "Asian" },

  // Italian
  { id: "ita-s1", name: "Bruschetta", category: "starter", cuisine: "Italian" },
  { id: "ita-s2", name: "Caprese Skewers", category: "starter", cuisine: "Italian" },
  { id: "ita-m1", name: "Lasagna", category: "main", cuisine: "Italian" },
  { id: "ita-m2", name: "Pasta Alfredo", category: "main", cuisine: "Italian" },
  { id: "ita-si1", name: "Garlic Bread", category: "side", cuisine: "Italian" },
  { id: "ita-si2", name: "Side Caesar Salad", category: "side", cuisine: "Italian" },

  // French
  { id: "fre-s1", name: "Mini Quiches", category: "starter", cuisine: "French" },
  { id: "fre-s2", name: "French Onion Tart", category: "starter", cuisine: "French" },
  { id: "fre-m1", name: "Coq au Vin", category: "main", cuisine: "French" },
  { id: "fre-m2", name: "Ratatouille", category: "main", cuisine: "French" },
  { id: "fre-si1", name: "Baguette Slices", category: "side", cuisine: "French" },
  { id: "fre-si2", name: "Gratin Dauphinois", category: "side", cuisine: "French" },
]

export default function DishSelector() {
  const router = useRouter()
  const [selected, setSelected] = useState<string[]>([])
  const { mealsPerWeek } = useQuiz()

  const toggleSelect = (id: string) => {
    const dish = allDishes.find(d => d.id === id)
    if (!dish) return

    const selectedInSameCategory = selected.filter(
      d => allDishes.find(x => x.id === d)?.category === dish.category
    ).length

    const isSelected = selected.includes(id)

    if (isSelected) {
      setSelected(prev => prev.filter(d => d !== id))
    } else if (selectedInSameCategory < mealsPerWeek) {
      setSelected(prev => [...prev, id])
    }
  }

  const getSelectedCount = (category: Dish["category"]) =>
    selected.filter(id => allDishes.find(d => d.id === id)?.category === category).length

  const grouped = {
    starter: allDishes.filter(d => d.category === "starter"),
    main: allDishes.filter(d => d.category === "main"),
    side: allDishes.filter(d => d.category === "side"),
  }

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto bg-[#fef6ec]">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">Choose Your Weekly Meals</h1>
      <p className="text-secondary text-center mb-6">You can pick {mealsPerWeek} from each category</p>

      {(["starter", "main", "side"] as const).map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4 capitalize">
            {category === "side" ? "Side Steppers" : category + "s"} ({getSelectedCount(category)}/{mealsPerWeek})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {grouped[category].map((dish) => {
              const isSelected = selected.includes(dish.id)
              return (
                <Card
                  key={dish.id}
                  onClick={() => toggleSelect(dish.id)}
                  className={clsx(
                    "cursor-pointer transition-all duration-300 border-2 shadow-md hover:shadow-xl",
                    isSelected
                      ? "border-[#d86642] bg-orange-50 scale-[1.02]"
                      : "border-gray-200 hover:border-[#e3a683]"
                  )}
                >
                  <CardContent className="p-6 text-center">
                    <p className="text-lg font-semibold text-primary">{dish.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{dish.cuisine} | {category}</p>
                    <div className="mx-auto mt-4" style={{ width: "250px", height: "250px", overflow: "hidden" }}>
                      <img
                        src="/images/samosa.png"
                        alt={dish.name}
                        style={{ width: "250px", height: "250px", objectFit: "cover" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-10">
        <Button
          onClick={() => router.push("/bookings")}
          disabled={
            getSelectedCount("starter") < mealsPerWeek ||
            getSelectedCount("main") < mealsPerWeek ||
            getSelectedCount("side") < mealsPerWeek
          }
          className="btn-secondary text-lg px-10 py-4 rounded-full transition hover:scale-105 cursor-pointer"
        >
          Continue to Booking →
        </Button>
      </div>
    </div>
  )
}