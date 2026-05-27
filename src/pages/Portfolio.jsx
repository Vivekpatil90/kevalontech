import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import Blobs from '../components/Blobs.jsx'
import { PROJECTS } from '../utils/site.js'
import { HiX } from 'react-icons/hi'

export default function Portfolio() {
  const cats = useMemo(
    () => [
      'All',
      ...Array.from(
        new Set(PROJECTS.map((p) => p.category))
      ),
    ],
    []
  )

  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const list =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.category === filter
        )

  return (
    <div className="font-serif">
      
   
      <>
         {/* ================= TOP RIGHT CIRCLE ================= */}
      <div className="pointer-events-none absolute -top-40 -right-40 opacity-20">
        <svg width="500" height="500" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="#10b981" />
        </svg>
      </div>

      {/* ================= BOTTOM LEFT CIRCLE ================= */}
      <div className="pointer-events-none absolute -bottom-64 -left-64 opacity-20">
        <svg width="700" height="700" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="110" fill="#34d399" />
        </svg>
      </div>
        <section className="relative overflow-hidden">
          <Blobs />

          <div className="section">
            <Reveal>
              <p className="eyebrow">Portfolio</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-3 max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                Selected work, shipped with{' '}
                <span className="neon-text">
                  craft & care
                </span>
                .
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  filter === c
                    ? 'bg-white text-bg border-white'
                    : 'border-white/15 text-white/70 hover:border-white/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {list.map((p) => (
                <motion.button
                  layout
                  key={p.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  onClick={() => setActive(p)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      loading="lazy"
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-90" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-xs text-neon-cyan">
                      {p.category}
                    </div>

                    <div className="text-xl font-semibold mt-1">
                      {p.title}
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-lg p-6 grid place-items-center"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{
                  scale: 0.9,
                  y: 30,
                }}
                animate={{
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  scale: 0.95,
                  opacity: 0,
                }}
                onClick={(e) =>
                  e.stopPropagation()
                }
                className="glass max-w-3xl w-full overflow-hidden"
              >
                <div className="aspect-video">
                  <img
                    src={active.img}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs text-neon-cyan">
                      {active.category}
                    </div>

                    <h3 className="text-3xl font-bold mt-1">
                      {active.title}
                    </h3>

                    <p className="mt-3 text-white/65 text-sm">
                      A representative engagement
                      showcasing our work in{' '}
                      {active.category.toLowerCase()}
                      {' '}— strategy, design,
                      build and launch.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setActive(null)
                    }
                    className="text-white/70 hover:text-white text-2xl"
                  >
                    <HiX />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </div>
  )
}