import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  let mx = 0, my = 0, rx = 0, ry = 0

  useEffect(() => {
    const move = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`
      }
      requestAnimationFrame(animate)
    }

    const enter = () => ring.current?.classList.add('hovered')
    const leave = () => ring.current?.classList.remove('hovered')

    document.addEventListener('mousemove', move)
    const els = document.querySelectorAll('a, button, input, textarea, [role="button"], label')
    els.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })
    animate()

    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot"  aria-hidden />
      <div ref={ring} className="cursor-ring" aria-hidden />
    </>
  )
}
