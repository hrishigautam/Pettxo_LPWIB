// CTA.jsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleInstall } from "../lib/stores.js";
import { trackEvent } from "../lib/analytics.js";
import config from "../config.js";

// Dono store badges (App Store + Google Play) isi same style ko use karte hain.
// Badge chhota/bada dikhe to sirf yahan height badal do.
const BADGE_H = "h-[140px] sm:h-[180px]";

// SVG ke andar upar-neeche jo extra khali jagah hai use kaatne ke liye.
// Space abhi bhi zyada ho to number badhao (-my-8 -> -my-10), kam ho to ghatao (-my-8 -> -my-6).
const BADGE_TRIM = "-my-6 sm:-my-10";

const badgeLink = `
  ${BADGE_TRIM}
  inline-flex
  items-center
  justify-center
  rounded-[14px]
  transition-transform
  duration-200
  hover:-translate-y-0.5
  active:scale-[0.97]
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-orange
`;

export default function CTA() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const elements = sectionRef.current?.querySelectorAll(".reveal");

      if (!elements?.length) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="
        w-full
        overflow-hidden
        py-10
        sm:py-12
        lg:py-14
      "
    >
      <div
        className="
          max-w-[1280px]
          mx-auto
          px-5
          sm:px-8
          lg:px-16
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            text-center
            w-full
            max-w-[680px]
            mx-auto
          "
        >
          {/* HEADING */}
          <h2
            className="
              reveal
              font-serif
              font-black
              text-dark
              leading-[1.08]
              tracking-[-0.025em]
              mb-4
              w-full
            "
            style={{
              fontSize: "clamp(34px, 8vw, 72px)",
            }}
          >
            Your pet's world starts here.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              reveal
              font-light
              leading-[1.75]
              text-muted
              mb-7
              w-full
              max-w-[560px]
            "
            style={{
              fontSize: "clamp(14.5px, 2vw, 17px)",
            }}
          >
            Every pet parent, service provider, and pet lover
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            is already looking for what you are offering.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Pettxo brings you together.
          </p>

          {/* CTA AREA */}
          <div
            className="
              reveal
              flex
              flex-col
              items-center
              w-full
            "
          >
            {/* AVAILABLE ON */}
            <div
              className="
                flex
                items-center
                gap-3
                w-full
                max-w-[380px]
              "
            >
              <span className="h-px flex-1 bg-[rgba(247,89,39,0.25)]" />
              <span
                className="
                  text-[12px]
                  sm:text-[13px]
                  font-medium
                  text-muted
                "
              >
                Available on
              </span>
              <span className="h-px flex-1 bg-[rgba(247,89,39,0.25)]" />
            </div>

            {/* STORE BADGES (dono ke liye same UI) */}
            <div
              id="store-badges"
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
                sm:gap-4
                mt-4
              "
            >
              {/* App Store — abhi comment out hai, uncomment karte hi Google Play jaisa hi dikhega
              <a
                href={config.APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Pettxo from App Store"
                onClick={() => trackEvent("app_store_click")}
                className={badgeLink}
              >
                <img
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  className={`${BADGE_H} w-auto object-contain`}
                  draggable="false"
                />
              </a>
              */}

              <a
                href={config.GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Pettxo on Google Play"
                onClick={() => trackEvent("google_play_click")}
                className={badgeLink}
              >
                <img
                  src="/images/google-play-badge.svg"
                  alt="Get it on Google Play"
                  className={`${BADGE_H} w-auto object-contain`}
                  draggable="false"
                />
              </a>
            </div>

            {/* LIKHA HUA TEXT (badge ke neeche) */}
            <p
              className="
                mt-3
                max-w-[320px]
                text-[13px]
                sm:text-[14px]
                leading-[1.6]
                text-muted
              "
            >
              Download the app and find trusted pet care near you.
            </p>

            {/* TAGLINE */}
            <p
              className="
                text-[11px]
                sm:text-[13px]
                font-semibold
                tracking-[0.14em]
                sm:tracking-[0.16em]
                uppercase
                text-orange
                mt-5
              "
            >
              Care · Trust · Love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}