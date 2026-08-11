import { Helmet } from 'react-helmet-async'

import Hero from '../components/Hero.jsx'
import TrustStrip from '../components/TrustStrip.jsx'
import Problem from '../components/Problem.jsx'
import Features from '../components/Features.jsx'
import Audience from '../components/Audience.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Founder from '../components/Founder.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Pettxo — Because Pets Aren't Just Animals. They're Family.</title>
        <meta
          name="description"
          content="Pettxo — Because Pets Aren't Just Animals. They're Family."
        />
      </Helmet>

      <Hero />
      <TrustStrip />
      <Problem />
      <Features />
      <Audience />
      <HowItWorks />
      <Founder />
      <CTA />
    </>
  )
}