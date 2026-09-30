import { useEffect, useState } from "react";
import { loadGoogleAnalytics } from "../lib/analytics.js";
import { loadMetaPixel } from "../lib/metaPixel.js";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("pettxo_cookie_consent");

//     if (!consent) {
//       setVisible(true);
//     }
//   }, []);
useEffect(() => {
  const consent = localStorage.getItem("pettxo_cookie_consent");

 if (consent === "accepted") {
  loadGoogleAnalytics();
  loadMetaPixel();
}

  if (!consent) {
    setVisible(true);
  }
}, []);

const handleConsent = (value) => {
  localStorage.setItem("pettxo_cookie_consent", value);

 if (value === "accepted") {
  loadGoogleAnalytics();
  loadMetaPixel();
}

  setVisible(false);
};

  if (!visible) return null;

  return (
    <div
      className="
        fixed
        bottom-4
        left-4
        right-4
        z-[9999]
        mx-auto
        max-w-[900px]
        rounded-2xl
        border
        border-[#E5E7EB]
        bg-white
        p-4
        shadow-[0_12px_40px_rgba(0,0,0,0.12)]
        sm:flex
        sm:items-center
        sm:justify-between
        sm:gap-6
      "
      role="dialog"
      aria-label="Cookie consent"
    >
      <p className="text-[12px] sm:text-[13px] leading-[1.5] text-muted">
        We use cookies to improve your experience and measure website usage.
      </p>

      <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
        <button
          type="button"
          onClick={() => handleConsent("declined")}
          className="
            rounded-lg
            border
            border-[#E5E7EB]
            px-4
            py-2
            text-[12px]
            font-medium
            text-dark
            transition-colors
            hover:bg-[#F5EFE6]
          "
        >
          Decline
        </button>

        <button
          type="button"
          onClick={() => handleConsent("accepted")}
          className="
            rounded-lg
            bg-orange
            px-4
            py-2
            text-[12px]
            font-medium
            text-white
            transition-opacity
            hover:opacity-90
          "
        >
          Accept
        </button>
      </div>
    </div>
  );
}