// // store.js
// // App store links — wired by the team. One smart redirect:
// // iOS → App Store, Android → Play Store, desktop → home (show both badges).
// export const APP_STORE_URL  = '#'
// export const PLAY_STORE_URL = '#'

// export function handleInstall(e) {
//   const ua = navigator.userAgent || ''
//   let target = null
//   if (/iPhone|iPad|iPod/i.test(ua)) target = APP_STORE_URL
//   else if (/Android/i.test(ua))     target = PLAY_STORE_URL

//   if (target && target !== '#') {
//     if (e) e.preventDefault()
//     window.location.href = target
//   }
//   // desktop / not wired yet → let the default anchor behaviour run
// }






// stores.js

import config from "../config.js";

export const APP_STORE_URL = config.APP_STORE_URL;
export const PLAY_STORE_URL = config.GOOGLE_PLAY_URL;

export function handleInstall(e) {
  if (e) {
    e.preventDefault();
  }

  const ua = navigator.userAgent || "";

  let target = null;

  // iPhone / iPad / iPod
  if (/iPhone|iPad|iPod/i.test(ua)) {
    target = APP_STORE_URL;
  }

  // Android
  else if (/Android/i.test(ua)) {
    target = PLAY_STORE_URL;
  }

  // Desktop / Laptop
 // Desktop / Laptop
else {
  if (e) {
    e.preventDefault();
  }

  const badges = document.getElementById("store-badges");

  if (badges) {
    badges.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return;
}

  // Do nothing if the real store URL has not been added yet.
  if (
    !target ||
    target === "#" ||
    target === "APP_STORE_URL" ||
    target === "GOOGLE_PLAY_URL"
  ) {
    return;
  }

  window.location.href = target;
}