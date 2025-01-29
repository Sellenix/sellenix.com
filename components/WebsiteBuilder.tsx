"use client"

import type React from "react"
import { useState, useRef } from "react"
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

interface ComponentData {
  id: string
  type: string
  content: string
}

const initialComponents: ComponentData[] = [
  { id: "1", type: "header", content: "Welcome to my website" },
  { id: "2", type: "paragraph", content: "This is a sample paragraph." },
  { id: "3", type: "image", content: "https://example.com/image.jpg" },
]

interface DraggableComponentProps {
  id: string
  index: number
  children: React.ReactNode
  moveComponent: (dragIndex: number, hoverIndex: number) => void
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ id, index, children, moveComponent }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop({
    accept: "COMPONENT",
    hover: (item: { id: string; index: number }, monitor) => {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      moveComponent(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: "COMPONENT",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div ref={ref} className={`mb-4 p-2 bg-gray-100 rounded ${isDragging ? "opacity-50" : ""}`}>
      {children}
    </div>
  )
}

const WebsiteBuilder: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>(initialComponents)

  const moveComponent = (dragIndex: number, hoverIndex: number) => {
    const draggedComponent = components[dragIndex]
    const newComponents = [...components]
    newComponents.splice(dragIndex, 1)
    newComponents.splice(hoverIndex, 0, draggedComponent)
    setComponents(newComponents)
  }

  const renderComponent = (component: ComponentData) => {
    switch (component.type) {
      case "header":
        return <h1 className="text-2xl font-bold">{component.content}</h1>
      case "paragraph":
        return <p>{component.content}</p>
      case "image":
        return <img src={component.content || "/placeholder.svg"} alt="Component" className="max-w-full h-auto" />
      default:
        return null
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Website Builder</h2>
        <div className="border p-4 min-h-[300px]">
          {components.map((component, index) => (
            <DraggableComponent key={component.id} id={component.id} index={index} moveComponent={moveComponent}>
              {renderComponent(component)}
            </DraggableComponent>
          ))}
        </div>
      </div>
    </DndProvider>
  )
}

export default WebsiteBuilder

