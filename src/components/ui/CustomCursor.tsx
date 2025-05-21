import { useEffect, useRef } from "react"

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const currentX = useRef(0)
  const currentY = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    const animate = () => {
      // Smooth the movement by easing towards the target
      currentX.current += (mouseX.current - currentX.current) * 0.15
      currentY.current += (mouseY.current - currentY.current) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX.current - 12}px, ${currentY.current - 12}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="max-md:hidden pointer-events-none fixed z-[9999] h-6 w-6 rounded-full bg-white mix-blend-difference"
    />
  )
}

export default CustomCursor
