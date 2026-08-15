import { useScrollReveal } from '../hooks/useScrollReveal';

const experienceData = [
  {
    role: "AI Intern",
    company: "Valiance Solutions",
    duration: "May 2025 – Sep 2025",
    description: "Worked on Computer Vision models from scratch. Completed mini-projects and collaborated on full-scale models for client deployment.",
    highlights: [
      "Developed and tested CV models (CNNs, object detection)",
      "Built mini-projects and prototypes refined for production",
      "Collaborated with senior engineers on client deliverables",
    ],
  },
  {
    role: "MC Delivery Associate",
    company: "Accenture",
    duration: "May 2026 – Jul 2026",
    description: "Developed an Excel-to-PowerPoint automation solution for FMCG business reporting using Advanced Excel and VBA.",
    highlights: [
      "Automated reporting workflow reducing manual effort by 80%",
      "Built VBA macros for data transformation and visualization",
      "Delivered solution for FMCG business unit stakeholders",
    ],
  },
]

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Experience">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4"
        aria-hidden="true"
      />
      <div className="video-overlay" />
      <div ref={ref} className={`relative max-w-[1831px] mx-auto px-4 md:px-8 lg:px-16 w-full py-16 md:py-24 lg:py-32 z-10 reveal-up ${isVisible ? 'reveal-up-visible' : ''}`}>
        <div className="text-center mb-16 lg:mb-24 reveal-child">
          <h2 className="font-grotesk uppercase text-balance text-shadow-glow"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
            Experience
          </h2>
          <p className="font-condiment text-neon mix-blend-exclusion opacity-90 mt-4 text-balance text-shadow-glow"
             style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}>
            Professional Journey
          </p>
        </div>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <article
              key={index}
              className="liquid-glass rounded-[32px] p-6 md:p-8 lg:p-10 hover:bg-white/10 transition-colors duration-300 reveal-child"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <h3 className="font-grotesk uppercase text-balance text-xl md:text-2xl text-shadow-strong">{exp.role}</h3>
                  <p className="font-mono text-cream/80 mt-1 text-base md:text-lg">{exp.company}</p>
                </div>
                <div className="text-right lg:text-right flex-shrink-0">
                  <span className="font-grotesk uppercase text-neon text-sm md:text-base">{exp.duration}</span>
                </div>
              </div>
              <p className="font-mono text-cream/90 leading-relaxed mb-6 text-shadow-strong">{exp.description}</p>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 font-mono text-cream/80 text-sm md:text-base reveal-child">
                    <span className="text-neon font-mono mt-1">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}