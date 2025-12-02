"use client"

import { useEffect, useState } from "react"
import { BookOpen, Sparkles } from "lucide-react"

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const TOTAL_DURATION = 3000
  const FADE_OUT_DURATION = 500

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 50)
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const currentPercentage = (elapsedTime / TOTAL_DURATION) * 100

      if (currentPercentage >= 100) {
        setProgress(100)
        clearInterval(interval)

        setTimeout(() => {
          setIsFadingOut(true)
          setTimeout(() => {
            onComplete()
          }, FADE_OUT_DURATION)
        }, 200)
      } else {
        setProgress(currentPercentage)
      }
    }, 30)

    return () => {
      clearTimeout(mountTimer)
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center transition-all duration-500 ease-out
        ${isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        ${isFadingOut ? "opacity-0 scale-105 pointer-events-none" : ""}
      `}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-[28rem] sm:h-[28rem] bg-purple-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[32rem] sm:h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div
          className="absolute top-20 left-[10%] w-2 h-2 bg-indigo-400/60 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bounce"
          style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-[20%] w-2 h-2 bg-blue-400/60 rounded-full animate-bounce"
          style={{ animationDuration: "2s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-48 right-[25%] w-1 h-1 bg-cyan-400/60 rounded-full animate-bounce"
          style={{ animationDuration: "2.8s", animationDelay: "0.3s" }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8 sm:space-y-10 px-4">
        <div className="inline-flex items-center justify-center">
          <div className="relative">
            {/* Outer ring animation */}
            <div
              className="absolute inset-0 -m-4 sm:-m-6 border-2 border-indigo-500/30 rounded-3xl animate-ping"
              style={{ animationDuration: "2s" }}
            />
            <div className="absolute inset-0 -m-2 sm:-m-3 border border-purple-500/20 rounded-2xl animate-pulse" />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-2xl sm:rounded-3xl blur-2xl" />

            {/* Main logo container */}
            <div className="relative bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-blue-500/20 backdrop-blur-xl p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
              <div className="relative">
                <BookOpen className="w-14 h-14 sm:w-20 sm:h-20 text-white drop-shadow-lg" />
                {/* Sparkle decorations */}
                <Sparkles className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Book Shelf
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Management
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 font-medium tracking-wide">
            Koleksi Buku Favoritmu
          </p>
        </div>

        <div className="w-64 sm:w-80 space-y-4 mx-auto">
          <div className="relative">
            {/* Glow behind progress */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-50 transition-all"
              style={{ width: `${progress}%`, transitionDuration: "30ms" }}
            />

            {/* Progress track */}
            <div className="relative h-2 w-full bg-slate-800/80 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/50">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                style={{
                  width: `${progress}%`,
                  transitionDuration: "30ms",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                }}
              />
            </div>
          </div>

          {/* Progress text */}
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-500 font-medium">
              {progress < 30 ? "Memuat data..." : progress < 70 ? "Menyiapkan koleksi..." : "Hampir selesai..."}
            </span>
            <span className="font-mono text-indigo-400 font-semibold">{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 flex flex-col items-center gap-1">
        <p className="text-slate-600 text-xs font-medium tracking-wider uppercase">Powered by PWA Technology</p>
        <p className="text-slate-700 text-[10px] sm:text-xs">v1.0.0</p>
      </div>
    </div>
  )
}
