const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 lg:px-16 pt-6">
      <div className="max-w-[1831px] mx-auto flex items-center justify-between">
        <div className="font-grotesk text-[16px] uppercase tracking-wider text-cream">
          Kaushika Semwal
        </div>
        <nav className="hidden lg:block">
          <div className="liquid-glass rounded-[28px] px-[52px] py-[24px] flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-grotesk text-[13px] uppercase tracking-wider text-cream hover:text-neon transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}