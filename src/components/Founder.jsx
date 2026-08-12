import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default function Founder() {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const quoteRef = useRef(null)
  const attrRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    )

    const split = new SplitText(quoteRef.current, {
      type: 'lines',
    })

    gsap.fromTo(
      split.lines,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    )

    gsap.fromTo(
      attrRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: attrRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    )

    return () => split.revert()
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="bg-[#F5EFE6] py-14 md:py-20"
      aria-label="Why we're building Pettxo"
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div>

          <span
            ref={eyebrowRef}
            className="block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5 opacity-0"
          >
            Why We're Building Pettxo
          </span>

         <blockquote
  ref={quoteRef}
  className="
    font-serif
    italic
    leading-[1.6]
    text-dark
    mb-5
    text-[16px]
    sm:text-[19px]
    md:text-[27px]
  "
>
  "We're not building a directory. We're building the trust layer that
  pet care has been missing — for every pet, and every person who takes
  care of one."
</blockquote>

<div ref={attrRef} className="opacity-0">

  <p
    className="
      font-sans
      font-semibold
      text-[13px]
      sm:text-[15px]
      md:text-[16px]
      text-dark
    "
  >
    Hrishi Gautam
  </p>

  <p
    className="
      text-[12px]
      sm:text-[14px]
      md:text-[16px]
      font-light
      text-muted
      mt-1
    "
  >
    Founder &amp; CEO, Pettxo
  </p>

  <p
    className="
      mt-4
      sm:mt-5
      text-[12px]
      sm:text-[14px]
      md:text-[16px]
      font-semibold
      text-orange
    "
  >
    Built with love by a team that cares.
  </p>

  <Link
    to="/about"
    className="
      inline-block
      mt-3
      sm:mt-4
      text-[12px]
      sm:text-[14px]
      md:text-[16px]
      font-medium
      text-dark
      border-b
      border-orange
      pb-0.5
      hover:text-orange
      transition-colors
    "
  >
    Read our full story →
  </Link>

</div>
        </div>
      </div>
    </section>
  )
}