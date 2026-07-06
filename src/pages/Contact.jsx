import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InstallButton from '../components/InstallButton.jsx'

const FAQ = [
  { q: 'Is Pettxo live yet?', a: 'We’re launching soon. Install the app to be among the first in your city.' },
  { q: 'Does it cost anything to join?', a: 'Pet parents and pet lovers join free, always. For service providers, listing is free right now during our early-access period — later, listing beyond a few services moves to paid plans.' },
  { q: 'Which pets does Pettxo support?', a: 'All of them — dogs, cats, rabbits, birds, and more. Every pet matters here.' },
  { q: 'I’m a service provider. How do I start?', a: 'Head to our For Providers page and create your profile in minutes.' },
]

export default function Contact() {
  const ref = useRef(null)

  useGSAP(() => {
    ref.current.querySelectorAll('.reveal-group').forEach((grp) => {
      gsap.fromTo(
        grp.querySelectorAll('.reveal'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: grp, start: 'top 82%', once: true },
        }
      )
    })
  }, { scope: ref })

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="bg-beige pt-32 pb-14 md:pt-40 md:pb-16 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-4">
            Contact
          </span>
          <h1 className="reveal font-serif font-black leading-[1.08] tracking-[-0.02em] text-dark mb-6 max-w-[760px]" style={{ fontSize: 'clamp(34px, 6vw, 64px)' }}>
            We'd <span className="text-orange">love to</span>  hear from <span className="text-orange"></span>you.
          </h1>
          <p className="reveal font-light leading-[1.82] text-muted max-w-[620px]" style={{ fontSize: 'clamp(15px,2vw,18px)' }}>
            Questions, partnerships, press, or support — reach us directly. We read everything and reply as fast as we can.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="bg-card py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactCard title="General & Support" body="For anything about using Pettxo, your account, or a booking.">
              <a href="mailto:hello@pettxo.com" className="text-orange font-medium text-[15px] hover:underline">Email → hello@pettxo.com</a>
            </ContactCard>

            <ContactCard title="Service Providers" body="Want to list your services or have a question about your profile?">
              <Link to="/for-providers" className="text-orange font-medium text-[15px] hover:underline">Visit For Providers →</Link>
            </ContactCard>

            <ContactCard title="Press & Partnerships" body="For media, collaborations, and partnership enquiries.">
              <a href="mailto:hello@pettxo.com" className="text-orange font-medium text-[15px] hover:underline">Email → hello@pettxo.com</a>
            </ContactCard>

            <ContactCard title="Social" body="Come say hi and see what the community's building.">
              <div className="flex flex-col gap-1.5">
                <a href="https://www.instagram.com/pettxo_app" target="_blank" rel="noopener noreferrer" className="text-orange font-medium text-[15px] hover:underline">Instagram → @pettxo_app</a>
                <a href="https://x.com/pettxo_app" target="_blank" rel="noopener noreferrer" className="text-orange font-medium text-[15px] hover:underline">X → @pettxo_app</a>
              </div>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* QUICK ANSWERS */}
      <section className="bg-beige py-14 md:py-20 reveal-group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 max-w-[760px]">
          <span className="reveal block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-3.5">
            Before You Write
          </span>
          <h2 className="reveal font-serif font-bold text-dark leading-[1.18] mb-10" style={{ fontSize: 'clamp(24px,4vw,40px)' }}>
            A few quick answers.
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
          <h2 className="reveal font-serif font-black text-dark leading-[1.12] tracking-[-0.02em] mb-8" style={{ fontSize: 'clamp(28px,5vw,52px)' }}>
            The easiest way to reach us? Join us.
          </h2>
          <div className="reveal flex flex-col items-center gap-5">
            <InstallButton className="w-full sm:w-auto min-w-[240px]" />
            <p className="text-[13px] font-semibold tracking-[0.16em] uppercase text-orange">Care · Trust · Love</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactCard({ title, body, children }) {
  return (
    <div className="reveal bg-card border border-[#E5E7EB] rounded-[18px] p-7 md:p-8">
      <h3 className="font-serif font-bold text-dark text-[20px] mb-2">{title}</h3>
      <p className="text-[15px] font-light leading-[1.7] text-muted mb-4">{body}</p>
      {children}
    </div>
  )
}