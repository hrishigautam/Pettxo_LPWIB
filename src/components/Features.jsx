// Features.jsx
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const FEATURES = [
  {
    label: 'Discover. Near You.',
    headline: 'Find trusted groomers, vets, trainers, and walkers in your area.',
    body: [
      'Real profiles. Real work. Real reviews — before you send a single message.',
      'No more asking in group chats. No more forwarded contacts.',
    ],
    image: '/images/screen-services.png',
    alt: 'Services screen showing nearby groomers, walkers, and boarding listings',
    insetY: '1px',   // upar-neeche kitna margin — number badhao to zyada margin (chhoti image)
insetX: '-12px', 
  },
  {
    label: 'Your Daily Feed',
    headline: 'A community that knows what pet life actually looks like.',
    body: [
      'Follow pet parents and service providers near you.',
      'See their work. Build trust through content, not cold calls.',
      'Your feed. Your community. Your city.',
    ],
    image: '/images/screen-feed.png',
    alt: 'Home feed screen showing posts from pet parents and service providers',
      insetY: '1px',   // upar-neeche kitna margin — number badhao to zyada margin (chhoti image)
insetX: '-12px', 
  },
  {
    label: 'Book. Pay. Done.',
    headline: 'Every booking confirmed, paid, and tracked — inside the app.',
    body: [
      'No DMs. No cash handovers. No "I\'ll send you the details later."',
      "Your pet's complete service history, organised in one place, forever.",
    ],
    image: '/images/screen-booking.png',
    alt: 'Booking details screen showing a confirmed, paid booking',
      insetY: '1px',   // upar-neeche kitna margin — number badhao to zyada margin (chhoti image)
insetX: '-12px', 
  },
]

const reduceMotion = typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Features() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    if (reduceMotion) return // fallback markup handles content; no pin
    const root = sectionRef.current
    const screens = gsap.utils.toArray(root.querySelectorAll('.app-screen'))
    const panels  = gsap.utils.toArray(root.querySelectorAll('.app-textpanel'))
    const dots    = gsap.utils.toArray(root.querySelectorAll('.app-dot'))
    const total   = FEATURES.length

    const DOT_ON = '#F75927', DOT_OFF = 'rgba(31,41,55,0.18)'
    gsap.set(screens, { autoAlpha: 0 }); gsap.set(screens[0], { autoAlpha: 1 })
    gsap.set(panels,  { autoAlpha: 0, y: 20 }); gsap.set(panels[0], { autoAlpha: 1, y: 0 })
    gsap.set(dots, { backgroundColor: DOT_OFF })
    if (dots[0]) gsap.set(dots[0], { backgroundColor: DOT_ON })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: () => `+=${window.innerHeight * total}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        snap: { snapTo: gsap.utils.snap(1 / (total - 1)), duration: 0.25, ease: 'power1.inOut' },
        invalidateOnRefresh: true,
      },
    })

    for (let i = 1; i < total; i++) {
      tl.to(screens[i - 1], { autoAlpha: 0, scale: 0.98, duration: 0.4 }, i - 1 + 0.2)
        .to(panels[i - 1],  { autoAlpha: 0, y: -20, duration: 0.4 }, '<')
        .to(screens[i],     { autoAlpha: 1, scale: 1, duration: 0.4 }, '<0.1')
        .fromTo(panels[i],  { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.4 }, '<')
        .to(dots, { backgroundColor: DOT_OFF, duration: 0.3 }, '<')
        .to(dots[i], { backgroundColor: DOT_ON, duration: 0.3 }, '<')
    }

    return () => { tl.scrollTrigger?.kill(); tl.kill() }
  }, { scope: sectionRef })

  // ── Reduced-motion fallback: 3 simple stacked cards, no pin ──
  if (reduceMotion) {
    return (
      <section id="features" className="bg-card py-14 md:py-20" aria-label="What's inside Pettxo">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <Header />
          <div className="flex flex-col gap-14 mt-12">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-9 md:gap-14">
                <div className="w-full max-w-[280px] flex-shrink-0"><Phone><Screen f={f} /></Phone></div>
                <TextPanel f={f} static />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // ── Pinned scroll showcase ──
  return (
    <section ref={sectionRef} id="features" className="bg-card" aria-label="What's inside Pettxo">
      <div className="min-h-screen flex flex-col justify-center max-w-[1280px] mx-auto px-6 md:px-16 py-8 md:py-10">
        <Header />

        <div className="mt-6 md:mt-5 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-16 items-center">
          {/* Phone with stacked screens */}
          <div className="justify-self-center md:justify-self-start w-full max-w-[130px] md:max-w-[230px]">
            <Phone>
              {FEATURES.map((f, i) => (
                <div key={i} className="app-screen absolute inset-0">
                  <Screen f={f} />
                </div>
              ))}
            </Phone>
          </div>

          {/* Text panels (stacked) + dots */}
          <div>
            <div className="relative min-h-[180px] md:min-h-[240px]">
              {FEATURES.map((f, i) => (
                <div key={i} className="app-textpanel absolute inset-0">
                  <TextPanel f={f} />
                </div>
              ))}
            </div>
            <div className="flex gap-2.5 mt-2" aria-hidden="true">
              {FEATURES.map((_, i) => (
                <span key={i} className="app-dot w-2.5 h-2.5 rounded-full bg-[rgba(31,41,55,0.18)] transition-colors duration-300" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Header() {
  return (
    <div>
      <span className="block text-[10.5px] font-semibold tracking-[0.20em] uppercase pt-10 text-orange mb-2">
        What's Inside
      </span>
      <h2 className="font-serif font-bold text-dark leading-[1.14] max-w-[670px]" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
        One app for your entire pet life.
      </h2>
    </div>
  )
}

function TextPanel({ f, static: isStatic }) {
  return (
    <div className={isStatic ? 'flex-1' : ''}>
      <span className="block font-sans text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
        {f.label}
      </span>
      <h3 className="font-serif font-bold text-dark leading-[1.25] mb-4" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>
        {f.headline}
      </h3>
      <p className="text-[15px] font-light leading-[1.82] text-muted">
        {f.body.map((line, j) => (
          <span key={j}>{line}{j < f.body.length - 1 && <br />}</span>
        ))}
      </p>
    </div>
  )
}

function Phone({ children }) {
  return (
    <div
      className="relative w-full mx-auto rounded-[30px] overflow-hidden bg-white"
      style={{
        aspectRatio: '9 / 18',
        border: '6px solid #1F2937',
        boxShadow: '0 24px 60px rgba(31,41,55,0.16)',
      }}
    >
      {children}
    </div>
  )
}

// ── Screen — real app screenshot inside the phone frame.
//     f.insetY shrinks visible height, f.insetX shrinks visible width —
//     either can be used alone or together. Frame size is never touched. ──
function Screen({ f }) {
  if (f.insetY || f.insetX) {
    return (
      <div className="w-full h-full bg-white overflow-hidden flex items-center justify-center">
        <img
          src={f.image}
          alt={f.alt}
          className="select-none pointer-events-none"
          style={{
            width: f.insetX ? `calc(100% - ${f.insetX})` : '100%',
            height: f.insetY ? `calc(100% - ${f.insetY})` : '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
          draggable={false}
        />
      </div>
    )
  }
  return (
    <img
      src={f.image}
      alt={f.alt}
      className="w-full h-full object-cover object-center select-none pointer-events-none"
      draggable={false}
    />
  )
}