"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const titles = [
  "Web Developer",
  "Full Stack Engineer",
  "Growth Consultant",
  "UI/UX Designer",
]

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1))
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitleIndex])

  const stats = [
    { value: "6+", label: "Years of", sublabel: "experience" },
    { value: "60+", label: "Projects", sublabel: "Completed" },
    { value: "5", label: "OpenSource Libraries", sublabel: "" },
  ]

  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-8 pr-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-mono mb-4">
                <span className="text-primary">{">"}</span>{" "}
                <span className="text-foreground">Carl</span>{" "}
                <span className="text-foreground">Hanson</span>
                <span className="text-primary animate-pulse">_</span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="text-accent"> &amp;</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Growth Consultant
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Sometimes five Imprimaturs are seen together dialogue-wise in the
              piazza of one title-page, complimenting and ducking each to other
              with their shaven reverences, whether the author, who stands by in
              perplexity at the foot of his epistle, shall to the press or to the
              sponge.
            </p>

            {/* Stats Bar */}
            <div className="flex items-center gap-8 py-6 px-8 bg-secondary/50 rounded-lg backdrop-blur-sm">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span
                    className={`text-4xl font-bold ${
                      index === 0
                        ? "text-blue-400"
                        : index === 1
                        ? "text-yellow-400"
                        : "text-foreground"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <div className="text-sm text-muted-foreground">
                    <div>{stat.label}</div>
                    {stat.sublabel && <div>{stat.sublabel}</div>}
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              className="bg-white text-black hover:bg-gray-100 border-0 font-mono"
            >
              Download Resume
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                alt="Carl Hanson"
                className="w-full h-[600px] object-cover grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
