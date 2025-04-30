'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-2 flex justify-between items-center">
      <div className="cursor-pointer" onClick={() => router.push('/')}>
        <Image
          src="/images/logo2.png"
          alt="Riza Logo"
          width={60}
          height={32}
          className="rounded object-cover object-center"
          priority
        />
      </div>
      <div className="space-x-4">
        <Button variant="outline" onClick={() => router.push('/login')}>Login</Button>
        <Button className="btn-secondary" onClick={() => router.push('/signup')}>
          Sign Up
        </Button>
      </div>
    </nav>
  )
}