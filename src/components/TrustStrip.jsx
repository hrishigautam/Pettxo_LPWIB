import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ITEMS = [
  'Startup India Recognised',
  'Open to every pet',
  'Built with a community of rescuers, fosters & volunteers',
]

export default function TrustStrip() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current.querySelectorAll('.trust-item'),
      { opacity: 0, y: 14 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true },
      }
    )
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-card border-y border-[#E5E7EB]" aria-label="Why trust Pettxo">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-5 md:py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:gap-x-6">
          {ITEMS.map((item, i) => (
            <div key={item} className="flex items-center gap-x-3 md:gap-x-6">
              <span className="trust-item text-[12px] md:text-[13px] font-medium text-dark whitespace-nowrap">
                {item}
              </span>
              {i < ITEMS.length - 1 && (
                <span aria-hidden="true" className="text-orange text-[12px] hidden sm:inline">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
