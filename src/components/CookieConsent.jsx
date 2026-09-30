import { useEffect, useState } from "react";
import { loadGoogleAnalytics } from "../lib/analytics.js";
import { loadMetaPixel } from "../lib/metaPixel.js";

const CONSENT_KEY = "pettxo_cookie_consent";

// Pettxo theme colors
const ORANGE = "#F75927";
const NAVY = "#1F2937";
const MUTED = "#6b625d";
const CREAM = "#F7EEE6";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let consent = null;
    try {
      consent = localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      // storage blocked: show the banner
    }

    if (consent === "accepted") {
      loadGoogleAnalytics();
      loadMetaPixel();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  // page scroll stays locked until the person makes a choice
  useEffect(() => {
    if (!visible) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [visible]);

  const saveChoice = (value) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      // ignore storage errors
    }
  };

  const acceptCookies = () => {
    saveChoice("accepted");
    loadGoogleAnalytics();
    loadMetaPixel();
    setVisible(false);
  };

  const declineCookies = () => {
    saveChoice("declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="pettxo-cc" role="dialog" aria-label="Cookie consent">
      <style>{`
        .pettxo-cc {
          position: fixed;
          left: 16px;
          right: 16px;
          bottom: 16px;
          z-index: 9999;
          margin: 0 auto;
          max-width: 960px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 18px;
          background: #ffffff;
          border: 1px solid rgba(247, 89, 39, 0.22);
          border-left: 5px solid ${ORANGE};
          border-radius: 22px;
          box-shadow: 0 14px 40px rgba(247, 89, 39, 0.16);
          animation: pettxo-cc-in 380ms ease-out both;
        }
        .pettxo-cc, .pettxo-cc * { font-family: inherit; box-sizing: border-box; }
        .pettxo-cc__top { display: flex; align-items: flex-start; gap: 14px; }
        .pettxo-cc__icon {
          flex: none;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(247, 89, 39, 0.12);
          color: ${ORANGE};
        }
        .pettxo-cc__title {
          margin: 0 0 4px;
          color: ${NAVY};
          font-size: 17px;
          font-weight: 700;
          line-height: 1.25;
        }
        .pettxo-cc__text {
          margin: 0;
          color: ${MUTED};
          font-size: 13.5px;
          line-height: 1.55;
        }
        .pettxo-cc__actions { display: flex; gap: 10px; flex: none; }
        .pettxo-cc__btn {
          flex: 1;
          min-height: 44px;
          padding: 10px 24px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 150ms ease, opacity 150ms ease;
        }
        .pettxo-cc__btn:focus-visible {
          outline: 2px solid ${ORANGE};
          outline-offset: 2px;
        }
        .pettxo-cc__decline {
          background: transparent;
          color: ${NAVY};
          border: 1px solid rgba(31, 41, 55, 0.22);
        }
        .pettxo-cc__decline:hover { background: ${CREAM}; }
        .pettxo-cc__accept {
          background: ${ORANGE};
          color: #ffffff;
          border: 1px solid ${ORANGE};
          box-shadow: 0 6px 16px rgba(247, 89, 39, 0.3);
        }
        .pettxo-cc__accept:hover { opacity: 0.92; }

        @media (min-width: 720px) {
          .pettxo-cc {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 28px;
            padding: 18px 22px;
          }
          .pettxo-cc__btn { flex: none; }
        }
        @keyframes pettxo-cc-in {
          from { transform: translateY(18px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pettxo-cc { animation: none; }
        }
      `}</style>

      <div className="pettxo-cc__top">
        <span className="pettxo-cc__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <ellipse cx="5.5" cy="10" rx="2" ry="2.6" />
            <ellipse cx="9.5" cy="5.6" rx="2" ry="2.7" />
            <ellipse cx="14.5" cy="5.6" rx="2" ry="2.7" />
            <ellipse cx="18.5" cy="10" rx="2" ry="2.6" />
            <path d="M12 11c-3 0-5.5 2.6-5.5 5.2 0 1.9 1.4 2.8 3 2.8 1 0 1.6-.4 2.5-.4s1.5.4 2.5.4c1.6 0 3-.9 3-2.8C17.5 13.6 15 11 12 11z" />
          </svg>
        </span>

        <div>
          <p className="pettxo-cc__title">Pettxo runs on community, and a few cookies</p>
          <p className="pettxo-cc__text">
            They show us what pet parents and providers need most, so we can
            keep making Pettxo better. You're in control. Accept or decline.
          </p>
        </div>
      </div>

      <div className="pettxo-cc__actions">
        <button
          type="button"
          onClick={declineCookies}
          className="pettxo-cc__btn pettxo-cc__decline"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={acceptCookies}
          className="pettxo-cc__btn pettxo-cc__accept"
        >
          Accept
        </button>
      </div>
    </div>
  );
}