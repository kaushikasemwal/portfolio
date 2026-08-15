import { useScrollReveal } from '../hooks/useScrollReveal';

const GraduationCap = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    <path d="M21 3.125A9.023 9.023 0 0015.88 2.5m-.98 2.005c.02.024.04.047.06.07" />
  </svg>
)

const educationData = [
  {
    degree: "B. Tech in Artificial Intelligence",
    institution: "MPSTME, NMIMS University, Mumbai",
    duration: "2023 – 2027",
    grade: "CGPA: 2.88",
    logo: null,
  },
  {
    degree: "HSC (12th Grade)",
    institution: "Pace Junior College of Science, Mumbai",
    duration: "2021 – 2023",
    grade: "66.3%",
    logo: null,
  },
  {
    degree: "CBSE (10th Grade)",
    institution: "Rajhans Vidalaya, Mumbai",
    duration: "2021",
    grade: "90.6%",
    logo: null,
  },
]

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Education">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
        aria-hidden="true"
      />
      <div className="video-overlay" />
      <div ref={ref} className={`relative max-w-[1831px] mx-auto px-4 md:px-8 lg:px-16 w-full py-16 md:py-24 lg:py-32 z-10 reveal-up ${isVisible ? 'reveal-up-visible' : ''}`}>
        <div className="text-center mb-16 lg:mb-24 reveal-child">
          <h2 className="font-grotesk uppercase text-balance text-shadow-glow"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
            Education
          </h2>
          <p className="font-condiment text-neon mix-blend-exclusion opacity-90 mt-4 text-balance text-shadow-glow"
             style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}>
            Academic Journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {educationData.map((edu, index) => (
            <article
              key={index}
              className="liquid-glass rounded-[32px] p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col reveal-child"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1rem] liquid-glass flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="font-grotesk uppercase text-balance text-lg md:text-xl text-shadow-strong">{edu.degree}</h3>
                  <p className="font-mono text-cream/70 text-sm md:text-base mt-1">{edu.institution}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-auto pt-4 border-t border-white/10">
                <span className="font-mono uppercase text-cream/60 text-sm md:text-base">{edu.duration}</span>
                <span className="font-grotesk uppercase text-neon text-sm md:text-base">{edu.grade}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}