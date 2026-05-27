import { Link } from 'react-router-dom'
import MagneticButton from './MagneticButton.jsx'
import { SITE } from '../utils/site.js'
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowRight,
} from 'react-icons/hi'

export default function ContactPanel() {
  return (
    <section className="section">
      <div
        className="glass overflow-hidden relative p-8 md:p-10"
        style={{
          background: 'rgba(8,26,20,0.75)',
          border: '1px solid rgba(52,211,153,0.16)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#10b981]/10 blur-3xl pointer-events-none" />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 relative">
          <div className="space-y-6">
            <div className="eyebrow" style={{ color: '#34d399' }}>Talk to our team</div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white leading-tight">
              A modern contact section for the top and bottom of your site.
            </h2>
            <p className="max-w-2xl text-white/70 text-lg leading-relaxed">
              Use this split layout to highlight your mission, show contact choices and guide visitors to your contact page. It works great on both Home and Contact pages.
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                as={Link}
                to="/contact"
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #10b981, #047857)', border: 'none' }}
              >
                Contact us <HiArrowRight />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={`mailto:${SITE.emails[0]}`}
                className="btn-ghost"
                style={{ borderColor: '#10b981', color: '#34d399' }}
              >
                Email directly
              </MagneticButton>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950/80">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/60 to-transparent" />
            <div className="relative z-10 p-8 space-y-6">
              <div className="rounded-[1.5rem] bg-[#07120f]/90 border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-white/50">Fast response</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Get a tailored reply within one business day.</h3>
                <p className="mt-3 text-white/65 text-sm leading-relaxed">
                  Whether you need development, design or growth support, we make the first step simple and clear.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#081a14]/90 border border-white/10 p-5">
                  <div className="flex items-center gap-3 text-neon-cyan">
                    <HiLocationMarker className="text-xl" />
                    <span className="font-semibold text-white">Office</span>
                  </div>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">
                    {SITE.address}
                  </p>
                </div>
                <div className="rounded-3xl bg-[#081a14]/90 border border-white/10 p-5">
                  <div className="flex items-center gap-3 text-neon-cyan">
                    <HiMail className="text-xl" />
                    <span className="font-semibold text-white">Email</span>
                  </div>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">
                    {SITE.emails.join(' • ')}
                  </p>
                </div>
                <div className="rounded-3xl bg-[#081a14]/90 border border-white/10 p-5 sm:col-span-2">
                  <div className="flex items-center gap-3 text-neon-cyan">
                    <HiPhone className="text-xl" />
                    <span className="font-semibold text-white">Phone</span>
                  </div>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">
                    {SITE.phones.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
