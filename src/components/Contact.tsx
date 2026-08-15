import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Github, Linkedin, Phone } from './Icons'

const contactInfo = [
  { icon: Mail, label: "Email", value: "kaushika13semwal@gmail.com", href: "mailto:kaushika13semwal@gmail.com" },
  { icon: Phone, label: "Phone", value: "8591691721", href: "tel:8591691721" },
  { icon: Github, label: "GitHub", value: "github.com/kaushikasemwal", href: "https://github.com/kaushikasemwal", external: true },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kaushika-semwal", href: "https://www.linkedin.com/in/kaushika-semwal-255165316/", external: true },
]

const interests = ["Knitting", "Crochet", "Cooking", "Embroidery"]

const InterestTag = ({ children }: { children: React.ReactNode }) => (
  <span className="liquid-glass px-4 py-2 rounded-[1rem] font-mono text-sm uppercase text-cream/70">
    {children}
  </span>
)

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Contact">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
        aria-hidden="true"
      />
      <div className="video-overlay" />
      <div ref={ref} className={`relative max-w-[1831px] mx-auto px-4 md:px-8 lg:px-16 w-full py-16 md:py-24 lg:py-32 z-10 reveal-up ${isVisible ? 'reveal-up-visible' : ''}`}>
        <div className="text-center mb-16 lg:mb-24 reveal-child">
          <h2 className="font-grotesk uppercase text-balance text-shadow-glow"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
            Contact
          </h2>
          <p className="font-condiment text-neon mix-blend-exclusion opacity-90 mt-4 text-balance text-shadow-glow"
             style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}>
            Let's Connect
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="reveal-child">
            <h3 className="font-grotesk uppercase text-neon mb-8 text-lg md:text-xl text-shadow-strong">Get In Touch</h3>
            <div className="space-y-4 mb-12">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-[1rem] liquid-glass hover:bg-white/10 transition-colors duration-300 group reveal-child"
                >
                  <div className="w-12 h-12 rounded-[0.75rem] liquid-glass flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                    <contact.icon className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="font-grotesk uppercase text-xs text-cream/50">{contact.label}</p>
                    <p className="font-mono text-cream/90">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="font-grotesk uppercase text-neon mb-6 text-lg md:text-xl text-shadow-strong">Interests</h3>
            <div className="flex flex-wrap gap-3 reveal-child">
              {interests.map((interest, i) => (
                <InterestTag key={i}>{interest}</InterestTag>
              ))}
            </div>
          </div>

          <div className={`liquid-glass rounded-[32px] p-6 md:p-8 reveal-child`}>
            <h3 className="font-grotesk uppercase text-neon mb-6 text-lg md:text-xl text-shadow-strong">Send a Message</h3>
            <form className="space-y-4" action="https://formspree.io/f/xayrqwqb" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="reveal-child">
                  <label htmlFor="name" className="font-grotesk uppercase text-xs text-cream/50 block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-background/80 border border-white/10 px-4 py-3 rounded-[1rem] font-mono text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-neon/50 focus:border-neon/50 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="reveal-child">
                  <label htmlFor="email" className="font-grotesk uppercase text-xs text-cream/50 block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background/80 border border-white/10 px-4 py-3 rounded-[1rem] font-mono text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-neon/50 focus:border-neon/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="reveal-child">
                <label htmlFor="subject" className="font-grotesk uppercase text-xs text-cream/50 block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-background/80 border border-white/10 px-4 py-3 rounded-[1rem] font-mono text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-neon/50 focus:border-neon/50 transition-all"
                  placeholder="Project Inquiry / Collaboration / Hello"
                />
              </div>
              <div className="reveal-child">
                <label htmlFor="message" className="font-grotesk uppercase text-xs text-cream/50 block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-background/80 border border-white/10 px-4 py-3 rounded-[1rem] font-mono text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-neon/50 focus:border-neon/50 transition-all resize-none"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>
              <button
                type="submit"
                className="w-full liquid-glass px-6 py-4 rounded-[1rem] font-grotesk uppercase text-[14px] tracking-wider hover:bg-white/10 transition-colors duration-300 bg-neon/10 border border-neon/30 text-neon hover:bg-neon/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}