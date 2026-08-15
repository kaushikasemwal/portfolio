import { Mail, Linkedin, Github } from './Icons'

const socialIcons = [
  { icon: Mail, label: 'Mail' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'Github' },
]

export default function MobileSocialIcons() {
  return (
    <div className="lg:hidden flex justify-center gap-4 mt-8 mb-4">
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