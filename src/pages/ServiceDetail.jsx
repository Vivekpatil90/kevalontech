import { Link, useParams, Navigate } from 'react-router-dom'
import {
  HiArrowRight,
  HiCheckCircle,
  HiArrowLeft,
} from 'react-icons/hi'

import Reveal from '../components/Reveal.jsx'
import Blobs from '../components/Blobs.jsx'

import {
  SERVICES,
  getService,
  SERVICE_IMAGES,
} from '../utils/site.js'

export default function ServiceDetail() {
  const { slug } = useParams()

  const service = getService(slug)

  if (!service)
    return <Navigate to="/services" replace />

  const related = (service.related || [])
    .map(getService)
    .filter(Boolean)

  return (
    <div className="font-serif relative overflow-hidden bg-[#0b0f14] text-white">

      {/* =========================
          TOP RIGHT CLEAN CIRCLE
      ========================== */}
      <div className="pointer-events-none absolute -top-40 -right-40 opacity-20">
        <svg width="500" height="500" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="#10b981"
          />
        </svg>
      </div>

      {/* =========================
          BOTTOM LEFT CLEAN CIRCLE
      ========================== */}
      <div className="pointer-events-none absolute -bottom-64 -left-64 opacity-20">
        <svg width="700" height="700" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="110"
            fill="#34d399"
          />
        </svg>
      </div>

      {/* ===== Content ===== */}
      <section className="relative overflow-hidden">
        <Blobs />

        <div className="section">

          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-emerald-400 transition"
            >
              <HiArrowLeft />
              All Services
            </Link>
          </Reveal>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <Reveal>
                <p className="eyebrow text-white/60">
                  Service
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                  <span className="text-emerald-300">
                    {service.title}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-white/70 text-lg">
                  {service.brief}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition flex items-center gap-2 font-medium"
                  >
                    Get a quote <HiArrowRight />
                  </Link>

                  <a
                    href="#overview"
                    className="px-5 py-2 rounded-xl border border-white/10 hover:border-emerald-400/50 transition"
                  >
                    Learn more
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative">

                <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl rounded-3xl" />

                <div className="relative glass p-2 rounded-3xl overflow-hidden border border-white/10">
                  <div className="rounded-2xl overflow-hidden aspect-[5/4]">
                    <img
                      src={SERVICE_IMAGES[service.slug]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section id="overview" className="section pt-26">
        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-10">

            <Reveal>
              <div className="glass p-8 border border-white/10">
                <h2 className="text-3xl font-bold">Overview</h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {service.overview}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="glass p-8 border border-white/10">
                <h2 className="text-3xl font-bold">
                  What's included
                </h2>

                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <HiCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="glass p-8 border border-white/10">
                <h2 className="text-3xl font-bold">
                  Technologies we use
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

          <aside className="space-y-6">

            <Reveal>
              <div className="glass p-7 border border-white/10">
                <h3 className="text-2xl font-bold">
                  Start a project
                </h3>

                <p className="mt-3 text-white/60 text-sm">
                  Tell us about your idea — we'll respond within one business day.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 w-full flex justify-center items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition"
                >
                  Get in touch <HiArrowRight />
                </Link>
              </div>
            </Reveal>

            {related.length > 0 && (
              <Reveal>
                <div className="glass p-7 border border-white/10">
                  <h3 className="text-2xl font-bold">
                    Related services
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/services/${r.slug}`}
                          className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/40 transition text-sm"
                        >
                          <span>{r.title}</span>
                          <HiArrowRight className="text-white/50" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

          </aside>

        </div>
      </section>

      {/* ===== Explore Services ===== */}
      <section className="section pt-0">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6">
            Explore other services
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.filter((s) => s.slug !== service.slug)
            .slice(0, 8)
            .map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="glass p-5 border border-white/10 hover:border-emerald-400/40 transition group"
              >
                <h4 className="text-lg font-semibold">{s.title}</h4>

                <p className="mt-2 text-white/50 text-xs line-clamp-2">
                  {s.brief}
                </p>

                <div className="mt-4 text-xs text-white/40 flex items-center gap-1 group-hover:text-emerald-300">
                  View <HiArrowRight className="group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
        </div>
      </section>

    </div>
  )
}