import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InstallButton from '../components/InstallButton.jsx'

const VALUES = [
  { h: 'Every pet deserves better.', b: 'Better care, chosen with confidence — not guesswork from a group chat.' },
  { h: 'Every provider deserves to be found.', b: 'Great work should build a reputation that travels with you, job after job.' },
  { h: 'Trust should be built in, not assumed.', b: 'Real profiles, real reviews, secure payments, and a clear record of everything.' },
  { h: 'The whole ecosystem belongs together.', b: 'Parents, providers, and pet lovers — one platform, one community, one home.' },
]

export default function About() {
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
      <section className="bg-beige pt-32 pb-14 md:pt-40 md:pb-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-4">
            About Pettxo
          </span>
          <h1
            className="reveal font-serif font-black text-dark leading-[1.08] tracking-[-0.02em] mb-6 max-w-[820px]"
            style={{ fontSize: 'clamp(34px, 6vw, 64px)' }}
          >
            Pet care deserved better infrastructure.<br />
            <span className="text-orange">So we're building it.</span>
          </h1>
          <p className="reveal font-light leading-[1.82] text-muted max-w-[620px]" style={{ fontSize: 'clamp(15px,2vw,18px)' }}>
            Pettxo is the social platform for the entire pet ecosystem —
            bringing pet parents, service providers, and pet lovers together in one place.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-card py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 max-w-[760px]">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
            How It Started
          </span>
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-7" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            It started with a forwarded contact.
          </h2>
          <div className="reveal flex flex-col gap-5 font-light leading-[1.85] text-muted" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            <p>Every pet parent knows the routine. You need a groomer, a vet, a walker — so you ask in a group chat. Someone sends a number. You save it. You forget it. Months later you're asking again, and the same person still has no reviews, no profile, no record of the work they've done for you or anyone else.</p>
            <p>Meanwhile, thousands of brilliant groomers, trainers, and walkers stay invisible — building real reputations that live nowhere except word of mouth.</p>
            <p>We looked at this and saw the same thing everywhere: a massive, growing world of pet care with no shared home. No discovery. No trust layer. No memory.</p>
            <p className="text-orange font-semibold">So we decided to build it.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="bg-beige py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
            What We Believe
          </span>
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-10 md:mb-12 max-w-[520px]" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            Four convictions that shape everything we build.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12">
            {VALUES.map((v, i) => (
              <div key={i} className="reveal">
                <div className="font-serif font-black text-orange text-[28px] leading-none mb-4 opacity-90">0{i + 1}</div>
                <h3 className="font-serif font-bold text-dark text-[20px] md:text-[22px] leading-[1.3] mb-2.5">{v.h}</h3>
                <p className="text-[15px] font-light leading-[1.8] text-muted max-w-[420px]">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT PETTXO IS */}
      <section className="bg-card py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 max-w-[760px]">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
            What We Are
          </span>
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-7" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            A platform, not a middleman.
          </h2>
          <div className="reveal flex flex-col gap-5 font-light leading-[1.85] text-muted" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            <p>Pettxo is a discovery, booking, and community platform. We're not a service provider — we don't groom, train, or walk your pet. What we do is connect you with independent professionals near you, give every one of them a real profile, turn every booking into a secure transaction with a record, and surround it all with a community that actually understands pet life.</p>
            <p>And we mean every pet. Dogs and cats, of course — but birds, rabbits, and the more unexpected companions too. We're an open platform: if you care for an animal, or you care for animals for a living, Pettxo is for you.</p>
            <p className="text-dark font-medium">Discovery. Booking. Community. Every pet, every person, in one app.</p>
          </div>
        </div>
      </section>

      {/* THE COMPANY */}
      <section className="bg-beige py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 max-w-[760px]">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
            The Company
          </span>
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-7" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            A real company, built by real pet people.
          </h2>
          <div className="reveal flex flex-col gap-5 font-light leading-[1.85] text-muted" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            <p>Pettxo is a registered company — Pettxo Private Limited — recognised under Startup India. But the part we're prouder of is who's behind it: people who actually live this. Our founder is a dog parent himself.</p>
            <p>We're early, and we're honest about that. What we're not short on is the right kind of company — a growing community of rescuers, fosters, and volunteers who care for animals every single day, and who are helping shape Pettxo from the ground up.</p>
          </div>
          <p className="reveal text-[12px] font-light text-muted opacity-70 mt-7">
            Startup India Recognised · Pettxo Private Limited
          </p>
        </div>
      </section>

      {/* THE FOUNDER */}
      <section className="bg-card py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
            <div className="reveal">
              <img
                src="/images/founder.jpg"
                alt="Hrishi Gautam, Founder & CEO of Pettxo"
                loading="lazy"
                className="w-full max-w-[300px] block rounded-[20px] border border-[#E5E7EB]"
                style={{ aspectRatio: '3 / 4', objectFit: 'cover', objectPosition: 'center top', boxShadow: '0 20px 60px rgba(31,41,55,0.12)' }}
              />
            </div>
            <div className="reveal">
              <span className="block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-5">
                The Founder
              </span>
              <div className="flex flex-col gap-4 font-light leading-[1.85] text-muted mb-7" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
                <p>Hrishi Gautam is a computer-science engineer — and a dog parent to Beera.</p>
                <p>The idea for Pettxo didn't come from a spreadsheet. It came from watching someone close to him struggle to find pet care they could actually trust — the calls, the dead-end group chats, the contacts that led nowhere.</p>
                <p>He had another path in front of him. He'd cleared the GRE and TOEFL, with a master's abroad and a high-paying job waiting. He walked away from both — validated the problem with real pet parents and real providers, and started building.</p>
              </div>
              <blockquote className="font-serif italic text-dark leading-[1.6] mb-7" style={{ fontSize: 'clamp(19px,2.6vw,26px)' }}>
                "We're not building a directory. We're building the trust layer that pet care has been missing — for every pet, and every person who takes care of one."
              </blockquote>
              <p className="font-sans font-semibold text-[16px] text-dark">Hrishi Gautam</p>
              <p className="text-[14px] font-light text-muted mt-1">Founder &amp; CEO, Pettxo</p>
              <p className="mt-5 text-[14px] font-semibold text-orange">Built with love by a team that cares.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center max-w-[620px] mx-auto flex flex-col items-center">
          <h2 className="reveal font-serif font-black text-dark leading-[1.12] tracking-[-0.02em] mb-5" style={{ fontSize: 'clamp(30px,5vw,56px)' }}>
            Be part of it from the start.
          </h2>
          <p className="reveal font-light leading-[1.82] text-muted mb-9" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            Pettxo is just getting going — and that's the best time to join.
          </p>
          <div className="reveal flex flex-col sm:flex-row items-center gap-4">
            <InstallButton className="w-full sm:w-auto min-w-[240px]" />
            <Link
              to="/for-providers"
              className="inline-flex items-center justify-center h-[54px] px-8 border border-[#E5E7EB] text-dark font-medium text-base rounded-[10px] transition-all hover:border-dark w-full sm:w-auto"
            >
              Become a Founding Provider →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
