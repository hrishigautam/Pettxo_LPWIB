import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default function Founder() {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const quoteRef   = useRef(null)
  const attrRef    = useRef(null)

  useGSAP(() => {
    gsap.fromTo(eyebrowRef.current,
      { opacity: 0, y: 18 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      }
    )

    const split = new SplitText(quoteRef.current, { type: 'lines' })

    gsap.fromTo(split.lines,
      { opacity: 0, y: 18 },
      {
        opacity: 1, y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: quoteRef.current, start: 'top 80%', once: true },
      }
    )

    gsap.fromTo(attrRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: attrRef.current, start: 'top 85%', once: true },
      }
    )

    return () => split.revert()
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="bg-card py-14 md:py-20"
      aria-label="Why we're building Pettxo"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-16 items-start">

          {/* Circular founder photo */}
          <div className="justify-self-center md:justify-self-start">
            <img
              src="/images/founder.jpg"
              alt="Hrishi Gautam, Founder & CEO of Pettxo"
              loading="lazy"
              className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full object-cover border border-[#E5E7EB]"
              style={{ objectPosition: 'center top', boxShadow: '0 20px 50px rgba(31,41,55,0.12)' }}
            />
          </div>

          <div>
            <span
              ref={eyebrowRef}
              className="block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5 opacity-0"
            >
              Why We're Building Pettxo
            </span>

            <blockquote
              ref={quoteRef}
              className="font-serif italic leading-[1.65] text-dark mb-6"
              style={{ fontSize: 'clamp(19px, 2.6vw, 26px)' }}
            >
              "We're not building a directory. We're building the trust layer that pet care has been missing — for every pet, and every person who takes care of one."
            </blockquote>

            <p className="text-[15px] md:text-[16px] font-light leading-[1.85] text-muted mb-7 max-w-[560px]">
              I watched someone close to me struggle to find pet care they could trust.
              I left a high-paying job and a path to study abroad to fix it. Pettxo is that fix.
            </p>

            <div ref={attrRef} className="opacity-0">
              <p className="font-sans font-semibold text-[16px] text-dark">Hrishi Gautam</p>
              <p className="text-[14px] font-light text-muted mt-1">Founder &amp; CEO, Pettxo</p>
              <p className="mt-5 text-[14px] font-semibold text-orange">
                Built with love by a team that cares.
              </p>
              <Link to="/about" className="inline-block mt-4 text-[14px] font-medium text-dark border-b border-orange pb-0.5 hover:text-orange transition-colors">
                Read our full story →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
