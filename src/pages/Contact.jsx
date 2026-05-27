import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Blobs from '../components/Blobs.jsx'
import { SITE } from '../utils/site.js'
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const mapsQuery = encodeURIComponent('Solaris Business Hub, Sola Road, Naranpura, Ahmedabad')

  return (
    <div className="relative overflow-hidden bg-[#0b0f14] text-white">

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

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <Blobs />

        <div className="section">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="h-display mt-3 max-w-4xl">
              Let's build something <span className="text-emerald-300">remarkable</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-white/70 text-lg">
              Tell us a little about your project — we'll respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FORM + INFO ================= */}
      <section className="section grid lg:grid-cols-5 gap-8">

        {/* FORM */}
        <div className="lg:col-span-3 glass p-8 md:p-10 border border-white/10">

          {sent ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300">
              Thank you! We'll be in touch soon.
            </div>
          ) : (
            <form
              className="grid md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >

              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Company" name="company" />

              <div className="md:col-span-2">
                <label className="text-sm text-white/70">
                  How can we help?
                </label>
                <textarea
                  required
                  rows="5"
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition"
                />
              </div>

              <div className="md:col-span-2">
                <button className="btn-primary">
                  Send message
                </button>
              </div>

            </form>
          )}

        </div>

        {/* INFO */}
        <div className="lg:col-span-2 space-y-5">

          <div className="glass p-6 border border-white/10">
            <div className="flex items-start gap-3">
              <HiLocationMarker className="text-emerald-400 text-xl mt-1" />
              <div>
                <div className="text-white/85 font-medium">Office</div>
                <div className="text-white/60 text-sm mt-1">
                  {SITE.address}
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 border border-white/10">
            <div className="flex items-start gap-3">
              <HiPhone className="text-emerald-400 text-xl mt-1" />
              <div>
                <div className="text-white/85 font-medium">Phone</div>
                {SITE.phones.map((p) => (
                  <div key={p}>
                    <a
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="text-white/65 text-sm hover:text-emerald-400"
                    >
                      {p}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass p-6 border border-white/10">
            <div className="flex items-start gap-3">
              <HiMail className="text-emerald-400 text-xl mt-1" />
              <div>
                <div className="text-white/85 font-medium">Email</div>
                {SITE.emails.map((e) => (
                  <div key={e}>
                    <a
                      href={`mailto:${e}`}
                      className="text-white/65 text-sm hover:text-emerald-400"
                    >
                      {e}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass p-6 border border-white/10">
            <div className="text-white/85 font-medium">
              Follow us
            </div>

            <div className="flex gap-3 mt-4">
              {[FaLinkedin, FaInstagram, FaTwitter, FaFacebook].map((Ico, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  <Ico />
                </a>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* ================= MAP ================= */}
      <section className="section">
        <div className="glass overflow-hidden border border-white/10">
          <iframe
            title="Map"
            className="w-full h-[420px] grayscale contrast-125"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  )
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition"
      />
    </div>
  )
}