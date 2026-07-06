import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STEPS = [
  {
    num: '01',
    title: 'Create your profile',
    text: 'Tell us who you are — pet parent, provider, or pet lover. One profile. Every feature. No switching.',
  },
  {
    num: '02',
    title: 'Your world opens up',
    text: 'Your home feed shows content, services, and community. Everything near you. Everything that matters.',
  },
  {
    num: '03',
    title: 'Find, connect, earn.',
    text: 'Book trusted services. List yours. Chat directly. Pay securely. Build something that lasts.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.reveal'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="how"
      className="bg-beige py-14 md:py-20 relative"
      aria-label="How Pettxo works"
    >
      <span aria-hidden="true" className="block w-12 h-[3px] bg-orange absolute top-0 left-6 md:left-16" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
          Simple by design
        </span>
        <h2
          className="reveal font-serif font-bold text-dark leading-[1.14] mb-12 md:mb-14 max-w-[480px]"
          style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}
        >
          Three steps. That is all it takes.
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-0 mb-14">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={[
                'reveal flex md:flex-col gap-5 md:gap-3 items-start',
                'md:flex-1 md:px-10',
                i > 0 ? 'md:border-l md:border-[#E5E7EB]' : '',
                i === 0 ? 'md:pl-0' : '',
                i === STEPS.length - 1 ? 'md:pr-0' : '',
              ].join(' ')}
            >
              <div
                aria-hidden="true"
                className="font-serif font-black text-orange opacity-[0.38] leading-none flex-shrink-0 select-none min-w-[60px]"
                style={{ fontSize: '52px' }}
              >
                {s.num}
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[17px] text-dark mb-2 leading-[1.4]">
                  {s.title}
                </h3>
                <p className="font-sans text-[15px] font-light text-muted leading-[1.82]">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center md:text-left">
          <a
            href="#install"
            className="inline-flex items-center justify-center h-[52px] px-10 bg-orange text-white font-sans font-medium text-base rounded-[10px] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(247,89,39,0.38)]"
          >
            Install Pettxo — Free
          </a>
        </div>
      </div>
    </section>
  )
}
