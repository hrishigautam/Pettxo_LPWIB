import { handleInstall } from '../lib/stores.js'

// Locked label variants. Default is the primary hero/CTA label.
export default function InstallButton({
  label = 'Install Pettxo — Free',
  className = '',
  innerRef,
  style,
}) {
  return (
    <a
      ref={innerRef}
      href="#"
      onClick={handleInstall}
      aria-label={label}
      style={style}
      className={
        'inline-flex items-center justify-center h-[54px] px-10 bg-orange text-white ' +
        'font-sans font-medium text-base rounded-[10px] transition-all duration-200 ' +
        'hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(247,89,39,0.38)] ' +
        className
      }
    >
      {label}
    </a>
  )
}
