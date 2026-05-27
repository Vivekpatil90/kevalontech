import { useEffect, useRef, useState } from 'react'
export default function Counter({ to=100, suffix='', duration=1800 }) {
  const [val, setVal] = useState(0); const ref = useRef(null); const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) { started.current = true
        const start = performance.now()
        const tick = (now) => { const p = Math.min(1, (now-start)/duration); setVal(Math.floor(p*to)); if (p<1) requestAnimationFrame(tick) }
        requestAnimationFrame(tick)
      }
    }, { threshold: .4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}
