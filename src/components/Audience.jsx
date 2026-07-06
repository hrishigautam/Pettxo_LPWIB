import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TABS = [
  {
    id: 'parents',
    label: 'Pet Parents',
    h3: 'Your pet deserves care you actually trust.',
    points: [
      'Discover groomers, vets, trainers, and walkers near you',
      'See real work and reviews before you book — not after',
      'Book and pay securely inside the app. No DMs. No cash.',
      "Your pet's full service history in one place, forever",
      'Connect with pet people and join your community',
    ],
    closer: '"Stop guessing. Start trusting."',
  },
  {
    id: 'providers',
    label: 'Service Providers',
    h3: 'Turn what you love doing into a business that finds you.',
    points: [
      'Join early — founding providers list free during early access',
      'Get discovered by pet parents near you, without paid ads',
      'Receive booking requests and get paid — all inside the app',
      'Build a reputation that grows with every job you complete',
      'Whether you are certified or just starting — you belong here',
    ],
    closer: '"Your next client is already looking."',
  },
  {
    id: 'lovers',
    label: 'Pet Lovers',
    h3: "You love animals. You don't need to own one to belong.",
    points: [
      'Follow real pet stories and moments from your community',
      'Support rescues, adoption drives, and local causes',
      'Connect with people who understand what you feel for animals',
      'Offer casual help — walking, sitting, fostering — on your terms',
      'Find your pet when you are ready. We will be here.',
    ],
    closer: '"The community you have been looking for."',
  },
]

export default function Audience() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState('parents')
  const cardRefs = useRef({})

  // Reveal header
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.reveal'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.85, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
      }
    )
  }, { scope: sectionRef })

  // Tab switching with GSAP
  const switchTab = (newId) => {
    if (newId === active) return
    const outgoing = cardRefs.current[active]
    const incoming = cardRefs.current[newId]
    if (!outgoing || !incoming) {
      setActive(newId)
      return
    }

    if (window.innerWidth < 768) {
      gsap.to(outgoing, {
        opacity: 0, x: -24, duration: 0.18, ease: 'power2.in',
        onComplete: () => {
          setActive(newId)
          gsap.fromTo(incoming,
            { opacity: 0, x: 24 },
            { opacity: 1, x: 0, duration: 0.28, ease: 'power2.out' }
          )
        },
      })
    } else {
      setActive(newId)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="audience"
      className="bg-beige py-14 md:py-20 relative"
      aria-label="Who Pettxo is for"
    >
      <span aria-hidden="true" className="block w-12 h-[3px] bg-orange absolute top-0 left-6 md:left-16" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
          Who it's for
        </span>
        <h2
          className="reveal font-serif font-bold text-dark leading-[1.15] mb-9 max-w-[520px]"
          style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}
        >
          One platform. Every role. Every story.
        </h2>

        {/* Mobile tab bar */}
        <div
          className="md:hidden flex border-b border-[#E5E7EB] mb-7 sticky top-[62px] z-[100] bg-beige"
          role="tablist"
          aria-label="Select your role"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => switchTab(t.id)}
              className={[
                'flex-1 font-sans text-[13px] font-medium py-3.5 px-1.5 border-b-2 transition-colors whitespace-nowrap',
                active === t.id
                  ? 'text-dark border-orange'
                  : 'text-muted border-transparent',
              ].join(' ')}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards grid (desktop = 3 col, mobile = 1 visible) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {TABS.map((t) => (
            <div
              key={t.id}
              ref={(el) => (cardRefs.current[t.id] = el)}
              role="tabpanel"
              className={[
                'bg-white border border-[#E5E7EB] rounded-[18px] p-8 md:p-7',
                'transition-shadow duration-300',
                'md:block md:opacity-100',
                'md:hover:-translate-y-1 md:hover:shadow-[0_20px_52px_rgba(0,0,0,0.09)]',
                active === t.id ? 'block' : 'hidden md:block',
              ].join(' ')}
            >
              <span className="block font-sans text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
                {t.label}
              </span>
              <h3 className="font-serif font-bold text-[22px] md:text-[26px] leading-[1.22] text-dark mb-5">
                {t.h3}
              </h3>
              <ul className="flex flex-col gap-3 mb-6">
                {t.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-[15px] font-light leading-[1.75] text-dark pl-5 relative before:content-['→'] before:absolute before:left-0 before:top-0 before:text-orange before:text-[13px]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="font-serif italic text-[14.5px] leading-[1.65] text-muted border-t border-[#E5E7EB] pt-5">
                {t.closer}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal text-[15px] font-normal italic text-muted text-center mt-10">
          All three. One platform. One community.
        </p>
      </div>
    </section>
  )
}
