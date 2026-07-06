import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const POINTS = [
  'Using Pettxo means you agree to provide accurate account details, respectful communication, and lawful use of the platform.',
  'Bookings, messages, offers, and provider tools are subject to platform eligibility, moderation, and safety checks.',
  'Pettxo may update operational rules and notify users when important policy or product changes are made.',
  'Pettxo is a discovery platform only — it does not employ or guarantee the work of any service provider, so users should verify a provider independently before booking.',
]

const READ_MORE_URL = 'https://pettxo-policy.blogspot.com/2026/06/terms-of-service-pettxo.html'

export default function Terms() {
  const rootRef = useRef(null)
  const backRef = useRef(null)
  const iconRef = useRef(null)
  const headRef = useRef(null)
  const listRef = useRef(null)
  const footRef = useRef(null)

  useGSAP(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const items = gsap.utils.toArray(listRef.current.children)

    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo(backRef.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.5 }, 0)
      .fromTo(iconRef.current, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.6)' }, 0.15)
      .fromTo(headRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, 0.2)
      .fromTo(items, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, 0.4)
      .fromTo(footRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.95)
  }, { scope: rootRef })

  return (
    <section ref={rootRef} className="min-h-screen bg-beige">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 pt-8 md:pt-20 pb-16">
        <Link
          ref={backRef}
          to="/"
          className="inline-flex items-center gap-2 text-[13.5px] font-medium text-muted hover:text-dark transition-colors mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <span ref={iconRef} className="flex items-center justify-center w-11 h-11 rounded-full bg-orange/10 text-orange flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
              <path d="M14 2v6h6" />
              <path d="M9 13h6M9 17h6" strokeLinecap="round" />
            </svg>
          </span>
          <h1 ref={headRef} className="font-serif font-black text-dark text-[26px] md:text-[32px]">
            Terms of Service
          </h1>
        </div>

        <ul ref={listRef} className="border-t border-[rgba(31,41,55,0.10)]">
          {POINTS.map((p, i) => (
            <li key={i} className="flex gap-4 py-3 border-b border-[rgba(31,41,55,0.10)]">
              <span className="mt-[9px] w-[7px] h-[7px] rounded-full bg-orange flex-shrink-0" />
              <span className="text-dark font-light leading-[1.75] text-[15px] md:text-[16px]">{p}</span>
            </li>
          ))}
        </ul>

        <div ref={footRef} className="mt-6">
          <a
            href={READ_MORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange font-semibold text-[14px] hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </section>
  )
}