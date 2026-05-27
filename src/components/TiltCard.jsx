import { useRef } from 'react'
export default function TiltCard({ children, className='' }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - .5
    const y = (e.clientY - r.top) / r.height - .5
    el.style.transform = `perspective(900px) rotateX(${-y*8}deg) rotateY(${x*10}deg) translateY(-4px)`
  }
  const reset = () => { if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0)' }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={`tilt-card ${className}`}>
      {children}
    </div>
  )
}
