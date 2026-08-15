import { useScrollReveal } from '../hooks/useScrollReveal';
import MobileSocialIcons from './MobileSocialIcons';
import DesktopSocialIcons from './DesktopSocialIcons';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="home" className="relative min-h-screen flex items-center rounded-b-[32px] overflow-hidden" aria-label="Hero">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
        aria-hidden="true"
      />
      <div className="video-overlay" />
      <DesktopSocialIcons />
      <div ref={ref} className={`relative max-w-[1831px] mx-auto px-4 md:px-8 lg:px-16 w-full pb-20 md:pb-28 lg:pb-36 flex flex-col items-center z-10 reveal-up ${isVisible ? 'reveal-up-visible' : ''}`}>
        <div className="relative w-full max-w-[780px] lg:ml-32 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="font-condiment text-neon mix-blend-exclusion opacity-90 mb-4 text-balance text-shadow-glow reveal-child"
             style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            AI Engineer & Developer
          </p>
          <h1 className="font-grotesk uppercase leading-[1.05] text-balance text-shadow-glow reveal-child"
              style={{
                fontSize: 'clamp(56px, 10vw, 120px)',
                lineHeight: 'clamp(1.05, 0.02vw + 1, 1)',
              }}>
            Kaushika Semwal
          </h1>
          <p className="font-mono uppercase mt-6 text-cream/90 text-balance max-w-[600px] text-shadow-strong reveal-child"
             style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}>
            BTech Engineering AI (4th Year) • Building intelligent systems with Computer Vision & Generative AI
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 reveal-child">
            <a
              href="#projects"
              className="liquid-glass px-8 py-4 rounded-[1rem] font-grotesk uppercase text-[14px] tracking-wider hover:bg-white/10 transition-colors duration-300 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="liquid-glass px-8 py-4 rounded-[1rem] font-grotesk uppercase text-[14px] tracking-wider hover:bg-white/10 transition-colors duration-300 text-center border border-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
        <MobileSocialIcons />
      </div>
    </section>
  )
}