// CTA.jsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleInstall } from "../lib/stores.js";
import { trackEvent } from "../lib/analytics.js";
import config from "../config.js";

export default function CTA() {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(
    () => {
      const elements = sectionRef.current?.querySelectorAll(".reveal");

      if (!elements?.length) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      const btn = btnRef.current;

      if (!btn) return;

      ScrollTrigger.create({
        trigger: btn,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            btn,
            { scale: 0.96, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.3)",
            },
          );

          gsap.set(btn, {
            boxShadow: "0 0 0 0 rgba(247,89,39,0.30)",
          });

          gsap.to(btn, {
            boxShadow: "0 0 0 18px rgba(247,89,39,0)",
            duration: 1.5,
            ease: "power2.out",
          });
        },
      });
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
        py-16
        sm:py-20
        lg:py-24
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
          {/* =========================
              HEADING
          ========================== */}
          <h2
            className="
              reveal
              font-serif
              font-black
              text-dark
              leading-[1.08]
              tracking-[-0.025em]
              mb-5
              w-full
            "
            style={{
              fontSize: "clamp(34px, 8vw, 72px)",
            }}
          >
            Your pet's world starts here.
          </h2>

          {/* =========================
              DESCRIPTION
          ========================== */}
          <p
            className="
              reveal
              font-light
              leading-[1.75]
              text-muted
              mb-8
              sm:mb-10
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

          {/* =========================
              CTA AREA
          ========================== */}
          <div
            className="
              reveal
              flex
              flex-col
              items-center
              w-full
            "
          >
            {/* =========================
                MAIN BUTTON
            ========================== */}
            <a
              ref={btnRef}
              href="#"
              aria-label="Download Pettxo"
              onClick={handleInstall}
              className="
                inline-flex
                items-center
                justify-center

                w-full
                max-w-[290px]

                sm:w-auto
                sm:max-w-none

                h-[54px]
                sm:h-14

                px-7
                sm:px-11

                bg-orange
                text-white

                font-sans
                font-medium

                text-[15px]
                sm:text-base

                rounded-[12px]

                shadow-[0_8px_24px_rgba(247,89,39,0.20)]

                transition-all
                duration-200

                active:scale-[0.98]
                hover:-translate-y-0.5
                hover:shadow-[0_12px_36px_rgba(247,89,39,0.38)]
              "
              style={{
                opacity: 0,
              }}
            >
              Download Pettxo
            </a>

            {/* =========================
                STORE BADGES
            ========================== */}
            <div
              className="
                flex
                items-center
                gap-3
                w-full
                max-w-[380px]
                mt-9
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

            <div
              id="store-badges"
              className="
                flex
                items-center
                justify-center
                gap-2
                sm:gap-4
                mt-1
              "
            >
              <a
                href={config.APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Pettxo from App Store"
                onClick={() => trackEvent("app_store_click")}
                className="
                  inline-block
                  rounded-[14px]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:drop-shadow-[0_10px_16px_rgba(247,89,39,0.28)]
                  active:scale-[0.97]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-orange
                "
              >
                <img
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-[150px] w-auto object-contain"
                  draggable="false"
                />
              </a>

              <a
                href={config.GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Pettxo on Google Play"
                onClick={() => trackEvent("google_play_click")}
                className="
                  inline-block
                  rounded-[14px]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:drop-shadow-[0_10px_16px_rgba(247,89,39,0.28)]
                  active:scale-[0.97]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-orange
                "
              >
                <img
                  src="/images/google-play-badge.svg"
                  alt="Get it on Google Play"
                  className="h-[150px] w-auto object-contain"
                  draggable="false"
                />
              </a>
            </div>

            {/* =========================
                TAGLINE
            ========================== */}
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