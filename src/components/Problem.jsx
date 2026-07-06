import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default function Problem() {
  const sectionRef  = useRef(null)
  const headlineRef = useRef(null)
  const bodyRef     = useRef(null)
  const closerRef   = useRef(null)

  useGSAP(() => {
    const split = new SplitText(headlineRef.current, { type: 'words,lines' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo(split.words,
      { opacity: 0, y: 40, rotateX: -20 },
      {
        opacity: 1, y: 0, rotateX: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power3.out',
      }
    )
    .fromTo(bodyRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(closerRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.1'
    )

    return () => split.revert()
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="bg-beige py-14 md:py-20 relative"
      aria-label="The problem with pet care today"
    >
      <span aria-hidden="true" className="block w-12 h-[3px] bg-orange absolute top-0 left-6 md:left-16" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <h2
          ref={headlineRef}
          className="font-serif font-bold text-dark leading-[1.12] tracking-[-0.01em] mb-9 md:mb-11"
          style={{ fontSize: 'clamp(26px, 4.5vw, 50px)' }}
        >
          Everything in life has an app. Pet care still runs on forwarded screenshots.
        </h2>

        <div ref={bodyRef} className="flex flex-col gap-2.5 max-w-[600px] mb-9">
          <p className="font-light leading-[1.85] text-dark" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            A great groomer with no online presence.
          </p>
          <p className="font-light leading-[1.85] text-dark" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            A walker who only gets work through one chat group.
          </p>
          <p className="font-light leading-[1.85] text-dark" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            An adoption post that disappears in 48 hours.
          </p>
          <p className="font-light leading-[1.85] text-dark" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            All this happening in a massive, growing, completely unorganised world.
          </p>
        </div>

        <p ref={closerRef} className="text-[17px] font-semibold leading-[1.7] text-orange">
          Pettxo organises it.<br />
          For every pet. For every person. For everyone in the ecosystem.
        </p>
      </div>
    </section>
  )
}
