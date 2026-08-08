// BuiltBy.jsx
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function BuiltBy() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.reveal'),
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Main Layout
            Mobile  : 1 column
            Tablet  : 1 column
            Desktop : 2 columns
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <div className="relative reveal">
            <img
              src="/images/founder.jpg"
              alt="Hrishi Gautam, Founder & CEO of Pettxo"
              loading="lazy"
              className="
                w-full
                max-w-[340px]
                sm:max-w-[380px]
                lg:max-w-full
                mx-auto
                lg:mx-0
                block
                rounded-[20px]
                border
                border-[#E5E7EB]
              "
              style={{
                aspectRatio: '3 / 4',
                objectFit: 'cover',
                objectPosition: 'center top',
                boxShadow: '0 20px 60px rgba(31,41,55,0.12)',
              }}
            />

            <div className="flex flex-col mt-3.5 gap-0.5 max-w-[340px] sm:max-w-[380px] lg:max-w-full mx-auto lg:mx-0">
              <span className="font-sans font-semibold text-[15px] text-dark">
                Hrishi Gautam
              </span>

              <span className="text-[13px] font-light text-muted">
                Founder &amp; CEO, Pettxo
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="reveal w-full">
            <span className="block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
              About Pettxo
            </span>

            <h2
              className="
                font-serif
                font-bold
                text-dark
                leading-[1.2]
                sm:leading-[1.25]
                mb-4
                w-full
                max-w-[440px]
              "
              style={{
                fontSize: 'clamp(24px, 4vw, 40px)',
              }}
            >
              Built with love by a team that cares.
            </h2>

            <p className="text-[15px] sm:text-base font-light leading-[1.8] sm:leading-[1.85] text-muted mb-7 max-w-[440px]">
              Building Pettxo for every pet parent, every service provider,
              and every person who believes pet life deserves better infrastructure.
            </p>

            <div className="border-l-[3px] border-orange pl-4 sm:pl-5 mb-8 max-w-[500px]">
              <span className="font-serif italic text-[17px] sm:text-[18px] leading-[1.6] sm:leading-[1.65] text-dark">
                "We built Pettxo because we lived the problem first."
              </span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 max-w-[520px]">
              <span className="inline-block text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.10em] uppercase text-orange bg-[rgba(247,89,39,0.12)] px-3 py-1.5 rounded-full">
                Startup India Recognised
              </span>

              <span className="inline-block text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.10em] uppercase text-orange bg-[rgba(247,89,39,0.12)] px-3 py-1.5 rounded-full">
                DIPP254544
              </span>

              <span className="inline-block text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.10em] uppercase text-orange bg-[rgba(247,89,39,0.12)] px-3 py-1.5 rounded-full">
                Incorporated 2026
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}