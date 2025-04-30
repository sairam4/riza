"use client";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="hero-background relative w-full h-[600px] card">
      <div className="absolute inset-0 bg-white/10 z-0"></div>
      <div className="relative z-10 flex items-center justify-start h-full max-w-screen-xl mx-auto px-6 text-white">
        <div className="max-w-xl">
          <h1 className="title-text mb-6 leading-tight drop-shadow-xl">
            Healthy Meals, Cooked in Your Home
          </h1>
          <p className="text-lg md:text-xl mb-10 drop-shadow-xl text-secondary">
            Fresh, customized meals made just for you — by professional cooks, using your favorite ingredients.
          </p>
          <button
            onClick={() => router.push("/quiz")}
            className="btn-primary cursor-pointer"
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  )
}