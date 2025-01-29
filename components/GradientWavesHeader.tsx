"use client"

import type React from "react"
import { useRef, useEffect } from "react"

const GradientWavesHeader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drawWave = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      frequency: number,
      color: string,
      amplitude: number,
      offset: number,
    ) => {
      ctx.beginPath()
      ctx.moveTo(0, height)
      for (let i = 0; i < width; i++) {
        ctx.lineTo(
          i,
          height / 2 +
            Math.sin(i * frequency + offset) * amplitude +
            Math.sin(i * frequency * 0.5 + offset) * amplitude * 0.5,
        )
      }
      ctx.lineTo(width, height)
      ctx.fillStyle = color
      ctx.fill()
    }

    let offset = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawWave(ctx, canvas.width, canvas.height, 0.01, "rgba(63, 81, 181, 0.5)", 50, offset)
      drawWave(ctx, canvas.width, canvas.height, 0.015, "rgba(103, 58, 183, 0.5)", 40, offset * 1.2)
      drawWave(ctx, canvas.width, canvas.height, 0.02, "rgba(156, 39, 176, 0.5)", 30, offset * 1.5)

      offset += 0.05
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-screen" />
}

export default GradientWavesHeader

