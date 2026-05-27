import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import TiltCard from '../components/TiltCard.jsx'
import Blobs from '../components/Blobs.jsx'

import {
  SERVICES,
  SERVICE_IMAGES,
} from '../utils/site.js'

import { HiArrowRight } from 'react-icons/hi'

export default function Services() {
  return (
    <div className="font-serif">
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
      <>
        <section className="relative overflow-hidden">
          <Blobs />

          <div className="section">
            <Reveal>
              <p className="eyebrow">
                Services
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-3 max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                Everything you need to{' '}
                <span className="neon-text">
                  build, launch and grow
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-white/70 text-lg">
                One partner, every layer of
                your digital stack — from
                interface to infrastructure
                to inbound.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section pt-26">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 6) * 0.04}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="block h-full group"
                >
                  <TiltCard className="glass p-3 h-full hover:border-brand-500/50 transition cursor-pointer overflow-hidden">
                    <div className="card-img-wrap aspect-[16/10]">
                      <img
                        src={
                          SERVICE_IMAGES[
                            s.slug
                          ]
                        }
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4 pt-5">
                      <div className="text-xs text-brand-400 font-mono">
                        {String(i + 1).padStart(
                          2,
                          '0'
                        )}
                      </div>

                      <h3 className="mt-2 text-2xl font-bold">
                        {s.title}
                      </h3>

                      <p className="mt-2 text-white/60 text-sm leading-relaxed">
                        {s.brief}
                      </p>

                      <div className="mt-5 text-sm text-white/50 flex items-center gap-2 group-hover:text-brand-400 transition">
                        Learn more{' '}
                        <HiArrowRight className="group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </>
    </div>
  )
}