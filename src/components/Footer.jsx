// Footer.jsx
import { Link } from "react-router-dom";
import "../CSS/Footer.css";
const A =
"text-[11.5px] sm:text-[12px] md:text-[13px] font-normal text-muted hover:text-dark transition-colors";

export default function Footer() {
return (
  <footer className="pettxo-footer">
  <div
    className="
      max-w-[1280px]
      mx-auto
      px-5
      sm:px-6
      md:px-10
      lg:px-16
    "
  >

    {/* Brand row */}

    <Link
      to="/"
      className="flex items-center gap-1"
      aria-label="Pettxo home"
      onClick={() => setOpen(false)}
    >
      <span className="font-sans font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-orange tracking-[-0.02em]">
        Pettxo
      </span>
    </Link>

    {/* <Link
      to="/"
      className="flex items-center gap-2.5"
      aria-label="Pettxo home"
    >
      <span className="w-7 h-7 bg-orange rounded-[7px] grid place-items-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
          <ellipse cx="11" cy="15" rx="4.2" ry="3.2" fill="#fff" />
          <ellipse cx="5.4" cy="11.8" rx="1.8" ry="2.4" fill="#fff" />
          <ellipse cx="16.6" cy="11.8" rx="1.8" ry="2.4" fill="#fff" />
          <ellipse cx="7.6" cy="8" rx="1.5" ry="2.0" fill="#fff" />
          <ellipse cx="14.4" cy="8" rx="1.5" ry="2.0" fill="#fff" />
        </svg>
      </span>
      <span className="font-sans font-semibold text-[18px] text-dark tracking-[-0.02em]">
        Pettxo
      </span>
    </Link> */}

    <p className="text-[11.5px] sm:text-[12px] md:text-[13px] font-normal text-muted mt-2">
      Where Pets &amp; People Connect
    </p>

    <p className="text-[11px] sm:text-[12px] md:text-[13px] font-light text-muted mt-1">
      The social platform for the pet ecosystem.
    </p>

    {/* Columns */}
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-4

        gap-x-5
        gap-y-8

        sm:gap-x-8
        sm:gap-y-9

        md:gap-10
        lg:gap-12

        items-start

        border-t
        border-[#E5E7EB]

        pt-7
        sm:pt-8
        md:pt-10

        mt-7
        sm:mt-8
        md:mt-10
      "
    >
      {/* Platform */}
      <nav
        className="flex flex-col gap-1.5 sm:gap-2.5 md:gap-3 min-w-0"
        aria-label="Platform links"
      >
        <p className="text-[9.5px] sm:text-[10.5px] md:text-[11px] font-semibold tracking-[0.14em] uppercase text-dark mb-0 sm:mb-1">
          Platform
        </p>

        <Link to="/#how" className={A}>
          How It Works
        </Link>

        <Link to="/#features" className={A}>
          Features
        </Link>

        <Link to="/#audience" className={A}>
          Community
        </Link>
      </nav>

      {/* For You */}
      <nav
        className="flex flex-col gap-1.5 sm:gap-2.5 md:gap-3 min-w-0"
        aria-label="For you links"
      >
        <p className="text-[9.5px] sm:text-[10.5px] md:text-[11px] font-semibold tracking-[0.14em] uppercase text-dark mb-0 sm:mb-1">
          For You
        </p>

        <Link to="/#audience" className={A}>
          For Pet Parents
        </Link>

        <Link to="/for-providers" className={A}>
          For Service Providers
        </Link>

        <Link to="/#audience" className={A}>
          For Pet Lovers
        </Link>
      </nav>

      {/* Company */}
      <nav
        className="flex flex-col gap-1.5 sm:gap-2.5 md:gap-3 min-w-0"
        
        aria-label="Company links"
      >
        <p className="text-[9.5px] sm:text-[10.5px] md:text-[11px] font-semibold tracking-[0.14em] uppercase text-dark mb-0 sm:mb-1">
          
          Company
        </p>

        <Link to="/about" className={A}>
          About
        </Link>

        <Link to="/contact" className={A}>
          Contact
        </Link>

        <Link to="/privacy" className={A}>
          Privacy Policy
        </Link>

        <Link to="/terms" className={A}>
          Terms of Service
        </Link>

        <Link to="/cancellation" className={A}>
          Cancellation & Refund
        </Link>

        <a href="/community-guidelines" className={A}>
          Community Guidelines
        </a>
      </nav>

      {/* Connect */}
      <nav
        className="flex flex-col gap-1.5 sm:gap-1 md:gap-3 min-w-0"
        
        aria-label="Connect links"
      >
        <p className="text-[9.5px] sm:text-[10.5px] md:text-[11px] font-semibold tracking-[0.14em] uppercase text-dark mb-0 sm:mb-1">
          Connect
        </p>

        <a
          href="https://www.instagram.com/pettxo_app"
          target="_blank"
          rel="noopener noreferrer"
          className={`${A} break-words`}
        >
          Instagram → @pettxo_app
        </a>

        <a
          href="https://x.com/pettxo_app"
          target="_blank"
          rel="noopener noreferrer"
          className={`${A} break-words`}
        >
          X → @pettxo_app
        </a>

        <a href="mailto:support@pettxo.com" className={`${A} break-words`}>
          Email → support@pettxo.com
        </a>
      </nav>
    </div>

    {/* Copyright */}
    <p
      className="
        text-[10px]
        min-[375px]:text-[10.5px]
        sm:text-[11px]
        md:text-[12px]

        font-light
        leading-[1.6]

        text-muted
        opacity-70

        pt-6
        sm:pt-7
        md:pt-8

        mt-6
        sm:mt-7
        md:mt-8

        mb-6

        border-t
        border-[#E5E7EB]
      "
    >
      © 2026 Pettxo Private Limited &nbsp;·&nbsp; Startup India Recognised
      &nbsp;·&nbsp; DIPP254544
    </p>
  </div>
</footer>
);
}