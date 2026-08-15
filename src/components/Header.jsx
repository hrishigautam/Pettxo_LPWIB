// Header.jsx
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { handleInstall } from '../lib/stores.js'
import '../CSS/header.css'

const NAV = [
  { label: 'How It Works', to: '/#how' },
  { label: 'For Providers', to: '/for-providers' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const hdrRef = useRef(null)
  const menuRef = useRef(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // Desktop header scroll animation — unchanged
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -20px',

      onEnter: () => {
        gsap.to(hdrRef.current, {
          backgroundColor: 'rgba(245,239,230,0.94)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 2px 28px rgba(31,41,55,0.09)',
          duration: 0.35,
          ease: 'power2.out',
        })
      },

      onLeaveBack: () => {
        gsap.to(hdrRef.current, {
          backgroundColor: 'rgba(245,239,230,0)',
          backdropFilter: 'blur(0px)',
          boxShadow: '0 0 0 rgba(31,41,55,0)',
          duration: 0.3,
          ease: 'power2.out',
        })
      },
    })
  }, [])

  // Mobile menu animation
  useGSAP(
    () => {
      if (!menuRef.current) return

      if (open) {
        gsap.to(menuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out',
        })
      } else {
        gsap.to(menuRef.current, {
          x: '100%',
          opacity: 0,
          duration: 0.35,
          ease: 'power3.inOut',
        })
      }
    },
    { dependencies: [open] }
  )

  const handleNavClick = (e, item) => {
    setOpen(false)

    // How It Works
    if (item.to === '/#how') {
      e.preventDefault()

      if (window.location.pathname === '/') {
        setTimeout(() => {
          const section = document.getElementById('how')

          if (section) {
            section.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        }, 50)
      } else {
        navigate('/#how')

        setTimeout(() => {
          const section = document.getElementById('how')

          if (section) {
            section.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        }, 300)
      }

      return
    }

    navigate(item.to)
  }

  return (
    <header
      ref={hdrRef}
      className="fixed top-0 left-0 right-0 z-[500] border-t-2 border-orange"
      style={{ backgroundColor: 'rgba(245,239,230,0)' }}
    >

      {/* MAIN HEADER — DESKTOP UNCHANGED */}

      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-6 md:px-16 py-3">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1"
          aria-label="Pettxo home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Pettxo Logo"
            className="w-[32px] h-[32px] object-contain flex-shrink-0"
          />

          <span className="font-sans font-semibold text-[18px] text-orange tracking-[-0.02em]">
            Pettxo
          </span>
        </Link>

        {/* Desktop nav — NO CHANGE */}
        <nav
          aria-label="Site navigation"
          className="hidden md:flex gap-7 text-sm text-muted"
        >
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="hover:text-dark transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — NO CHANGE */}
        <a
          href="#"
          onClick={handleInstall}
          className="hidden md:inline-flex bg-orange text-white font-medium text-sm px-4 py-2 rounded-md whitespace-nowrap transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(247,89,39,0.38)]"
        >
          Install Pettxo →
        </a>

        {/* MOBILE — INSTALL + HAMBURGER */}
        <div className="flex md:hidden items-center gap-2">

          {/* Mobile Install Button */}
          <a
            href="#"
            onClick={handleInstall}
            className="mobile-install-button"
          >
            Install Pettxo →
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="mobile-menu-button"
          >
            <span
              className={
                open
                  ? 'menu-line line-one open'
                  : 'menu-line line-one'
              }
            />

            <span
              className={
                open
                  ? 'menu-line line-two open'
                  : 'menu-line line-two'
              }
            />
          </button>

        </div>
      </div>

      {/* MOBILE SIDE DRAWER */}
      <div
        ref={menuRef}
        className={`mobile-side-menu ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu-inner">

          {/* Navigation */}
          <nav
            aria-label="Mobile navigation"
            className="mobile-nav-links"
          >
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.to}
                onClick={(e) => handleNavClick(e, n)}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-text">
                  {n.label}
                </span>

                <span className="mobile-nav-dot" />
              </a>
            ))}
          </nav>

          {/* Bottom */}
          <div className="mobile-menu-bottom">
            <span>Pet life, connected.</span>
          </div>

        </div>
      </div>

      {/* MOBILE BACKDROP */}
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="mobile-menu-backdrop"
          onClick={() => setOpen(false)}
        />
      )}

    </header>
  )
}