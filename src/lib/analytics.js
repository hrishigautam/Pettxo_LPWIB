import config from "../config.js";

let analyticsLoaded = false;

export function loadGoogleAnalytics() {
  if (analyticsLoaded) return;

  const measurementId = config.GA_MEASUREMENT_ID;

  // Placeholder ya empty ID ho to GA4 load mat karo
  if (
    !measurementId ||
    measurementId === "GA_MEASUREMENT_ID" ||
    !measurementId.startsWith("G-")
  ) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  analyticsLoaded = true;
}

export function trackEvent(eventName, eventParams = {}) {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, eventParams);
}