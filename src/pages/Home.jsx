import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Blobs from '../components/Blobs.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import TiltCard from '../components/TiltCard.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import ContactPanel from '../components/ContactPanel.jsx'
import { SERVICES, STATS, TECH_STACK, TESTIMONIALS, PROCESS, SITE, SERVICE_IMAGES } from '../utils/site.js'
import { HiArrowRight, HiStar } from 'react-icons/hi'
import HeroBgImg from '../assets/hero-bg.png'

const BG_PATTERN = 'https://www.transparenttextures.com/patterns/carbon-fiber.png'

const FALLBACK_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
]

export default function Home() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${BG_PATTERN})`,
        backgroundColor: '#040d0a',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      {/* Dark forest overlay */}
      <div className="absolute inset-0 bg-[#040d0a]/60 pointer-events-none" />

      <div className="relative z-10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-kevalon-glow opacity-60" />
            <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-kevalon-cyan/10" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-kevalon-teal/10" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#0f172a" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              style={{
                // backgroundImage: `url(${HeroBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              className="absolute inset-0 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040d0a]/95 via-[#040d0a]/75 to-[#040d0a]/40" />
          </div>

          <div className="absolute inset-0 grid-bg opacity-10 z-0" />
          <Blobs />

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="eyebrow"
                style={{ color: '#34d399' }}
              >
                Kevalon Technology · Ahmedabad
              </motion.p>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, x: 160 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="font-serif mt-5 font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-white"
                >
                  We engineer{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #34d399, #10b981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',

                  }}>
                    digital products
                  </span>{' '}
                  that grow ambitious brands.
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
                className="mt-6 max-w-xl text-white/75 text-lg"
              >
                {SITE.tagline}. From web and mobile to ERP, CRM and growth marketing — one studio, every layer of your digital stack.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.7 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <MagneticButton
                  as={Link} to="/contact"
                  className="btn-primary"
                  style={{ background: 'linear-gradient(135deg, #10b981, #047857)', border: 'none' }}
                >
                  Start a project <HiArrowRight />
                </MagneticButton>

                <MagneticButton
                  as={Link} to="/portfolio"
                  className="btn-ghost"
                  style={{ borderColor: '#10b981', color: '#34d399' }}
                >
                  See our work
                </MagneticButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-10 flex items-center gap-6 text-white/50 text-sm"
              >
                <div>Trusted by <span className="text-white">60+ founders & enterprises</span></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── INTRO ────────────────────────────────────────── */}
        <section className="section font-serif">
          <Reveal><p className="eyebrow" style={{ color: '#34d399' }}>Who we are</p></Reveal>
          <Reveal delay={.05}>
            <h2 className=" font-serif h-display mt-3 max-w-4xl text-white">
              A trusted technology partner for founders, marketers and enterprises.
            </h2>
          </Reveal>
          <Reveal delay={.1}>
            <p className="mt-6 max-w-3xl text-white/60 text-lg">{SITE.about}</p>
          </Reveal>
        </section>

        {/* ── SERVICES ─────────────────────────────────────── */}
        <section className="section font-serif">
          <Reveal><p className="eyebrow" style={{ color: '#34d399' }}>What we do</p></Reveal>
          <Reveal delay={.05}>
            <h2 className="font-serif h-display mt-3 text-white">
              Capabilities across{' '}
              <span style={{
                background: 'linear-gradient(135deg, #34d399, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                design, code & growth
              </span>.
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 9).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link to={`/services/${s.slug}`} className="block h-full group">
                  <TiltCard
                    className="h-full transition cursor-pointer overflow-hidden"
                    style={{
                      background: 'rgba(8,26,20,0.6)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(52,211,153,0.15)'
                    }}
                  >
                    <div className="relative overflow-hidden rounded-[1.5rem] aspect-[16/7] bg-slate-950">
                      <img
                        src={SERVICE_IMAGES[s.slug]}
                        alt={s.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    </div>

                    <div className="p-6 pt-5">
                      <div className="text-xs font-mono" style={{ color: '#34d399' }}>0{i + 1}</div>
                      <h3 className="mt-2 font-display text-xl text-white">{s.title}</h3>
                      <p className="mt-2 text-white/55 text-sm leading-relaxed">{s.brief}</p>
                      <div
                        className="mt-5 text-sm flex items-center gap-2 transition"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                      >
                        <span className="group-hover:text-brand-400 transition">Explore</span>
                        <HiArrowRight className="group-hover:translate-x-1 group-hover:text-brand-400 transition" />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="btn-ghost"
              style={{ borderColor: '#10b981', color: '#34d399' }}
            >
              View all services <HiArrowRight />
            </Link>
          </div>
        </section>

        {/* ── WHY US ───────────────────────────────────────── */}
        <section className="section font-serif">
          <Reveal><p className="eyebrow" style={{ color: '#34d399' }}>Why choose us</p></Reveal>
          <Reveal delay={.05}>
            <h2 className="font-serif h-display mt-3 text-white">Senior craft. Honest process. Outcomes that compound.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              ['Senior team only', 'No junior handovers. You work with people who have shipped at scale.'],
              ['Outcome obsessed', 'Every sprint ties back to a business metric — not vanity output.'],
              ['Modern stack', 'TypeScript, React, cloud-native, observability and AI-assisted workflows.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * .05}>
                <div
                  className="p-7 h-full"
                  style={{
                    background: 'rgba(8,26,20,0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(52,211,153,0.15)'
                  }}
                >
                  <div
                    className="w-10 h-1 rounded-full mb-4"
                    style={{ background: 'linear-gradient(90deg, #34d399, #10b981)' }}
                  />
                  <h3 className="font-display text-xl text-white">{t}</h3>
                  <p className="mt-3 text-white/55 text-sm leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────── */}
        <section className="section font-serif">
          <div
            className="p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{
              background: 'rgba(8,26,20,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(52,211,153,0.18)'
            }}
          >
            {STATS.map(s => (
              <div key={s.label}>
                <div
                  className="font-display text-4xl md:text-5xl"
                  style={{
                    background: 'linear-gradient(135deg, #34d399, #10b981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  <Counter to={s.value} />{s.suffix}
                </div>
                <div className="mt-2 text-white/55 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────────── */}
        <section className="section font-serif">
          <Reveal><p className="eyebrow" style={{ color: '#34d399' }}>Our technology stack</p></Reveal>
          <Reveal delay={.05}>
            <h2 className="font-serif h-display mt-3 max-w-3xl text-white">
              Battle-tested tools we use to ship{' '}
              <span style={{
                background: 'linear-gradient(135deg, #34d399, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                production-grade
              </span>{' '}
              software.
            </h2>
          </Reveal>
          <Reveal delay={.1}>
            <p className="mt-5 max-w-2xl text-white/55">
              Carefully chosen for performance, longevity and a great developer experience — so your product stays fast, secure and easy to evolve.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {TECH_STACK.map((t, i) => (
              <Reveal key={t.name} delay={(i % 8) * 0.03}>
                <div
                  className="group aspect-square flex flex-col items-center justify-center gap-3 p-4 transition"
                  style={{
                    background: 'rgba(8,26,20,0.5)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(52,211,153,0.12)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(52,211,153,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(52,211,153,0.12)'}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${t.slug}/34d399`}
                    alt={t.name}
                    loading="lazy"
                    className="w-9 h-9 opacity-60 group-hover:opacity-100 transition"
                    onError={e => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="text-xs text-white/60 group-hover:text-white text-center transition">{t.name}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Marquee strip */}
          <div
            className="mt-12 relative overflow-hidden py-6"
            style={{ borderTop: '1px solid rgba(52,211,153,0.12)', borderBottom: '1px solid rgba(52,211,153,0.12)' }}
          >
            <div className="marquee-track gap-12">
              {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0 px-4">
                  <img
                    src={`https://cdn.simpleicons.org/${t.slug}/34d399`}
                    alt=""
                    className="w-5 h-5 opacity-70"
                    onError={e => { e.currentTarget.style.display = 'none' }}
                  />
                  <span className="text-sm text-white/50 whitespace-nowrap">{t.name}</span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#040d0a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#040d0a] to-transparent" />
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────── */}
        <section className="section font-serif relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(16,185,129,0.06)' }} />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(52,211,153,0.06)' }} />

          <div className="relative max-w-7xl mx-auto">
            <Reveal><p className="eyebrow" style={{ color: '#34d399' }}>Testimonials</p></Reveal>
            <Reveal delay={.05}>
              <h2 className="font-serif h-display mt-3 text-white">
                Trusted by teams who{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #34d399, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  care about craft
                </span>.
              </h2>
            </Reveal>

            <div className="mt-14 testimonials-swiper-wrapper">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                className="pb-16"
              >
                {TESTIMONIALS.map((t, i) => {
                  const userAvatar = t.avatar || FALLBACK_AVATARS[i % FALLBACK_AVATARS.length]
                  return (
                    <SwiperSlide key={t.name} className="h-auto">
                      <div
                        className="relative h-full flex flex-col justify-between p-8 md:p-10 rounded-2xl transition-all duration-500 overflow-hidden group shadow-xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(8,26,20,0.8), rgba(4,13,10,0.6))',
                          border: '1px solid rgba(52,211,153,0.15)',
                          backdropFilter: 'blur(12px)'
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(52,211,153,0.35)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(52,211,153,0.15)'}
                      >
                        <span className="absolute -top-3 -right-3 text-[140px] font-serif select-none pointer-events-none leading-none"
                          style={{ color: 'rgba(52,211,153,0.04)' }}>
                          "
                        </span>

                        <div className="relative z-10">
                          <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, idx) => (
                              <HiStar key={idx} className="text-lg" style={{ color: '#f59e0b', filter: 'drop-shadow(0 0 6px rgba(245,158,11,0.5))' }} />
                            ))}
                          </div>
                          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light italic">
                            "{t.text}"
                          </p>
                        </div>

                        <div
                          className="relative z-10 mt-8 pt-6 flex items-center gap-4"
                          style={{ borderTop: '1px solid rgba(52,211,153,0.1)' }}
                        >
                          <div
                            className="relative w-12 h-12 rounded-full overflow-hidden p-[1.5px] group-hover:scale-105 transition-transform duration-300"
                            style={{ background: 'linear-gradient(135deg, #34d399, #10b981, #064e3b)' }}
                          >
                            <div className="w-full h-full rounded-full overflow-hidden" style={{ background: '#040d0a' }}>
                              <img src={userAvatar} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-white transition-colors duration-300 text-base group-hover:text-brand-400">{t.name}</div>
                            <div className="text-white/45 text-sm mt-0.5">{t.role}</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────── */}
        <section className="section font-serif">
          <Reveal><p className="eyebrow" style={{ color: '#34d399' }}>How we work</p></Reveal>
          <Reveal delay={.05}><h2 className="font-serif h-display mt-3 text-white">A process built for momentum.</h2></Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, #34d399, #10b981, #064e3b)' }} />
            <div className="space-y-10">
              {PROCESS.map(([t, d], i) => (
                <Reveal key={t} delay={i * .05}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? 'md:[&>*:first-child]:col-start-2' : ''}`}>
                    <div className="pl-10 md:pl-0">
                      <div
                        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full"
                        style={{ background: '#040d0a', border: '2px solid #10b981' }}
                      />
                      <div
                        className="p-6 md:max-w-md"
                        style={{
                          background: 'rgba(8,26,20,0.6)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid rgba(52,211,153,0.15)'
                        }}
                      >
                        <div className="text-xs font-mono" style={{ color: '#34d399' }}>Step 0{i + 1}</div>
                        <h3 className="mt-2 font-display text-xl text-white">{t}</h3>
                        <p className="mt-2 text-white/55 text-sm">{d}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="section font-serif">
          <div
            className="relative p-10 md:p-16 overflow-hidden"
            style={{
              background: 'rgba(8,26,20,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(52,211,153,0.18)'
            }}
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl"
              style={{ background: 'rgba(16,185,129,0.2)' }} />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl"
              style={{ background: 'rgba(6,78,59,0.15)' }} />
            <div className="relative max-w-3xl">
              <h2 className="font-serif h-display text-white">
                Have a project in mind?{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #34d399, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Let's build it.
                </span>
              </h2>
              <p className="mt-5 text-white/65">Tell us about your goals — we'll come back within one business day with a plan.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton
                  as={Link} to="/contact"
                  className="btn-primary"
                  style={{ background: 'linear-gradient(135deg, #10b981, #047857)', border: 'none' }}
                >
                  Book a discovery call <HiArrowRight />
                </MagneticButton>
                <MagneticButton
                  as="a" href={`mailto:${SITE.emails[0]}`}
                  className="btn-ghost"
                  style={{ borderColor: '#10b981', color: '#34d399' }}
                >
                  Email us
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}