import { BrowserRouter, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ForProviders from './pages/ForProviders.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cancellation from './pages/Cancellation'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-providers" element={<ForProviders />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellation" element={<Cancellation />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
