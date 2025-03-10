"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
    title: string
    description: string
    image: string
}

interface SlideshowProps {
    slides: Slide[]
}

export default function CarouselDemo({ slides }: SlideshowProps) {
    const [current, setCurrent] = React.useState(0)

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    return (
        <div className="relative max-w-7xl mx-auto h-[300px] md:h-[500px] max-lg:w-[300px]">
            <div className="relative h-full overflow-visible flex items-center justify-center">
                <div className="flex items-center justify-center w-full">
                    {slides.map((slide, index) => {
                        let offset = index - current
                        if (Math.abs(offset) > slides.length / 2) {
                            offset = offset > 0
                                ? offset - slides.length
                                : offset + slides.length
                        }

                        return (
                            <div
                                key={index}
                                className="absolute transition-all duration-500 w-[300px] md:w-[400px] overflow-y-visible"
                                style={{
                                    transform: `
                                        translateX(${offset * 60}%) 
                                        scale(${index === current ? 1.0 : 0.8})
                                        translateZ(${index === current ? 0 : -100}px)
                                    `,
                                    zIndex: index === current ? 30 : 10,
                                    opacity: Math.abs(offset) > 2 ? 0 : 1 - (Math.abs(offset) * 0.2),
                                }}
                            >
                                <Card className="h-[450px] bg-white rounded-none shadow-lg p-4">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <CardContent>
                                        <h2 className="text-lg font-bold">{slide.title}</h2>
                                        <p className="text-sm line-clamp-2">{slide.description}</p>
                                    </CardContent>

                                    <Button variant="default" className="self-start bg-blue-400 rounded-2xl items-center">Read More <ChevronRight className="ring-1 rounded-full" /></Button>
                                </Card>
                            </div>
                        )
                    })}
                </div>

            </div>

            <Button
                variant="ghost"
                size="icon"
                className="absolute right-[200px] max-lg:right-[280px] top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 z-40"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="absolute left-[200px] max-lg:left-[280px] top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 z-40"
                onClick={nextSlide}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </div>
    )
}