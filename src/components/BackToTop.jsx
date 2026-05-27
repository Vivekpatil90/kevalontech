import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'
export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 grid place-items-center rounded-full glass hover:border-neon-cyan transition">
      <HiArrowUp />
    </button>
  )
}
