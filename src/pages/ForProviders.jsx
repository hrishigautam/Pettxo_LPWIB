import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InstallButton from '../components/InstallButton.jsx'

const BENEFITS = [
  { h: 'Get discovered, not buried.', b: 'Pet parents near you search by service and location. Show up where they’re looking.' },
  { h: 'Free while we’re in early access.', b: 'Founding providers list free right now — list everything you offer, no fee. As Pettxo grows, listing beyond a few services will move to paid plans. Get in early and lock in your terms before it does.' },
  { h: 'Bookings and payments, in one place.', b: 'Receive requests, confirm jobs, and get paid securely inside the app.' },
  { h: 'A reputation that compounds.', b: 'Every completed job and honest review builds a profile that works for you 24/7.' },
  { h: 'Built for everyone.', b: 'Certified professional or just starting out — if you care for animals, you belong.' },
]

const STEPS = [
  { n: '01', t: 'Create your profile', d: 'Add your services, your area, and your work. It takes minutes — and right now, for founding providers, it’s free.' },
  { n: '02', t: 'Go live instantly', d: 'Your profile is live right away with an Unverified badge — our team reviews and verifies it shortly after, so you never wait to start.' },
  { n: '03', t: 'Receive booking requests', d: 'Pet parents near you find you, message you, and request your services in-app.' },
  { n: '04', t: 'Get paid securely', d: 'Complete the job, confirm with the in-app code, and get paid. No cash chasing.' },
]

const FAQ = [
  { q: 'What does it cost to list?', a: 'Right now, nothing. Founding providers who join during our early-access period list free, with no cap on services. As Pettxo grows, listing beyond a few services will move to paid plans — but joining early lets you lock in your terms before that happens. Full details are in the Service Provider Agreement you’ll review at signup.' },
  { q: 'How does verification work?', a: 'You go live immediately with an Unverified badge. Our team reviews your details and verifies your profile shortly after. Verified or not, you can start straight away.' },
  { q: 'Who can join?', a: 'Anyone who cares for animals — full-time professionals, part-timers, and volunteers alike.' },
]

const LIST_LABEL = 'Become a Founding Provider'
const LIST_LABEL_SHORT = 'Install Pettxo — Free'
export default function ForProviders() {
  const ref = useRef(null)

  useGSAP(() => {
    ref.current.querySelectorAll('.reveal-group').forEach((grp) => {
      gsap.fromTo(
        grp.querySelectorAll('.reveal'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: grp, start: 'top 80%', once: true },
        }
      )
    })
  }, { scope: ref })

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="bg-beige pt-32 pb-14 md:pt-25 md:pb-25 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-6">
            For Service Providers
          </span>
          <h1 className="reveal font-serif font-black text-dark leading-[1.04] tracking-[-0.025em] mb-6" style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}>
            Your <span className="text-orange">  next client</span> is<br />already
            <span className="text-orange">  looking.</span>
          </h1>
          <p className="reveal font-light leading-[1.82] text-muted max-w-[620px] mb-20" style={{ fontSize: 'clamp(15px,2vw,18px)' }}>
            Groomers, vets, walkers, trainers, sitters — get discovered by pet parents near you, take bookings, and get paid securely inside the app.
          </p>
          <div className="reveal">
            <InstallButton label={LIST_LABEL} className="w-full sm:w-auto min-w-[260px]" />
            <p className="mt-3.5 text-[12.5px] font-light text-muted">Join early — list free while we’re in early access. This won’t last forever.</p>
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section className="bg-card py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 max-w-[760px]">
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-7" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            You do great work. Right now, only word of mouth knows it.
          </h2>
          <div className="reveal flex flex-col gap-5 font-light leading-[1.85] text-muted" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            <p>The best groomers and walkers we know get clients one way — someone tells someone. It's slow, it forgets, and it leaves your reputation trapped in other people's chats.</p>
            <p>Pettxo gives your work a home. A profile that grows. Reviews that stay. And a steady way for new clients to find you, without spending a rupee on ads.</p>
          </div>
        </div>
      </section>

      {/* WHY PETTXO */}
      <section className="bg-beige py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
            Why Pettxo
          </span>
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-10 md:mb-12 max-w-[520px]" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            Everything you need to get found and get paid.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12">
            {BENEFITS.map((v, i) => (
              <div key={i} className="reveal">
                <div className="font-serif font-black text-orange text-[28px] leading-none mb-4 opacity-90">0{i + 1}</div>
                <h3 className="font-serif font-bold text-dark text-[20px] md:text-[22px] leading-[1.3] mb-2.5">{v.h}</h3>
                <p className="text-[15px] font-light leading-[1.8] text-muted max-w-[440px]">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (PROVIDERS) */}
      <section className="bg-card py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
            Get Started In Minutes
          </span>
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-10 md:mb-12 max-w-[520px]" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            List today. Get found tomorrow.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {STEPS.map((s) => (
              <div key={s.n} className="reveal">
                <div aria-hidden="true" className="font-serif font-black text-orange opacity-[0.18] leading-none mb-3 select-none" style={{ fontSize: '52px' }}>{s.n}</div>
                <h3 className="font-sans font-semibold text-[17px] text-dark mb-2 leading-[1.4]">{s.t}</h3>
                <p className="text-[15px] font-light leading-[1.8] text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & TRANSPARENCY */}
      <section className="bg-beige py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 max-w-[760px]">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
            Straight Answers
          </span>
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-10" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            No surprises. Here's exactly how it works.
          </h2>
          <div className="flex flex-col gap-8">
            {FAQ.map((f, i) => (
              <div key={i} className="reveal border-l-[3px] border-orange pl-5">
                <p className="font-sans font-semibold text-dark text-[17px] mb-2">{f.q}</p>
                <p className="text-[15px] font-light leading-[1.8] text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center max-w-[620px] mx-auto flex flex-col items-center">
          <h2 className="reveal font-serif font-black text-dark leading-[1.12] tracking-[-0.02em] mb-5" style={{ fontSize: 'clamp(30px,5vw,56px)' }}>
            Become a founding provider today.
          </h2>
          <p className="reveal font-light leading-[1.82] text-muted mb-9" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            The early providers are the ones pet parents will find first.<br />
            Join now and list free while early access lasts.
          </p>
          <div className="reveal flex flex-col items-center gap-3.5">
            <InstallButton label={LIST_LABEL_SHORT} className="w-full sm:w-auto min-w-[260px]" />
            <p className="text-[12.5px] font-light text-muted">Available on App Store &amp; Play Store</p>
            <p className="text-[12px] font-light text-muted opacity-80 max-w-[420px]">
              By listing your services, you agree to our Service Provider Agreement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
