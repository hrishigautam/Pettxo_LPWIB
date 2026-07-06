// App store links — wired by the team. One smart redirect:
// iOS → App Store, Android → Play Store, desktop → home (show both badges).
export const APP_STORE_URL  = '#'
export const PLAY_STORE_URL = '#'

export function handleInstall(e) {
  const ua = navigator.userAgent || ''
  let target = null
  if (/iPhone|iPad|iPod/i.test(ua)) target = APP_STORE_URL
  else if (/Android/i.test(ua))     target = PLAY_STORE_URL

  if (target && target !== '#') {
    if (e) e.preventDefault()
    window.location.href = target
  }
  // desktop / not wired yet → let the default anchor behaviour run
}
