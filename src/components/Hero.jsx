import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { handleInstall } from "../lib/stores.js";

// SEO keyword pills — real text in the DOM, no traction numbers, no location.
// a: accent ('dot' = orange dot + dark · 'text' = orange text · 'none' = dark)
// m: also shown on mobile (7 strongest)
const CAPS = [
  { l: "Pet Grooming", a: "dot", m: true },
  { l: "Dog Walker", a: "text", m: true },
  { l: "Cat Sitter", a: "none", m: false },
  { l: "Pet Boarding", a: "dot", m: true },
  { l: "Trusted Vets", a: "text", m: true },
  { l: "Pet Training", a: "none", m: false },
  { l: "Pet Adoption", a: "dot", m: false },
  { l: "Pet Community", a: "text", m: true },
  { l: "Pet Sitting", a: "none", m: false },
  { l: "Dog Daycare", a: "dot", m: false },
  { l: "Verified Providers", a: "text", m: true },
  { l: "Book a Walker", a: "none", m: false },
  { l: "Find a Groomer", a: "dot", m: false },
  { l: "Are you a provider?", a: "text", m: true },
];

function Pill({ c, zone }) {
  return (
    <div
      data-zone={zone}
      className="hero-capsule absolute top-0 left-0 will-change-transform"
    >
      <span
        className={
          "pill inline-flex items-center gap-2 rounded-full whitespace-nowrap " +
          "px-5 py-[11px] text-[14.5px] font-semibold bg-white " +
          "border border-[rgba(31,41,55,0.05)] backdrop-blur-[2px] " +
          "shadow-[0_12px_30px_rgba(31,41,55,0.12),0_2px_6px_rgba(31,41,55,0.06)] " +
          (c.a === "text" ? "text-orange" : "text-dark")
        }
      >
        {c.a === "dot" && (
          <span className="w-[7px] h-[7px] rounded-full bg-orange flex-shrink-0" />
        )}
        {c.l}
      </span>
    </div>
  );
}

