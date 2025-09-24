"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
  title?: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
        <img
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 w-12 h-12 rounded-full text-white hover:text-white transition-all duration-200"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="sr-only">Imagen anterior</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 w-12 h-12 rounded-full text-white hover:text-white transition-all duration-200"
          onClick={goToNext}
        >
          <ChevronRight className="w-6 h-6" />
          <span className="sr-only">Siguiente imagen</span>
        </Button>

        {images[currentIndex].title && (
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3">
              <h3 className="font-semibold text-white text-lg">{images[currentIndex].title}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
