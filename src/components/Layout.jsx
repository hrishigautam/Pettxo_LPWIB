import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const lenisRef = useRef(null)
  const location = useLocation()

  // Lenis smooth scroll, synced to GSAP ticker — set up once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const tickerCb = (time) => { lenis.raf(time * 1000) }
    gsap.ticker.add(tickerCb)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCb)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // On route change: jump to top (or to hash target), then refresh ScrollTrigger
  useEffect(() => {
    const lenis = lenisRef.current
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        requestAnimationFrame(() => {
          if (lenis) lenis.scrollTo(el, { offset: -62, immediate: false })
          else el.scrollIntoView()
        })
      }
    } else {
      if (lenis) lenis.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
    }
    // Let layout settle, then recalc triggers
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [location.pathname, location.hash])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
