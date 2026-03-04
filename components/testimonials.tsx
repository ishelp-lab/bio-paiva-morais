"use client"

import { useState, useEffect, useCallback } from "react"
import { Quote } from "lucide-react"
import type { Testimonial } from "@/lib/site-data"

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  const testimonial = testimonials[current]

  return (
    <div className="rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-3">
        <Quote className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          Depoimentos
        </span>
      </div>
      <div className="min-h-[100px]">
        <p className="text-sm leading-relaxed text-foreground/80 italic">
          {`"${testimonial.text}"`}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              {testimonial.name}
            </p>
            {testimonial.role && (
              <p className="text-xs text-muted-foreground">
                {testimonial.role}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Ver depoimento ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 bg-primary"
                : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
