import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';

const technicalSkills = [
  "Python Programming",
  "Computer Vision",
  "HTML & Frontend",
  "PowerBI",
  "Business Reporting",
]

const softSkills = [
  "Teamwork",
  "Communication",
  "Organization",
]

const certifications = [
  "Blockchain Training Workshop",
]

const achievements = [
  {
    title: "SATVA Cultural Fest",
    role: "Sub-Head of Performing",
    timeline: [
      { role: "Executive", period: "2023 – 2024" },
      { role: "Senior Executive", period: "2024 – 2025" },
      { role: "Sub-Head of Performing", period: "2025" },
    ],
  },
  {
    title: "Microsoft Students Club",
    role: "Sub-Head of Operations",
    timeline: [
      { role: "Executive", period: "2023 – 2024" },
      { role: "Senior Executive", period: "2024 – 2025" },
      { role: "Sub-Head of Operations", period: "2026" },
    ],
  },
  {
    title: "Hackathon: Execute 4.0",
    role: "Top 20 Finalist",
    timeline: null,
  },
]

const SkillPill = ({ children, color = "cream" }: { children: React.ReactNode; color?: "cream" | "neon" }) => (
  <span className={`liquid-glass px-4 py-2 rounded-[1rem] font-mono text-sm uppercase ${color === "neon" ? "text-neon border border-neon/30" : "text-cream/70"}`}>
    {children}
  </span>
)

const AchievementItem = ({ achievement }: { achievement: typeof achievements[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasTimeline = !!achievement.timeline;

  return (
    <li className="reveal-child">
      <button
        className={`w-full flex items-start gap-4 p-4 rounded-[1rem] liquid-glass hover:bg-white/10 transition-colors text-left ${hasTimeline ? 'cursor-pointer' : ''}`}
        onClick={() => hasTimeline && setIsOpen(!isOpen)}
        aria-expanded={hasTimeline ? isOpen : undefined}
      >
        <span className="font-grotesk text-neon text-xl md:text-2xl flex-shrink-0 mt-1">▸</span>
        <div className="flex-1">
          <p className="font-grotesk uppercase text-cream/90">{achievement.title}</p>
          <p className="font-mono text-cream/70 text-sm mt-0.5">{achievement.role}</p>
          {hasTimeline && (
            <span className="inline-flex items-center gap-1 mt-2 font-mono text-xs text-neon/70">
              <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              Timeline
            </span>
          )}
        </div>
      </button>
      {hasTimeline && isOpen && (
        <div className="mt-3 ml-10 border-l-2 border-neon/30 pl-4 space-y-2 animate-slide-down">
          {achievement.timeline.map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-mono text-sm text-cream/80">
              <span className="w-2 h-2 rounded-full bg-neon flex-shrink-0" />
              <span className="text-neon font-medium">{item.role}</span>
              <span className="text-cream/50">{item.period}</span>
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Skills & Achievements">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4"
        aria-hidden="true"
      />
      <div className="video-overlay" />
      <div ref={ref} className={`relative max-w-[1831px] mx-auto px-4 md:px-8 lg:px-16 w-full py-16 md:py-24 lg:py-32 z-10 reveal-up ${isVisible ? 'reveal-up-visible' : ''}`}>
        <div className="text-center mb-16 lg:mb-24 reveal-child">
          <h2 className="font-grotesk uppercase text-balance text-shadow-glow"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
            Skills & Achievements
          </h2>
          <p className="font-condiment text-neon mix-blend-exclusion opacity-90 mt-4 text-balance text-shadow-glow"
             style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}>
            What I Bring
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="reveal-child">
            <h3 className="font-grotesk uppercase text-neon mb-6 text-lg md:text-xl text-shadow-strong">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {technicalSkills.map((skill, i) => (
                <SkillPill key={i}>{skill}</SkillPill>
              ))}
            </div>

            <h3 className="font-grotesk uppercase text-neon mb-6 text-lg md:text-xl text-shadow-strong">Soft Skills</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {softSkills.map((skill, i) => (
                <SkillPill key={i}>{skill}</SkillPill>
              ))}
            </div>

            <h3 className="font-grotesk uppercase text-neon mb-6 text-lg md:text-xl text-shadow-strong">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, i) => (
                <SkillPill key={i} color="neon">{cert}</SkillPill>
              ))}
            </div>
          </div>

          <div className={`liquid-glass rounded-[32px] p-6 md:p-8 h-fit reveal-child`}>
            <h3 className="font-grotesk uppercase text-neon mb-6 text-lg md:text-xl text-shadow-strong">Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <AchievementItem key={index} achievement={achievement} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}