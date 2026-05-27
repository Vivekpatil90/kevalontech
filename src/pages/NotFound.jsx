import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="section min-h-[70vh] grid place-items-center text-center">
      <div>
        <div className="font-display text-7xl md:text-9xl neon-text">404</div>
        <p className="mt-4 text-white/70">This page drifted into deep space.</p>
        <Link to="/" className="btn-primary mt-8">Back home</Link>
      </div>
    </section>
  )
}
