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
  },
  {
    label: 'Your Daily Feed',
    headline: 'A community that knows what pet life actually looks like.',
    body: [
      'Follow pet parents and service providers near you.',
      'See their work. Build trust through content, not cold calls.',
      'Your feed. Your community. Your city.',
    ],
  },
  {
    label: 'Book. Pay. Done.',
    headline: 'Every booking confirmed, paid, and tracked — inside the app.',
    body: [
      'No DMs. No cash handovers. No "I\'ll send you the details later."',
      "Your pet's complete service history, organised in one place, forever.",
    ],
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
                <div className="w-full max-w-[280px] flex-shrink-0"><Phone><Screen i={i} /></Phone></div>
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
                  <Screen i={i} />
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

// ── Clean in-app mock screens (no screenshots, no error toasts) ──
function Screen({ i }) {
  if (i === 0) return <ScreenDiscover />
  if (i === 1) return <ScreenFeed />
  return <ScreenBooking />
}

function StatusBar({ title }) {
  return (
    <div className="flex items-center justify-center relative px-4 pt-3 pb-2 border-b border-[#F0E8DF]">
      <span className="font-sans font-semibold text-[12px] text-dark">{title}</span>
    </div>
  )
}

function ScreenDiscover() {
  const rows = [
    { n: 'Aarav · Groomer', m: 'Mobile grooming · ★ 4.9' },
    { n: 'Sky Pet Clinic', m: 'Vet · Open now · ★ 4.8' },
    { n: 'Maya · Dog Walker', m: 'Daily walks · ★ 5.0' },
  ]
  return (
    <div className="w-full h-full bg-card flex flex-col">
      <StatusBar title="Discover" />
      <div className="px-3.5 pt-3">
        <div className="flex items-center gap-2 bg-white rounded-full border border-[#E5E7EB] px-3.5 py-2.5">
          <span className="w-3 h-3 rounded-full border-2 border-muted" />
          <span className="text-[12px] text-muted">Groomers near you</span>
        </div>
      </div>
      <div className="px-3.5 py-3 flex flex-col gap-2.5">
        {rows.map((r, k) => (
          <div key={k} className="flex items-center gap-3 bg-white rounded-[12px] border border-[#E5E7EB] p-2">
            <div className="w-7 h-7 rounded-full bg-[rgba(247,89,39,0.12)] border border-orange flex-shrink-0" />
            <div className="min-w-0">
              <p className="font-sans font-semibold text-[10px] text-dark truncate">{r.n}</p>
              <p className="text-[9.5px] text-muted truncate">{r.m}</p>
            </div>
            <span className="ml-auto text-[9px] font-semibold text-orange bg-[rgba(247,89,39,0.12)] rounded-full px-2 py-1">Book</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenFeed() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <StatusBar title="Pettxo" />
      <div className="p-3.5 flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full flex-shrink-0 bg-[rgba(247,89,39,0.12)] border border-orange" />
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-[10px] text-dark">Raju Rastogi</span>
            <span className="text-[8px] font-semibold text-orange bg-[rgba(247,89,39,0.12)] rounded-full px-2 py-0.5 self-start">Pet Parent</span>
          </div>
        </div>
        <div className="rounded-[12px] bg-card border border-[#E5E7EB] p-3">
          <p className="font-serif text-[10.5px] leading-[1.55] text-dark mb-2.5">
            "Because pets aren't just animals. They're family."
          </p>
          <div className="flex gap-3.5 text-[9px] text-muted">
            <span>♡ 12</span><span>💬 3</span><span>↗ Share</span>
          </div>
        </div>
        <div className="rounded-[12px] border border-[#E5E7EB] px-3 py-2.5 flex flex-col gap-1">
          <span className="text-[7.5px] font-bold tracking-[0.12em] uppercase text-orange">Near you</span>
          <span className="text-[9.5px] font-light text-muted">Discover pet parents in your city</span>
        </div>
      </div>
    </div>
  )
}

function ScreenBooking() {
  return (
    <div className="w-full h-full bg-card flex flex-col">
      <StatusBar title="Booking" />
      <div className="flex-1 flex flex-col items-center px-4 pt-6">
        <div className="w-12 h-12 rounded-full bg-orange grid place-items-center mb-3">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <p className="font-serif font-bold text-[13px] text-dark mb-1">Booking confirmed</p>
        <p className="text-[9px] text-muted mb-4">Grooming · Sat, 10:00 AM</p>
        <div className="w-full text-[9px] bg-white rounded-[9px] border border-[#E5E7EB] p-3 flex flex-col gap-2">
          <Row k="Provider" v="Aarav · Groomer" />
          <Row k="Status" v="Paid securely" accent />
          <Row k="Code" v="PTX-4821" />
        </div>
      </div>
      <div className="px-3 pb-3 pt-3">
        <div className="w-full text-center bg-orange text-white font-semibold text-[9px] rounded-full py-2">View service history</div>
      </div>
    </div>
  )
}

function Row({ k, v, accent }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[10.5px] text-muted">{k}</span>
      <span className={'text-[11px] font-semibold ' + (accent ? 'text-orange' : 'text-dark')}>{v}</span>
    </div>
  )
}







