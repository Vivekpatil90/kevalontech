import { useEffect, useState } from 'react'
import RootLayout from './layouts/RootLayout.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import Loader from './components/Loader.jsx'
// import Cursor from './components/Cursor.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import useLenis from './hooks/useLenis.js'

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])
  return (
    <>
      {loading && <Loader />}
      {/* <Cursor /> */}
      <ScrollToTop />
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </>
  )
}
