import { useScrollReveal } from '../hooks/useScrollReveal';

const projectsData = [
  {
    name: "Personalized Newspaper",
    year: "2026",
    description: "AI-powered personalized newspaper generator that curates and summarizes news based on user interests and reading preferences.",
    tech: ["React", "AI/ML", "News API"],
    github: "https://github.com/kaushikasemwal/newspaper",
    live: "#",
  },
  {
    name: "Espresso Yourself",
    year: "2025",
    description: "AI-Powered Cafe Finder - Advanced web app for discovering cafes with AI recommendations, sentiment analysis, and leaderboards.",
    tech: ["React", "AI/ML", "Sentiment Analysis"],
    github: "https://github.com/kaushikasemwal/Espresso-Yourself-",
    live: "https://kaushikasemwal.github.io/Espresso-Yourself-/",
  },
  {
    name: "SnapBook",
    year: "2025",
    description: "Android app blending vintage photography with digital scrapbooking featuring real-time filters and offline storage.",
    tech: ["Android", "Kotlin", "Camera API"],
    github: "https://github.com/kaushikasemwal/SnapBook",
    live: "https://kaushikasemwal.github.io/vintage-photobooth/",
  },
  {
    name: "Numeric Converter",
    year: "2025",
    description: "Python package for converting Roman numerals and written numbers to integers.",
    tech: ["Python", "Package Development", "NLP"],
    github: "https://github.com/kaushikasemwal/NLP-pypi",
    live: "https://pypi.org/project/numeric-converter",
  },
  {
    name: "Analyze Citizens Travel Mode",
    year: "2025",
    description: "ML comparison (logistic regression vs. random forest) to determine optimal travel modes.",
    tech: ["Python", "Scikit-learn", "ML"],
    github: "https://github.com/kaushikasemwal/-analyze-citizens-travel-mode",
    live: "#",
  },
  {
    name: "Iris Payment System",
    year: "2025",
    description: "Biometric-based Iris Payment System for secure, contactless transactions.",
    tech: ["Computer Vision", "Biometrics", "Security"],
    github: "https://github.com/kaushikasemwal/iris-payment-system",
    live: "#",
  },
]

const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="liquid-glass px-3 py-1 rounded-full text-xs font-mono uppercase text-cream/70">
    {children}
  </span>
)

const LinkButton = ({ href, children, external = false, variant = "primary" }: { 
  href: string; 
  children: React.ReactNode; 
  external?: boolean;
  variant?: "primary" | "secondary";
}) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className={`liquid-glass px-4 py-2 rounded-[1rem] font-grotesk uppercase text-[12px] tracking-wider transition-colors duration-300 text-center w-full ${
      variant === "primary"
        ? "hover:bg-white/10"
        : "border border-white/10 hover:bg-white/10"
    }`}
  >
    {children}
  </a>
)

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Projects">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4"
        aria-hidden="true"
      />
      <div className="video-overlay" />
      <div ref={ref} className={`relative max-w-[1831px] mx-auto px-4 md:px-8 lg:px-16 w-full py-16 md:py-24 lg:py-32 z-10 reveal-up ${isVisible ? 'reveal-up-visible' : ''}`}>
        <div className="text-center mb-16 lg:mb-24 reveal-child">
          <h2 className="font-grotesk uppercase text-balance text-shadow-glow"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
            Projects
          </h2>
          <p className="font-condiment text-neon mix-blend-exclusion opacity-90 mt-4 text-balance text-shadow-glow"
             style={{ fontSize: 'clamp(24px, 3vw, 48px)' }}>
            Selected Work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <article
              key={index}
              className="liquid-glass rounded-[32px] p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full group reveal-child"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-[1rem] liquid-glass flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                  <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="font-grotesk uppercase text-neon text-sm md:text-base flex-shrink-0">{project.year}</span>
              </div>
              <h3 className="font-grotesk uppercase text-balance text-xl md:text-2xl mb-4 text-shadow-strong">{project.name}</h3>
              <p className="font-mono text-cream/80 leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </div>
              <div className="flex gap-2 reveal-child">
                <LinkButton href={project.github} external>
                  GitHub
                </LinkButton>
                {project.live !== "#" && (
                  <LinkButton href={project.live} external variant="secondary">
                    Live Demo
                  </LinkButton>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}