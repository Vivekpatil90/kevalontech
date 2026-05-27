import { Link } from 'react-router-dom'
import { SITE, SERVICES } from '../utils/site.js'
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import LogoImg from '../assets/Kevalon2.png'

export default function Footer() {
  const icons = { LinkedIn: FaLinkedin, Instagram: FaInstagram, Twitter: FaTwitter, Facebook: FaFacebook }
  return (
    <footer className="font-serif relative mt-20 border-t border-white/10 bg-gradient-to-b from-bg to-black">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex font-display gap-2 text-2xl font-semibold w-max">  
<img 
    src={LogoImg} 
    alt="Kevalon Technology Logo" 
    className="h-10 w-auto object-contain" 
  />
  <span className="w-100 text-xl sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent tracking-wide">
    Kevalon Technology
  </span></div>
          <p className="mt-4 text-white/60 text-sm">Kevalon Technology - Leading IT company in Ahmedabad, Gujarat, India. Expert website development, mobile app development (Flutter, React Native, Android, iOS), SEO services, and digital marketing solutions. Your Digital Growth Partner.</p>
          <div className="flex gap-3 mt-6">
            {SITE.socials.map(s => { const Ico = icons[s.name]; return (
              <a key={s.name} href={s.href} className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:border-neon-cyan hover:text-neon-cyan transition">
                <Ico />
              </a>
            )})}
          </div>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            {['Home','About','Services','Portfolio','Careers','Contact'].map(l => (
              <li key={l}><Link to={`/${l==='Home'?'':l.toLowerCase()}`} className="hover:text-neon-cyan">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Services</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            {SERVICES.slice(0,8).map(s => <li key={s.slug}><a href={`/services/${s.slug}`} className="hover:text-neon-cyan">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <p className="text-white/60 text-sm">{SITE.address}</p>
          <div className="mt-4 space-y-1 text-sm">
            {SITE.phones.map(p => <div key={p}><a href={`tel:${p.replace(/\s/g,'')}`} className="text-white/70 hover:text-neon-cyan">{p}</a></div>)}
            {SITE.emails.map(e => <div key={e}><a href={`mailto:${e}`} className="text-white/70 hover:text-neon-cyan">{e}</a></div>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Kevalon Technology. All rights reserved.
      </div>
    </footer>
  )
}
