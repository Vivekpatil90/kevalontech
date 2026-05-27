import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const useEaseCount = (visible, setter, to, duration = 900) => {
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const from = 0;
    const step = (t) => {
      const elapsed = t - start;
      const pct = Math.min(elapsed / duration, 1);
      const eased = from + (to - from) * (1 - Math.pow(1 - pct, 3));
      const finalValue = pct === 1 ? to : Math.floor(eased);
      setter(finalValue);
      if (pct < 1) requestAnimationFrame(step);
    };
    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [visible, to, duration, setter]);
};

const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const IconCalendar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const HomePage = ({ isStandalone = false }) => {
  const statsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [years, setYears] = useState(0);
  const [team, setTeam] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEaseCount(visible, setYears, 2, 900);
  useEaseCount(visible, setTeam, 20, 1000);
  useEaseCount(visible, setProjects, 15, 1100);
  useEaseCount(visible, setClients, 5, 900);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const currentRef = statsRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  const statsData = [
    { label: 'Years in Business', value: years, desc: 'Trusted experience', icon: <IconCalendar /> },
    { label: 'Dedicated Experts', value: team, desc: 'Skilled professionals', icon: <IconUsers /> },
    { label: 'Projects Delivered', value: projects, desc: 'Across industries', icon: <IconCode /> },
    { label: 'Global Clients', value: clients, desc: 'Long-term partnerships', icon: <IconGlobe /> },
  ];

  return (
    <>
      <Helmet>
        <title>Kevalon Technology – Best IT Company in Ahmedabad, India</title>
        <meta
          name="description"
          content="Kevalon Technology is a leading IT company in Ahmedabad offering website development, mobile app development, SEO & custom software solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-kevalon-dark font-sans">
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

          {/* Background geometry */}
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

          <div className="max-w-6xl mx-auto relative z-10">

            {/* Badge + Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest text-kevalon-cyan bg-kevalon-surface border border-kevalon-border rounded-full uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-kevalon-cyan animate-pulse" />
                A partner committed to your success
              </span>

              {isStandalone ? (
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Why Choose <span className="text-gradient-kevalon">Kevalon Technology</span>
                </h1>
              ) : (
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Why Choose <span className="text-gradient-kevalon">Kevalon Technology</span>
                </h2>
              )}

              <p className="mt-3 text-kevalon-muted text-sm max-w-md mx-auto">
                Trusted IT partner for startups and enterprises across Ahmedabad, Gujarat, and India.
              </p>
            </motion.div>

            {/* Main content card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
              className="card-kevalon overflow-hidden mb-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* Left: text */}
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-px w-8 bg-gradient-to-r from-kevalon-cyan to-kevalon-teal" />
                      <span className="text-xs font-semibold tracking-widest text-kevalon-muted uppercase">Ahmedabad · Gujarat · India</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                      Driving Digital Success<br className="hidden sm:block" /> in Ahmedabad
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-kevalon-cyan to-kevalon-teal" />
                    <p className="pl-5 text-sm sm:text-base text-gray-300 leading-relaxed">
                      Kevalon Technology is a trusted IT company in Ahmedabad, delivering reliable and result-driven digital solutions for businesses of all sizes. With expertise in website development, mobile app development, custom software, and SEO services, we build scalable, secure, and high-performance solutions tailored to your business needs.
                    </p>
                  </div>

                  <p className="text-sm text-kevalon-muted leading-relaxed bg-kevalon-surface rounded-2xl px-5 py-4 border border-kevalon-border">
                    Driven by innovation and quality, our team combines technical excellence with a customer-first approach to ensure long-term success. From startups to enterprises, we help businesses in Ahmedabad grow digitally through smart technology, transparent processes, and measurable results.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Mobile Apps', 'Custom Software', 'SEO Services'].map((s) => (
                      <span key={s} className="text-xs font-medium px-3 py-1 rounded-full bg-kevalon-surface text-kevalon-cyan border border-kevalon-border">
                        {s}
                      </span>
                    ))}
                  </div>

                  <blockquote className="relative mt-auto">
                    <div className="absolute -top-1 -left-1 text-5xl leading-none text-kevalon-teal/40 font-serif select-none">"</div>
                    <p className="pl-6 text-sm italic text-kevalon-muted">
                      We don't just build software — we create scalable digital growth.
                    </p>
                  </blockquote>
                </div>

                {/* Right: stats */}
                <div
                  ref={statsRef}
                  className="lg:col-span-5 bg-gradient-to-br from-kevalon-black to-kevalon-navy p-6 sm:p-10 lg:p-12 border-l border-kevalon-border"
                >
                  <div className="mb-5">
                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">Our Latest Stats</p>
                    <div className="h-px w-12 bg-gradient-to-r from-kevalon-cyan to-kevalon-teal" />
                  </div>

                  {/* Mobile: 2x2 grid | Desktop lg+: single column */}
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
                    {statsData.map((item, i) => (
                      <div
                        key={i}
                        className="
                          flex flex-col items-center justify-start gap-3 p-4 rounded-2xl
                          bg-white/5 border border-white/10 hover:bg-white/10
                          transition-colors duration-200 text-center
                          lg:flex-row lg:items-center lg:text-left
                        "
                      >
                        {/* Gradient icon box — number + SVG icon stacked */}
                        <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-kevalon-cyan to-kevalon-teal text-white shrink-0 mx-auto lg:mx-0">
                          <span className="text-lg font-bold leading-none">{item.value}+</span>
                          <span className="mt-1 opacity-80 flex items-center justify-center">{item.icon}</span>
                        </div>

                        {/* Label + description — centered on mobile, left on desktop */}
                        <div className="flex flex-col items-center lg:items-start w-full">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 leading-tight">
                            {item.label}
                          </span>
                          <span className="text-xs text-slate-300 mt-1 leading-tight">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-3xl card-kevalon p-8 hover:border-kevalon-cyan/30 transition-all duration-300"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-kevalon-cyan/10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-kevalon-teal text-white mb-5">
                    <IconTarget />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-3">Our Mission</h3>
                  <div className="h-0.5 w-10 bg-gradient-to-r from-kevalon-cyan to-kevalon-teal rounded-full mb-4" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    At Kevalon Technology, our mission is to empower businesses with innovative, secure, and high-performance digital solutions. As a trusted IT company in Ahmedabad, we deliver customized website development, mobile app development, custom software solutions, and SEO services that help businesses grow and stay competitive. With a strong focus on quality, reliability, and scalability, we turn ideas into impactful digital experiences for startups and enterprises across Ahmedabad, Gujarat, and India.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-3xl card-kevalon p-8 hover:border-kevalon-cyan/30 transition-all duration-300"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-kevalon-teal/10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-kevalon-teal-mid text-white mb-5">
                    <IconEye />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-3">Our Vision</h3>
                  <div className="h-0.5 w-10 bg-gradient-to-r from-kevalon-cyan-bright to-kevalon-teal rounded-full mb-4" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    At Kevalon Technology, our vision is to become a leading digital agency and IT company in Ahmedabad, delivering innovative digital solutions that drive sustainable business growth. We aim to simplify life through technology, enhance productivity, and create lasting value by setting new standards in web development, mobile app development, SEO, and digital transformation across Gujarat, India, and beyond.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;