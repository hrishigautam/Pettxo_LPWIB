import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CANCELLATION_POINTS = [
  'Free cancellation is available within 30 minutes of booking confirmation.',
  'After the free-cancellation window, refund eligibility depends on how close the cancellation is to the scheduled service time.',
  'If the provider does not respond within 24 hours, or before 1 hour of service start, whichever comes first, the request expires automatically.',
  'Approved refunds are processed back to the original payment method according to the payment partner timeline.',
]

const REFUND_POINTS = [
  'Eligible refunds are calculated after any applicable cancellation charges, service fees, or offer adjustments.',
  'If a provider cannot fulfill a confirmed booking, Pettxo will initiate the applicable refund automatically.',
  'Refund timelines depend on your bank, card network, or wallet provider after Pettxo marks the refund as processed.',
]

const READ_MORE_URL = 'https://pettxo-policy.blogspot.com/2026/06/cancellation-refund-policy.html?m=1'

function PolicyBlock({ iconRef, listRef, icon, title, points }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-6">
        <span ref={iconRef} className="flex items-center justify-center w-11 h-11 rounded-full bg-orange/10 text-orange flex-shrink-0">
          {icon}
        </span>
        <h1 className="font-serif font-black text-dark text-[26px] md:text-[32px]">
          {title}
        </h1>
      </div>

      <ul ref={listRef} className="border-t border-[rgba(31,41,55,0.10)]">
        {points.map((p, i) => (
          <li key={i} className="flex gap-4 py-5 border-b border-[rgba(31,41,55,0.10)]">
            <span className="mt-[9px] w-[7px] h-[7px] rounded-full bg-orange flex-shrink-0" />
            <span className="text-dark font-light leading-[1.75] text-[15px] md:text-[16px]">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Cancellation() {
  const rootRef = useRef(null)
  const backRef = useRef(null)
  const icon1Ref = useRef(null)
  const list1Ref = useRef(null)
  const icon2Ref = useRef(null)
  const list2Ref = useRef(null)
  const footRef = useRef(null)

  useGSAP(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const items1 = gsap.utils.toArray(list1Ref.current.children)
    const items2 = gsap.utils.toArray(list2Ref.current.children)

    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo(backRef.current,  { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.5 }, 0)
      .fromTo(icon1Ref.current, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.6)' }, 0.15)
      .fromTo(items1, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.35)
      .fromTo(icon2Ref.current, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.6)' }, 0.7)
      .fromTo(items2, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.85)
      .fromTo(footRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.25)
  }, { scope: rootRef })

  return (
    <section ref={rootRef} className="min-h-screen bg-beige">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-16">
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

        <PolicyBlock
          iconRef={icon1Ref}
          listRef={list1Ref}
          title="Cancellation Policy"
          points={CANCELLATION_POINTS}
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <path d="M3 9h18M8 2v4M16 2v4" strokeLinecap="round" />
              <path d="M9.5 13.5l5 5M14.5 13.5l-5 5" strokeLinecap="round" />
            </svg>
          }
        />

        <PolicyBlock
          iconRef={icon2Ref}
          listRef={list2Ref}
          title="Refund Policy"
          points={REFUND_POINTS}
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 3v8M6 3l3 3M6 3 3 6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 12h6a3 3 0 0 1 0 6h-1" strokeLinecap="round" />
              <path d="M14 21l-3-3 3-3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />

        <div ref={footRef}>
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