import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { handleInstall } from '../lib/stores.js'

const NAV = [
  { label: 'How It Works', to: '/#how' },
  { label: 'For Providers', to: '/for-providers' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const hdrRef = useRef(null)
  const [open, setOpen] = useState(false)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -20px',
      onEnter: () => {
        gsap.to(hdrRef.current, {
          backgroundColor: 'rgba(245,239,230,0.94)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 2px 28px rgba(31,41,55,0.09)',
          duration: 0.35, ease: 'power2.out',
        })
      },
      onLeaveBack: () => {
        gsap.to(hdrRef.current, {
          backgroundColor: 'rgba(245,239,230,0)',
          backdropFilter: 'blur(0px)',
          boxShadow: '0 0 0 rgba(31,41,55,0)',
          duration: 0.3, ease: 'power2.out',
        })
      },
    })
  }, [])

  return (
    <header
      ref={hdrRef}
      className="fixed top-0 left-0 right-0 z-[500] border-t-2 border-orange"
      style={{ backgroundColor: 'rgba(245,239,230,0)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 h-[62px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Pettxo home" onClick={() => setOpen(false)}>
          <span className="w-[34px] h-[34px] bg-orange rounded-lg grid place-items-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <ellipse cx="11"   cy="15"   rx="4.2" ry="3.2" fill="#fff"/>
              <ellipse cx="5.4"  cy="11.8" rx="1.8" ry="2.4" fill="#fff"/>
              <ellipse cx="16.6" cy="11.8" rx="1.8" ry="2.4" fill="#fff"/>
              <ellipse cx="7.6"  cy="8"    rx="1.5" ry="2.0" fill="#fff"/>
              <ellipse cx="14.4" cy="8"    rx="1.5" ry="2.0" fill="#fff"/>
            </svg>
          </span>
          <span className="font-sans font-semibold text-[18px] text-dark tracking-[-0.02em]">Pettxo</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Site navigation" className="hidden md:flex gap-7 text-sm text-muted">
          {NAV.map((n) => (
            <Link key={n.label} to={n.to} className="hover:text-dark transition-colors">{n.label}</Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#"
          onClick={handleInstall}
          className="hidden md:inline-flex bg-orange text-white font-medium text-sm px-4 py-2 rounded-md whitespace-nowrap transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(247,89,39,0.38)]"
        >
          Install Pettxo →
        </a>

        {/* Mobile: install + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#"
            onClick={handleInstall}
            className="bg-orange text-white font-medium text-sm px-3.5 py-2 rounded-md whitespace-nowrap"
          >
            Install →
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="w-9 h-9 grid place-items-center text-dark"
          >
            <span className="relative w-5 h-[14px] block">
              <span className={'absolute left-0 w-5 h-[2px] bg-dark transition-all ' + (open ? 'top-1.5 rotate-45' : 'top-0')} />
              <span className={'absolute left-0 top-1.5 w-5 h-[2px] bg-dark transition-opacity ' + (open ? 'opacity-0' : 'opacity-100')} />
              <span className={'absolute left-0 w-5 h-[2px] bg-dark transition-all ' + (open ? 'top-1.5 -rotate-45' : 'top-3')} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-[rgba(245,239,230,0.98)] backdrop-blur-[14px] border-t border-[#E5E7EB] px-6 py-4 flex flex-col gap-1"
        >
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] text-dark border-b border-[#E5E7EB] last:border-0"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
