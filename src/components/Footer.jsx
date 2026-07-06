import { Link } from 'react-router-dom'

const A = 'text-[13px] font-normal text-muted hover:text-dark transition-colors'

export default function Footer() {
  return (
    <footer
      id="ftr"
      className="bg-card border-t border-[#E5E7EB] pt-14 pb-9"
      aria-label="Site footer"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        {/* Brand row */}
        <div className="flex flex-col gap-1.5 mb-10">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Pettxo home">
            <span className="w-7 h-7 bg-orange rounded-[7px] grid place-items-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                <ellipse cx="11"   cy="15"   rx="4.2" ry="3.2" fill="#fff"/>
                <ellipse cx="5.4"  cy="11.8" rx="1.8" ry="2.4" fill="#fff"/>
                <ellipse cx="16.6" cy="11.8" rx="1.8" ry="2.4" fill="#fff"/>
                <ellipse cx="7.6"  cy="8"    rx="1.5" ry="2.0" fill="#fff"/>
                <ellipse cx="14.4" cy="8"    rx="1.5" ry="2.0" fill="#fff"/>
              </svg>
            </span>
            <span className="font-sans font-semibold text-[18px] text-dark tracking-[-0.02em]">Pettxo</span>
          </Link>
          <p className="text-[13px] font-normal text-muted">Where Pets &amp; People Connect</p>
          <p className="text-[13px] font-light text-muted">The social platform for the pet ecosystem.</p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start border-t border-[#E5E7EB] pt-10">
          <nav className="flex flex-col gap-3" aria-label="Platform links">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-dark mb-1">Platform</p>
            <Link to="/#how" className={A}>How It Works</Link>
            <Link to="/#features" className={A}>Features</Link>
            <Link to="/#audience" className={A}>Community</Link>
          </nav>

          <nav className="flex flex-col gap-3" aria-label="For you links">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-dark mb-1">For You</p>
            <Link to="/#audience" className={A}>For Pet Parents</Link>
            <Link to="/for-providers" className={A}>For Service Providers</Link>
            <Link to="/#audience" className={A}>For Pet Lovers</Link>
          </nav>

          <nav className="flex flex-col gap-3" aria-label="Company links">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-dark mb-1">Company</p>
            <Link to="/about" className={A}>About</Link>
            <Link to="/contact" className={A}>Contact</Link>
            <a href="/privacy" className={A}>Privacy Policy</a>
            <a href="/terms" className={A}>Terms of Service</a>
            <a href="/cancellation" className={A}>Cancellation &amp; Refund</a>
            <a href="/community-guidelines" className={A}>Community Guidelines</a>
          </nav>

          <nav className="flex flex-col gap-3" aria-label="Connect links">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-dark mb-1">Connect</p>
            <a href="https://www.instagram.com/pettxo_app" target="_blank" rel="noopener noreferrer" className={A}>Instagram → @pettxo_app</a>
            <a href="https://x.com/pettxo_app" target="_blank" rel="noopener noreferrer" className={A}>X → @pettxo_app</a>
            <a href="mailto:hello@pettxo.com" className={A}>Email → hello@pettxo.com</a>
          </nav>
        </div>

        <p className="text-[12px] font-light text-muted opacity-70 pt-8 mt-8 border-t border-[#E5E7EB]">
          © 2026 Pettxo Private Limited &nbsp;·&nbsp; Startup India Recognised &nbsp;·&nbsp; DIPP254544
        </p>
      </div>
    </footer>
  )
}
