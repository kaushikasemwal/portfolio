import { Mail, Linkedin, Github } from './Icons'

const socialIcons = [
  { icon: Mail, label: 'Mail' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'Github' },
]

export default function DesktopSocialIcons() {
  return (
    <div className="hidden lg:block fixed top-0 right-0 z-30 mt-6 mr-8 flex flex-col gap-3">
      {socialIcons.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
          aria-label={label}
        >
          <Icon className="w-[20px] h-[20px] text-cream" />
        </button>
      ))}
    </div>
  )
}