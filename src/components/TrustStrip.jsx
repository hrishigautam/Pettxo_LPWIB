import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  'Startup India Recognised',
  'Open to every pet',
  'Built with a community of rescuers, fosters & volunteers',
]

export default function TrustStrip() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current.querySelectorAll('.trust-item'),
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 92%',
            once: true,
          },
        }
      )
    },
    { scope: ref }
  )

  return (
    <section
      ref={ref}
      className="bg-card border-y border-[#E5E7EB]"
      aria-label="Why trust Pettxo"
    >
      <div className="max-w-[1280px] mx-auto px-3 md:px-12 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-4 gap-y-2">
          {ITEMS.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-x-4 md:gap-x-8"
            >
              <span className="trust-item text-[14px] md:text-[16px] font-medium text-dark whitespace-nowrap">
                {item}
              </span>

              {i < ITEMS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline text-orange text-[22px] leading-none font-bold"
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}