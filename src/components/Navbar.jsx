import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4, HiX, HiChevronDown } from 'react-icons/hi'
import { SERVICES } from '../utils/site.js'
// Assuming your logo image is placed in your assets folder
import LogoImg from '../assets/Kevalon2.png' 

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', hasMenu: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll)
  }, [])



  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-black/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        
        {/* REPLACED: Image Logo Container */}
        <Link to="/" className="flex items-center h-full py-3 gap-2 transition hover:opacity-90">
          <img 
            src={LogoImg} 
            alt="Kevalon Technology Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="
          font-serif text-xl sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent tracking-wide">Kevalon Technology</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            l.hasMenu ? (
              <div key={l.to} className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                <NavLink to={l.to}
                  className={({isActive}) => `px-4 py-2 rounded-full text-sm transition inline-flex items-center gap-1 ${isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white'}`}>
                  {l.label} <HiChevronDown className={`transition ${servicesOpen ? 'rotate-180' : ''}`} />
                </NavLink>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:8}}
                      transition={{duration:.18}}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px]">
                      <div className="glass p-4 grid grid-cols-2 gap-1 bg-black/90 border-white/10">
                        {SERVICES.map(s => (
                          <Link key={s.slug} to={`/services/${s.slug}`}
                            className="px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition">
                            {s.title}
                          </Link>
                        ))}
                        <Link to="/services" className="col-span-2 mt-2 px-4 py-2.5 rounded-xl text-sm text-neon-cyan hover:bg-white/5 border-t border-white/5">
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.to==='/'}
                className={({isActive}) => `px-4 py-2 rounded-full text-sm transition ${isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white'}`}>
                {l.label}
              </NavLink>
            )
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm py-2.5">Let's Talk</Link>
        <button onClick={() => setOpen(o=>!o)} className="md:hidden text-2xl text-white" aria-label="Menu">
          {open ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-6 flex flex-col gap-2">
              {links.map(l => (
                l.hasMenu ? (
                  <div key={l.to}>
                    <button onClick={() => setMobileServicesOpen(o => !o)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base text-white/80">
                      {l.label}
                      <HiChevronDown className={`transition ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
                          className="overflow-hidden pl-4 border-l border-white/10 ml-4">
                          <NavLink to="/services" className="block px-4 py-2.5 text-sm text-neon-cyan">All Services</NavLink>
                          {SERVICES.map(s => (
                            <NavLink key={s.slug} to={`/services/${s.slug}`}
                              className="block px-4 py-2.5 text-sm text-white/60 hover:text-white">
                              {s.title}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink key={l.to} to={l.to} end={l.to==='/'}
                    className={({isActive}) => `px-4 py-3 rounded-xl text-base ${isActive ? 'bg-white/10 text-white' : 'text-white/70'}`}>
                    {l.label}
                  </NavLink>
                )
              ))}
              <Link to="/contact" className="btn-primary justify-center mt-3">Let's Talk</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}