function Cutout({ wrapClass, onError }) {
  return (
    <div className={"hero-cutout-wrap pointer-events-none " + wrapClass}>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 60%, rgba(247,89,39,0.10) 0%, transparent 60%)",
        }}
      />
      <img
        src="/images/hero-pets.png"
        alt="A dog and a cat together"
        onError={onError}
        className="hero-cutout relative block w-full h-auto"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 86%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, #000 86%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
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
  const textColRef = useRef(null);
  const [imgOk, setImgOk] = useState(true);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const root = sectionRef.current;
      const caps = gsap.utils.toArray(root.querySelectorAll(".hero-capsule"));
      const pills = caps.map((c) => c.querySelector(".pill"));
      const cutouts = gsap.utils.toArray(root.querySelectorAll(".hero-cutout"));
      const textEls = [
        eyebrowRef.current,
        line1Ref.current,
        line2Ref.current,
        subRef.current,
        ctaRef.current,
      ];
      const rnd = (a, b) => a + Math.random() * (b - a);

      // Drift zone + directional wrap pads for a capsule, from its layer container.
      // Desktop: capsules live in the right region; left excursion is kept tight so they
      // never reach the headline glyphs, while the right exit stays dramatic.
      const zoneFor = (el) => {
        const cont = el.parentElement;
        const w = cont.clientWidth,
          h = cont.clientHeight;
        if (el.dataset.zone === "mobile") {
          return {
            x0: 0,
            x1: w,
            y0: h * 0.06,
            y1: h * 0.94,
            padL: 200,
            padR: 200,
            padY: 200,
          };
        }
        // Desktop: hard wall just right of the text column — capsules can never reach the headline.
        let safeLeft = w * 0.5;
        const tc = textColRef.current;
        if (tc) {
          const tb = tc.getBoundingClientRect();
          const hb = root.getBoundingClientRect();
          safeLeft = Math.max(tb.right - hb.left + 32, w * 0.5);
        }
        return {
          x0: safeLeft,
          x1: w,
          y0: Math.max(h * 0.2, 110),
          y1: h * 0.82,
          padL: 16,
          padR: 260,
          padY: 90,
        };
      };

      // ── Measure real pill sizes first (needed for collision checks) ──
      caps.forEach((el) => {
        const r = el.querySelector(".pill").getBoundingClientRect();
        el._w = r.width;
        el._h = r.height;
      });

      // Minimum gap kept between the edges of any two pills while drifting.
      const GAP = 14;

      // Overlap test between a candidate (x,y) and an already-placed pill `other`.
      const overlaps = (x, y, w, h, other) => {
        const ox = other._s.x,
          oy = other._s.y,
          ow = other._w,
          oh = other._h;
        return (
          x < ox + ow + GAP &&
          x + w + GAP > ox &&
          y < oy + oh + GAP &&
          y + h + GAP > oy
        );
      };

      // Seed scattered positions with collision-aware retries, per zone,
      // so nothing starts stacked/overlapping.
      const placedByZone = { desktop: [], mobile: [] };
      caps.forEach((el) => {
        const z = zoneFor(el);
        const zoneKey = el.dataset.zone;
        const w = el._w,
          h = el._h;
        let x,
          y,
          tries = 0;
        const maxTries = 40;
        do {
          x = rnd(z.x0, z.x1 - w);
          y = rnd(z.y0, z.y1 - h);
          tries++;
        } while (
          tries < maxTries &&
          placedByZone[zoneKey].some((o) => overlaps(x, y, w, h, o))
        );

        el._s = {
          x,
          y,
          vx: rnd(-0.22, 0.22),
          vy: rnd(-0.14, 0.14),
          bob: rnd(0, Math.PI * 2),
          bobAmp: rnd(3, 7),
        };
        if (Math.abs(el._s.vx) < 0.06) el._s.vx = 0.1;
        el.style.transform = `translate(${el._s.x}px, ${el._s.y}px)`;
        placedByZone[zoneKey].push(el);
      });

      // Reduced motion → static, no drift, no glow
      if (reduce) {
        gsap.set(textEls, { opacity: 1, y: 0 });
        pills.forEach((p) => gsap.set(p, { opacity: 1, scale: 1 }));
        cutouts.forEach((c) => gsap.set(c, { opacity: 1, scale: 1 }));
        return;
      }

      // ── Entrance ──
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65 },
        0.15,
      )
        .fromTo(
          line1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.85 },
          0.3,
        )
        .fromTo(
          line2Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.85 },
          0.45,
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.6,
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65 },
          0.75,
        );

      cutouts.forEach((el) =>
        tl.fromTo(
          el,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1.0 },
          0.5,
        ),
      );
      pills.forEach((el, i) =>
        tl.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
          0.9 + i * 0.07,
        ),
      );

      // Gentle cutout idle float
      cutouts.forEach((el) =>
        gsap.to(el, {
          y: "+=10",
          duration: 5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1.5,
        }),
      );

      // Install button: 3 gentle glow pulses then rest
      if (btnRef.current) {
        gsap.to(btnRef.current, {
          boxShadow:
            "0 14px 34px rgba(247,89,39,0.36), 0 0 0 8px rgba(247,89,39,0.10)",
          duration: 1.6,
          ease: "sine.inOut",
          repeat: 5,
          yoyo: true,
          delay: 2,
        });
      }

      // ── Autonomous drift (starts after pills pop in) ──
      let drifting = false;
      tl.call(() => {
        drifting = true;
      });

      // Resolve overlaps between all pill pairs within the SAME zone by pushing
      // them apart along the line connecting their centers. Cheap O(n^2) — n is small.
      const resolveCollisions = () => {
        for (let i = 0; i < caps.length; i++) {
          for (let j = i + 1; j < caps.length; j++) {
            const a = caps[i],
              b = caps[j];
            if (a.dataset.zone !== b.dataset.zone) continue;

            const as = a._s,
              bs = b._s;
            const acx = as.x + a._w / 2,
              acy = as.y + a._h / 2;
            const bcx = bs.x + b._w / 2,
              bcy = bs.y + b._h / 2;
            const minDx = (a._w + b._w) / 2 + GAP;
            const minDy = (a._h + b._h) / 2 + GAP;

            let dx = bcx - acx;
            let dy = bcy - acy;
            if (Math.abs(dx) >= minDx || Math.abs(dy) >= minDy) continue; // not overlapping

            if (dx === 0 && dy === 0) dx = 0.01; // avoid div-by-zero, nudge apart

            const overlapX = minDx - Math.abs(dx);
            const overlapY = minDy - Math.abs(dy);
            // Push apart along the axis with the smaller overlap (cheaper separation)
            if (overlapX < overlapY) {
              const push = (overlapX / 2) * (dx < 0 ? -1 : 1);
              as.x -= push;
              bs.x += push;
            } else {
              const push = (overlapY / 2) * (dy < 0 ? -1 : 1);
              as.y -= push;
              bs.y += push;
            }
          }
        }
      };

      const tick = () => {
        if (!drifting) return;
        caps.forEach((el) => {
          const z = zoneFor(el);
          const s = el._s;
          s.x += s.vx;
          s.y += s.vy;
          s.bob += 0.012;
          if (s.x > z.x1 + z.padR) s.x = z.x0 - z.padL; // exit right → re-enter just-left
          if (s.x < z.x0 - z.padL) s.x = z.x1 + z.padR; // exit left  → re-enter far-right
          if (s.y > z.y1 + z.padY) s.y = z.y0 - z.padY;
          if (s.y < z.y0 - z.padY) s.y = z.y1 + z.padY;
        });

        resolveCollisions();

        caps.forEach((el) => {
          const s = el._s;
          el.style.transform = `translate(${s.x}px, ${s.y + Math.sin(s.bob) * s.bobAmp}px)`;
        });
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    },
    { scope: sectionRef },
  );

  const mobileCaps = CAPS.filter((c) => c.m);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="sec-hero relative overflow-hidden bg-beige md:min-h-[100dvh] pb-10 md:pb-14"
    >
      {/* ── DESKTOP capsule layer (behind cutout) ── */}
      <div
        className="hidden md:block absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
      >
        {CAPS.map((c) => (
          <Pill key={c.l} c={c} zone="desktop" />
        ))}
      </div>

      {/* ── DESKTOP cutout — large, right-anchored, fades into beige ── */}
      {imgOk && (
        <Cutout
          wrapClass="hidden md:block absolute right-0 bottom-6 -translate-y-[30px] z-20 w-[48%] max-w-[700px] min-w-[320px]"
          onError={() => setImgOk(false)}
        />
      )}

      {/* ── Text (always on top) ── */}
      <div className="relative z-30 max-w-[1280px] mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-8 md:pb-12">
        <div ref={textColRef} className="max-w-[640px]">
          <span
            ref={eyebrowRef}
            className="block text-[10.5px] font-semibold tracking-[0.20em] uppercase text-orange mb-4 opacity-0"
          >
            Care · Trust · Love
          </span>
          <h1
            className="font-serif font-black leading-[1.10] tracking-[-0.02em] text-dark mb-5"
            style={{ fontSize: "clamp(36px, 6.5vw, 70px)" }}
          >
            <span ref={line1Ref} className="block opacity-0">
              Because pets aren't just animals.
            </span>
            <span ref={line2Ref} className="block text-dark opacity-0">
              They're <span className="text-orange">family</span>.
            </span>
          </h1>
          <p
            ref={subRef}
            className="text-dark font-light leading-[1.75] mb-6 opacity-0"
            style={{ fontSize: "clamp(14.5px, 1.8vw, 16px)" }}
          >
            Find trusted groomers, vets, walkers, and trainers near you.
            <br />
            List your services. Build your name.
            <br />
            Connect with your local pet community.
            <br />
            Every pet. Every person.{" "}
            <span className="text-orange font-semibold">One app.</span>
          </p>
          <div ref={ctaRef} className="opacity-0">
            <a
              ref={btnRef}
              href="#"
              onClick={handleInstall}
              aria-label="Install Pettxo — Free"
              className="btn-install inline-flex items-center justify-center gap-2.5 h-[52px] px-8 w-full md:w-auto bg-orange text-white font-semibold text-[16px] rounded-[12px] shadow-[0_14px_34px_rgba(247,89,39,0.36)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(247,89,39,0.46)]"
            >
              Install Pettxo — Free
            </a>
            <p className="mt-3 text-[12.5px] font-light text-muted text-center md:text-left">
              Available on App Store &amp; Play Store
            </p>
          </div>
        </div>
      </div>

      {/* ── MOBILE media zone (in flow, below CTA): cutout + drifting capsules ── */}
      <div
        className="md:hidden relative z-10 min-h-[210px] mt-1"
        aria-hidden="true"
      >
        <div className="absolute inset-0 z-10 pointer-events-none">
          {mobileCaps.map((c) => (
            <Pill key={c.l} c={c} zone="mobile" />
          ))}
        </div>
        {imgOk && (
          <Cutout
            wrapClass="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[80%] max-w-[320px]"
            onError={() => setImgOk(false)}
          />
        )}
      </div>
    </section>
  );
}