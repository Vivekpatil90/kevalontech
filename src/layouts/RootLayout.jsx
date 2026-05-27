import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import BackToTop from '../components/BackToTop.jsx'

export default function RootLayout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg text-white">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}
