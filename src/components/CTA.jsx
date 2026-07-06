import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CTA() {
  const sectionRef = useRef(null)
  const btnRef     = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.reveal'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
      }
    )

    const btn = btnRef.current
    ScrollTrigger.create({
      trigger: btn,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.fromTo(btn,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.4)' }
        )
        gsap.set(btn, { boxShadow: '0 0 0 0 rgba(247,89,39,0.35)' })
        gsap.to(btn, {
          boxShadow: '0 0 0 20px rgba(247,89,39,0)',
          duration: 1.6,
          ease: 'power2.out',
        })
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="install"
      className="bg-beige py-14 md:py-20 relative"
      aria-label="Install Pettxo"
    >
      <span aria-hidden="true" className="block w-12 h-[3px] bg-orange absolute top-0 left-6 md:left-16" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center max-w-[620px] mx-auto">
          <h2
            className="reveal font-serif font-black text-dark leading-[1.08] tracking-[-0.02em] mb-5"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            Your pet's world starts here.
          </h2>

          <p
            className="reveal font-light leading-[1.82] text-muted mb-11"
            style={{ fontSize: 'clamp(15px, 2vw, 17px)' }}
          >
            Every pet parent, service provider, and pet lover<br />
            is already looking for what you are offering.<br />
            Pettxo brings you together.
          </p>

          <div className="reveal flex flex-col items-center gap-5 w-full">
            <a
              ref={btnRef}
              href="#"
              aria-label="Install Pettxo — Free"
              className="inline-flex items-center justify-center h-14 px-11 bg-orange text-white font-sans font-medium text-base rounded-[10px] w-full max-w-[320px] md:w-auto transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(247,89,39,0.38)]"
              style={{ opacity: 0 }}
            >
              Install Pettxo — Free
            </a>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[14px] font-medium text-muted border-b border-[#E5E7EB] pb-0.5 hover:text-dark hover:border-dark transition-colors"
              >
                App Store
              </a>
              <span aria-hidden="true" className="text-[#E5E7EB] text-[18px]">·</span>
              <a
                href="#"
                className="text-[14px] font-medium text-muted border-b border-[#E5E7EB] pb-0.5 hover:text-dark hover:border-dark transition-colors"
              >
                Play Store
              </a>
            </div>

            <p className="text-[13px] font-semibold tracking-[0.16em] uppercase text-orange">Care · Trust · Love</p>
          </div>
        </div>
      </div>
    </section>
  )
}
