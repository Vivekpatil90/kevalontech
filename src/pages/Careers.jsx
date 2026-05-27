import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Blobs from '../components/Blobs.jsx'
import { JOBS } from '../utils/site.js'

export default function Careers() {
  const [sent, setSent] = useState(false)

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
          <circle
            cx="100"
            cy="100"
            r="110"
            fill="#34d399"
          />
        </svg>
      </div>
      <>
        <section className="relative overflow-hidden">
          <Blobs />

          <div className="section">
            <Reveal>
              <p className="eyebrow">Careers</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl max-w-4xl font-semibold leading-[1.05]">
                Build the future of digital —{' '}
                <span className="neon-text">with us</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-white/70 text-lg">
                We hire curious, kind, senior makers. Internships and
                full-time roles open across engineering, design and
                marketing.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">Internships & Training</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Learn by shipping real work.
            </h2>
          </Reveal>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              'Mentorship from senior devs & designers',
              'Hands-on client projects from week one',
              'Pre-placement offers for top performers',
            ].map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="glass p-6 h-full">
                  <p className="text-white/75">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">Open roles</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Currently hiring.
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {JOBS.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.03}>
                <div className="py-6 flex flex-wrap items-center justify-between gap-4 hover:bg-white/5 px-4 -mx-4 rounded-xl transition">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {j.title}
                    </h3>

                    <div className="mt-1 text-white/55 text-sm">
                      {j.type} · {j.location}
                    </div>
                  </div>

                  <a
                    href="#apply"
                    className="btn-ghost text-sm"
                  >
                    Apply
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="apply" className="section">
          <div className="glass p-8 md:p-12">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold">
                Apply now
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-3 text-white/65">
                Send us your details and we'll get back within
                3 working days.
              </p>
            </Reveal>

            {sent ? (
              <div className="mt-8 p-6 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                Thank you — we'll be in touch shortly.
              </div>
            ) : (
              <form
                className="mt-8 grid md:grid-cols-2 gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <Input
                  label="Full name"
                  name="name"
                  required
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  required
                />

                <Input
                  label="Phone"
                  name="phone"
                />

                <Input
                  label="Role applying for"
                  name="role"
                  required
                />

                <div className="md:col-span-2">
                  <label className="text-sm text-white/70">
                    Cover note
                  </label>

                  <textarea
                    required
                    rows="5"
                    className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <button className="btn-primary">
                    Submit application
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </>
    </div>
  )
}

function Input({ label, ...rest }) {
  return (
    <div>
      <label className="text-sm text-white/70">
        {label}
      </label>

      <input
        {...rest}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition"
      />
    </div>
  )
}