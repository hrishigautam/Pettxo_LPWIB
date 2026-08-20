import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../CSS/HeroResponsive.css";

// SEO keyword pills
// All capsules are allowed on mobile.
// JS controls their floating position inside the mobile dog/cat zone.
const CAPS = [
  { l: "Pet Grooming", a: "dot", m: true },
  { l: "Dog Walker", a: "text", m: true },
  { l: "Cat Sitter", a: "none", m: true },
  { l: "Pet Boarding", a: "dot", m: true },
  { l: "Trusted Vets", a: "text", m: true },
  { l: "Pet Training", a: "none", m: true },
  { l: "Pet Adoption", a: "dot", m: true },
  { l: "Pet Community", a: "text", m: true },
  { l: "Pet Sitting", a: "none", m: true },
  { l: "Dog Daycare", a: "dot", m: true },
  { l: "Verified Providers", a: "text", m: true },
  { l: "Book a Walker", a: "none", m: true },
  { l: "Find a Groomer", a: "dot", m: true },
  { l: "Are you a provider?", a: "text", m: true },
];

function Pill({ c, zone }) {
  return (
    <div
      data-zone={zone}
      className="hero-capsule absolute top-0 left-0 will-change-transform"
    >
      <span
        className="
          pill
          inline-flex
          items-center
          rounded-full
          whitespace-nowrap
          px-3
          py-[6px]
          text-[11px]
          font-semibold
          bg-white
          border
          border-[rgba(247,89,39,0.12)]
          shadow-[0_6px_18px_rgba(31,41,55,0.10)]
          text-orange
        "
      >
        {c.l}
      </span>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const btnRef = useRef(null);
  const photoRef = useRef(null);
  const photoImgRef = useRef(null);
  const textColRef = useRef(null);

  const [imgOk, setImgOk] = useState(true);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const root = sectionRef.current;

      const caps = gsap.utils.toArray(
        root.querySelectorAll(".hero-capsule")
      );

      const pills = caps.map((c) =>
        c.querySelector(".pill")
      );

      const textEls = [
        eyebrowRef.current,
        line1Ref.current,
        line2Ref.current,
        subRef.current,
        ctaRef.current,
      ];

      const rnd = (a, b) =>
        a + Math.random() * (b - a);

      // ------------------------------------------------------------
      // DRIFT ZONE
      // ------------------------------------------------------------

      const zoneFor = (el) => {
        const cont = el.parentElement;

        const w = cont.clientWidth;
        const h = cont.clientHeight;

        // ----------------------------------------------------------
        // MOBILE
        // Capsules can float slightly ABOVE the image.
        // They remain inside the mobile media/capsule zone only.
        // ----------------------------------------------------------

        // if (el.dataset.zone === "mobile") {
        //   return {
        //     x0: 4,
        //     x1: Math.max(4, w - 4),

        //     // Negative Y allows capsules to float
        //     // in the space above the dog/cat image.
        //     y0: -35,

        //     y1: Math.max(-35, h - 6),

        //     padL: 4,
        //     padR: 4,
        //     padY: 4,
        //   };
        // }

if (el.dataset.zone === "mobile") {
  return {
    x0: 65,
    x1: Math.max(65, w - 65),

    // Capsules dog image ke upar
    // navbar ke paas tak ja sakti hain
    y0: -120,

    y1: Math.max(-120, h - 6),

    padL: 4,
    padR: 4,
    padY: 4,
  };
}

        // ----------------------------------------------------------
        // DESKTOP
        // ----------------------------------------------------------

        let safeLeft = w * 0.5;

        const tc = textColRef.current;

        if (tc) {
          const tb = tc.getBoundingClientRect();
          const hb = root.getBoundingClientRect();

          safeLeft = Math.max(
            tb.right - hb.left + 32,
            w * 0.5
          );
        }

        return {
          x0: safeLeft,
          x1: w - 10,
          y0: Math.max(h * 0.2, 110),
          y1: Math.min(h * 0.82, h - 20),
          padL: 100,
          padR: 160,
          padY: 70,
        };
      };

      // ------------------------------------------------------------
      // MEASURE PILL SIZE
      // ------------------------------------------------------------

      caps.forEach((el) => {
        const pill = el.querySelector(".pill");

        if (!pill) return;

        const r = pill.getBoundingClientRect();

        el._w = r.width;
        el._h = r.height;
      });

      // ------------------------------------------------------------
      // GAP BETWEEN FLOATING PILLS
      // ------------------------------------------------------------

      const GAP_DESKTOP = 18;

      // Smaller mobile gap so more capsules can fit.
      const GAP_MOBILE = 8;

      const gapFor = (el) =>
        el.dataset.zone === "mobile"
          ? GAP_MOBILE
          : GAP_DESKTOP;

      // ------------------------------------------------------------
      // OVERLAP CHECK
      // ------------------------------------------------------------

      const overlaps = (
        x,
        y,
        w,
        h,
        other,
        gap
      ) => {
        const ox = other._s.x;
        const oy = other._s.y;
        const ow = other._w;
        const oh = other._h;

        return (
          x < ox + ow + gap &&
          x + w + gap > ox &&
          y < oy + oh + gap &&
          y + h + gap > oy
        );
      };

      // ------------------------------------------------------------
      // INITIAL POSITIONS
      // ------------------------------------------------------------

      const placedByZone = {
        desktop: [],
        mobile: [],
      };

      caps.forEach((el) => {
        const z = zoneFor(el);
        const zoneKey = el.dataset.zone;
        const gap = gapFor(el);

        const w = el._w;
        const h = el._h;

        let x = z.x0;
        let y = z.y0;

        let placed = false;

        // Try many random positions.
        for (let tries = 0; tries < 150; tries++) {
          const maxX = Math.max(
            z.x0,
            z.x1 - w
          );

          const maxY = Math.max(
            z.y0,
            z.y1 - h
          );

          x = rnd(z.x0, maxX);
          y = rnd(z.y0, maxY);

          const collision =
            placedByZone[zoneKey].some(
              (other) =>
                overlaps(
                  x,
                  y,
                  w,
                  h,
                  other,
                  gap
                )
            );

          if (!collision) {
            placed = true;
            break;
          }
        }

        // ----------------------------------------------------------
        // FALLBACK GRID
        // ----------------------------------------------------------

        if (!placed) {
          const existing =
            placedByZone[zoneKey];

          const maxX = Math.max(
            z.x0,
            z.x1 - w
          );

          const maxY = Math.max(
            z.y0,
            z.y1 - h
          );

          const stepX = Math.max(
            w + gap,
            16
          );

          const stepY = Math.max(
            h + gap,
            16
          );

          let found = false;

          outer: for (
            let gy = z.y0;
            gy <= maxY;
            gy += stepY
          ) {
            for (
              let gx = z.x0;
              gx <= maxX;
              gx += stepX
            ) {
              const collision =
                existing.some(
                  (other) =>
                    overlaps(
                      gx,
                      gy,
                      w,
                      h,
                      other,
                      gap
                    )
                );

              if (!collision) {
                x = gx;
                y = gy;
                found = true;
                break outer;
              }
            }
          }

          if (!found && existing.length > 0) {
            const last =
              existing[existing.length - 1];

            x = Math.min(
              Math.max(
                z.x0,
                last._s.x +
                  last._w +
                  gap
              ),
              maxX
            );

            y = Math.min(
              Math.max(
                z.y0,
                last._s.y
              ),
              maxY
            );
          }
        }

        // ----------------------------------------------------------
        // PILL MOTION STATE
        // ----------------------------------------------------------

        el._s = {
          x,
          y,
          vx: rnd(-0.12, 0.12),
          vy: rnd(-0.08, 0.08),
          bob: rnd(0, Math.PI * 2),
          bobAmp: rnd(2.5, 5),
        };

        if (
          Math.abs(el._s.vx) < 0.035
        ) {
          el._s.vx = 0.06;
        }

        if (
          Math.abs(el._s.vy) < 0.025
        ) {
          el._s.vy = 0.04;
        }

        el.style.transform =
          `translate(${x}px, ${y}px)`;

        placedByZone[zoneKey].push(el);
      });

      // ------------------------------------------------------------
      // REDUCED MOTION
      // ------------------------------------------------------------

      if (reduce) {
        gsap.set(textEls, {
          opacity: 1,
          y: 0,
        });

        pills.forEach((p) => {
          gsap.set(p, {
            opacity: 1,
            scale: 1,
          });
        });

        gsap.set(photoRef.current, {
          opacity: 1,
          scale: 1,
        });

        return;
      }

      // ------------------------------------------------------------
      // ENTRANCE
      // ------------------------------------------------------------

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        eyebrowRef.current,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        0.1
      )
        .fromTo(
          line1Ref.current,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          0.25
        )
        .fromTo(
          line2Ref.current,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          0.4
        )
        .fromTo(
          subRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          0.55
        )
        .fromTo(
          ctaRef.current,
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          0.7
        )
        .fromTo(
          photoRef.current,
          {
            opacity: 0,
            scale: 1.06,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
          },
          0.3
        );

      // ------------------------------------------------------------
      // PILL ENTRANCE
      // ------------------------------------------------------------

      pills.forEach((el, i) => {
        tl.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.92,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "back.out(1.2)",
          },
          0.9 + i * 0.06
        );
      });

      // ------------------------------------------------------------
      // PHOTO FLOAT
      // ------------------------------------------------------------

      if (photoImgRef.current) {
        gsap.to(
          photoImgRef.current,
          {
            y: "+=10",
            duration: 5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.5,
          }
        );
      }

      if (photoRef.current) {
        gsap.to(
          photoRef.current,
          {
            y: "+=10",
            duration: 5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.5,
          }
        );
      }

      // ------------------------------------------------------------
      // INSTALL BUTTON GLOW
      // ------------------------------------------------------------

      if (btnRef.current) {
        gsap.to(
          btnRef.current,
          {
            boxShadow:
              "0 14px 34px rgba(247,89,39,0.36), 0 0 0 8px rgba(247,89,39,0.10)",
            duration: 1.6,
            ease: "sine.inOut",
            repeat: 5,
            yoyo: true,
            delay: 2,
          }
        );
      }

      // ------------------------------------------------------------
      // DRIFT
      // ------------------------------------------------------------

      let drifting = false;

      tl.call(() => {
        drifting = true;
      });

      // ------------------------------------------------------------
      // COLLISION RESOLUTION
      // ------------------------------------------------------------

      const resolveCollisions = () => {
        for (
          let pass = 0;
          pass < 6;
          pass++
        ) {
          for (
            let i = 0;
            i < caps.length;
            i++
          ) {
            for (
              let j = i + 1;
              j < caps.length;
              j++
            ) {
              const a = caps[i];
              const b = caps[j];

              if (
                a.dataset.zone !==
                b.dataset.zone
              ) {
                continue;
              }

              const gap = gapFor(a);

              const as = a._s;
              const bs = b._s;

              const acx =
                as.x + a._w / 2;

              const acy =
                as.y + a._h / 2;

              const bcx =
                bs.x + b._w / 2;

              const bcy =
                bs.y + b._h / 2;

              const minDx =
                (a._w + b._w) / 2 +
                gap;

              const minDy =
                (a._h + b._h) / 2 +
                gap;

              let dx = bcx - acx;
              let dy = bcy - acy;

              if (
                Math.abs(dx) >= minDx ||
                Math.abs(dy) >= minDy
              ) {
                continue;
              }

              if (
                dx === 0 &&
                dy === 0
              ) {
                dx = 0.01;
              }

              const overlapX =
                minDx - Math.abs(dx);

              const overlapY =
                minDy - Math.abs(dy);

              if (
                overlapX < overlapY
              ) {
                const push =
                  overlapX / 2;

                if (dx < 0) {
                  as.x += push;
                  bs.x -= push;
                } else {
                  as.x -= push;
                  bs.x += push;
                }
              } else {
                const push =
                  overlapY / 2;

                if (dy < 0) {
                  as.y += push;
                  bs.y -= push;
                } else {
                  as.y -= push;
                  bs.y += push;
                }
              }
            }
          }
        }
      };

      // ------------------------------------------------------------
      // KEEP PILLS INSIDE ZONE
      // ------------------------------------------------------------

      const clampToZone = (el) => {
        const z = zoneFor(el);
        const s = el._s;

        const minX =
          z.x0 - z.padL;

        const maxX =
          z.x1 + z.padR;

        const minY =
          z.y0 - z.padY;

        const maxY =
          z.y1 + z.padY;

        if (s.x > maxX) {
          s.x = minX;
        }

        if (s.x < minX) {
          s.x = maxX;
        }

        if (s.y > maxY) {
          s.y = minY;
        }

        if (s.y < minY) {
          s.y = maxY;
        }
      };

      // ------------------------------------------------------------
      // TICK
      // ------------------------------------------------------------

      const tick = () => {
        if (!drifting) {
          return;
        }

        caps.forEach((el) => {
          const s = el._s;

          s.x += s.vx;
          s.y += s.vy;

          s.bob += 0.012;

          clampToZone(el);
        });

        resolveCollisions();

        // Re-clamp after collision resolution.
        caps.forEach((el) => {
          clampToZone(el);
        });

        caps.forEach((el) => {
          const s = el._s;

          el.style.transform =
            `translate(
              ${s.x}px,
              ${
                s.y +
                Math.sin(s.bob) *
                  s.bobAmp
              }px
            )`;
        });
      };

      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
      };
    },
    {
      scope: sectionRef,
    }
  );

  // ------------------------------------------------------------
  // ALL CAPSULES ON MOBILE
  // ------------------------------------------------------------

  const mobileCaps = CAPS;

  return (
    <section
      ref={sectionRef}
      className="
        hero-section
        relative
        bg-beige
        overflow-hidden
      "
    >
      {/* Soft decorative glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          w-[420px]
          h-[420px]
          rounded-full
          bg-orange/10
          blur-[110px]
        "
      />

      <div className="relative md:min-h-[600px]">

        {/* =======================================================
            DESKTOP FLOATING CAPSULES
        ======================================================= */}

        <div
          className="
            hidden
            md:block
            absolute
            inset-0
            z-10
            pointer-events-none
          "
          aria-hidden="true"
        >
          {CAPS.map((c) => (
            <Pill
              key={c.l}
              c={c}
              zone="desktop"
            />
          ))}
        </div>

        {/* =======================================================
            DESKTOP PHOTO
        ======================================================= */}

        {imgOk && (
          <div
            ref={photoRef}
            className="
              hidden
              md:block
              absolute
              top-8
              right-0
              z-20
              w-[79%]
              max-w-[950px]
              h-[96vh]
              max-h-[640px]
              min-h-[480px]
              overflow-hidden
            "
          >
            <img
              ref={photoImgRef}
              src="/images/hero-pets.png"
              alt="A dog and a cat together"
              onError={() =>
                setImgOk(false)
              }
              className="
                w-full
                h-full
                object-cover
                object-center
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-y-0
                left-0
                w-[30%]
              "
              style={{
                background:
                  "linear-gradient(to right, #F7EFE4 0%, rgba(247,239,228,0) 100%)",
              }}
            />
          </div>
        )}

        {/* =======================================================
            TEXT COLUMN
        ======================================================= */}

        <div
          className="
            relative
            z-30
            max-w-[1280px]
            mx-auto
            px-6
            md:px-16
            pt-16
            md:pt-28
            pb-10
            md:pb-8
          "
        >
          <div
            ref={textColRef}
            className="max-w-[600px]"
          >
            <span
              ref={eyebrowRef}
              className="
                hero-eyebrow
                inline-flex
                items-center
                gap-2
                text-[11px]
                font-semibold
                tracking-[0.18em]
                uppercase
                text-orange
                px-3.5
                py-[7px]
                mb-6
                opacity-0
              "
            >
              Care · Trust · Love
            </span>

            <h1
              className="
                font-serif
                font-black
                leading-[1.08]
                tracking-[-0.02em]
                text-dark
                mb-6
              "
              style={{
                fontSize:
                  "clamp(34px, 6vw, 68px)",
              }}
            >
              <span
                ref={line1Ref}
                className="block opacity-0"
              >
                Because pets aren't just animals.
              </span>

              <span
                ref={line2Ref}
                className="block opacity-0"
              >
                <span className="text-orange">
                  {" "}
                  They're family.
                </span>
              </span>
            </h1>

            <p
              ref={subRef}
              className="
                text-dark/75
                font-light
                leading-[1.75]
                mb-5
                opacity-0
                hero-description
              "
              style={{
                fontSize:
                  "clamp(13.5px, 1.6vw, 14px)",
              }}
            >
              Find trusted groomers, vets,
              walkers, and trainers near you.
              <br />
              Connect with your local pet
              community.
              <br />
              List your services. Build your name.
              <br />
              Every Pet. Every person. One App
            </p>

            <div
              ref={ctaRef}
              className="
                opacity-0
                hero-cta
              "
            >
              {/* HERO INSTALL BUTTON */}

              <a
                ref={btnRef}
                href="#cta"
                aria-label="Install Pettxo — Free"
                className="
                  btn-install
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  h-[54px]
                  px-9
                  w-full
                  md:w-auto
                  bg-orange
                  text-white
                  font-semibold
                  text-[16px]
                  rounded-[14px]
                  shadow-[0_14px_34px_rgba(247,89,39,0.36)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-[0_18px_44px_rgba(247,89,39,0.46)]
                "
              >
                {/* Install Pettxo — Free */}
                Pettxo - Coming  Soon
              </a>

              <p
                className="
                  mt-3
                  text-[12.5px]
                  font-light
                  text-muted
                  text-center
                  md:text-left
                "
              >
                Available on App Store &amp;
                Play Store
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================
            MOBILE
        ======================================================= */}

        <div
          className="
            md:hidden
            relative
            z-10
            mx-6
            mb-2
            min-h-[240px]
            hero-mobile-media
          "
        >
          {/* MOBILE FLOATING CAPSULES */}

          <div
            className="
              absolute
              inset-0
              z-10
              pointer-events-none
              hero-mobile-capsules
            "
            aria-hidden="true"
          >
            {mobileCaps.map((c) => (
              <Pill
                key={c.l}
                c={c}
                zone="mobile"
              />
            ))}
          </div>

          {/* MOBILE DOG + CAT IMAGE */}

          {imgOk && (
            <div
              className="
                relative
                z-20
                rounded-[22px]
                overflow-hidden
                aspect-[4/3]
                shadow-[0_16px_40px_rgba(31,41,55,0.14)]
                hero-mobile-photo
              "
            >
              <img
                src="/images/hero-pets.png"
                alt="A dog and a cat together"
                onError={() =>
                  setImgOk(false)
                }
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}