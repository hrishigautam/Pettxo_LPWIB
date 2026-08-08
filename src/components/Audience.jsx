// Audience.jsx
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

  // --------------------------------------------------
  // HEADER REVEAL
  // --------------------------------------------------
  useGSAP(
    () => {
      const reveals = sectionRef.current?.querySelectorAll('.reveal')

      if (!reveals?.length) return

      gsap.fromTo(
        reveals,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      )
    },
    {
      scope: sectionRef,
    }
  )

  // --------------------------------------------------
  // TAB SWITCH
  // Mobile + Tablet = animated
  // Desktop = simple switch
  // --------------------------------------------------
  const switchTab = (newId) => {
    if (newId === active) return

    const isMobileOrTablet = window.innerWidth < 1024

    // Desktop
    if (!isMobileOrTablet) {
      setActive(newId)
      return
    }

    const outgoing = cardRefs.current[active]

    // Fade old card out first
    if (outgoing) {
      gsap.to(outgoing, {
        opacity: 0,
        x: -20,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          setActive(newId)

          // Wait for React to render the new active card
          requestAnimationFrame(() => {
            const incoming = cardRefs.current[newId]

            if (!incoming) return

            gsap.fromTo(
              incoming,
              {
                opacity: 0,
                x: 20,
              },
              {
                opacity: 1,
                x: 0,
                duration: 0.3,
                ease: 'power2.out',
              }
            )
          })
        },
      })
    } else {
      setActive(newId)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="w-full bg-beige py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* ---------------------------------------------
            SECTION HEADER
        --------------------------------------------- */}
        <span className="reveal block text-[10.5px] sm:text-[11px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
          Who it's for
        </span>

        <h2
          className="reveal font-serif font-bold text-dark leading-[1.15] mb-7 sm:mb-9 max-w-[520px]"
          style={{
            fontSize: 'clamp(24px, 4vw, 42px)',
          }}
        >
          One platform. Every role. Every story.
        </h2>

        {/* ---------------------------------------------
            MOBILE + TABLET TAB BAR

            IMPORTANT:
            lg:hidden = visible until 1023px
        --------------------------------------------- */}
        <div
          className="
            lg:hidden
            flex
            w-full
            border-b
            border-[#E5E7EB]
            mb-6
            sm:mb-8
            sticky
            top-[62px]
            z-[50]
            bg-beige/95
            backdrop-blur-sm
          "
          role="tablist"
          aria-label="Select your role"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => switchTab(t.id)}
              className={`
                flex-1
                min-w-0
                font-sans
                text-[11px]
                sm:text-[13px]
                font-medium
                py-3
                sm:py-3.5
                px-1
                sm:px-2
                border-b-2
                transition-all
                duration-200
                whitespace-nowrap
                ${
                  active === t.id
                    ? 'text-dark border-orange'
                    : 'text-muted border-transparent'
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ---------------------------------------------
            CARDS

            Mobile + Tablet:
            1 card only

            Desktop (lg):
            3 columns
        --------------------------------------------- */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-5
            sm:gap-6
            items-start
          "
        >
          {TABS.map((t) => {
            const isActive = active === t.id

            return (
              <div
                key={t.id}
                ref={(el) => {
                  cardRefs.current[t.id] = el
                }}
                role="tabpanel"
                aria-hidden={!isActive}
                className={`
                  w-full
                  bg-white
                  border
                  border-[#E5E7EB]
                  rounded-[18px]

                  p-5
                  sm:p-7
                  lg:p-7

                  transition-shadow
                  duration-300

                  ${
                    isActive
                      ? 'block opacity-100'
                      : 'hidden lg:block'
                  }

                  lg:hover:-translate-y-1
                  lg:hover:shadow-[0_20px_52px_rgba(0,0,0,0.09)]
                `}
              >
                {/* Label */}
                <span className="block font-sans text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
                  {t.label}
                </span>

                {/* Heading */}
                <h3
                  className="
                    font-serif
                    font-bold
                    text-dark
                    leading-[1.22]
                    mb-5
                    text-[22px]
                    sm:text-[24px]
                    lg:text-[26px]
                  "
                >
                  {t.h3}
                </h3>

                {/* Points */}
                <ul className="flex flex-col gap-3 mb-6">
                  {t.points.map((p, i) => (
                    <li
                      key={i}
                      className="
                        text-[14px]
                        sm:text-[15px]
                        font-light
                        leading-[1.7]
                        sm:leading-[1.75]
                        text-dark
                        pl-5
                        relative
                        before:content-['→']
                        before:absolute
                        before:left-0
                        before:top-0
                        before:text-orange
                        before:text-[13px]
                      "
                    >
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Closer */}
                <p
                  className="
                    font-serif
                    italic
                    text-[14px]
                    sm:text-[14.5px]
                    leading-[1.65]
                    text-muted
                    border-t
                    border-[#E5E7EB]
                    pt-5
                  "
                >
                  {t.closer}
                </p>
              </div>
            )
          })}
        </div>

        {/* ---------------------------------------------
            BOTTOM TEXT
        --------------------------------------------- */}
        <p
          className="
            reveal
            text-[14px]
            sm:text-[15px]
            font-normal
            italic
            text-muted
            text-center
            mt-8
            sm:mt-10
            px-3
          "
        >
          All three. One platform. One community.
        </p>
      </div>
    </section>
  )
}