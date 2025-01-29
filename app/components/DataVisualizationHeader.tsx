"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface DataNode {
  x: number
  y: number
  radius: number
  speed: number
  connections: DataNode[]
}

const DataVisualizationHeader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentTheme, setCurrentTheme] = useState<string>("light")
  const { theme, systemTheme } = useTheme()

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

    const nodes: DataNode[] = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        connections: [],
      })
    }

    const connectNodes = () => {
      for (const node of nodes) {
        node.connections = []
        for (const otherNode of nodes) {
          if (node !== otherNode) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
            if (distance < 100) {
              node.connections.push(otherNode)
            }
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const node of nodes) {
        node.x += node.speed
        node.y += node.speed

        if (node.x > canvas.width) node.x = 0
        if (node.y > canvas.height) node.y = 0

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = currentTheme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"
        ctx.fill()

        for (const connectedNode of node.connections) {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.strokeStyle = currentTheme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
          ctx.stroke()
        }
      }

      connectNodes()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentTheme])

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme || "light" : theme || "light")
  }, [theme, systemTheme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
    />
  )
}

export default DataVisualizationHeader

