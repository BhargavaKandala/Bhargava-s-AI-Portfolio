import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    title: "Immersive Experiences",
    desc: "Blending storytelling, animation, 3D graphics, and motion design to craft memorable web applications inspired by Apple, Stripe, Linear, and Awwwards leaders."
  },
  {
    num: "02",
    title: "Full Stack Architecture",
    desc: "Engineering scalable backend APIs, database schemas, and cloud deployment pipelines using React, Next.js, Node.js, Express, Supabase, and PostgreSQL."
  },
  {
    num: "03",
    title: "Creative Engineering",
    desc: "Pushing spatial web boundaries through WebGL 3D viewports, Three.js shaders, Lenis smooth scrolling, and frame-accurate GSAP scrollytelling physics."
  },
  {
    num: "04",
    title: "Craftsmanship & Detail",
    desc: "Prioritizing zero cumulative layout shifts, sub-second global response times, strict WCAG accessibility compliance, and editorial dark mode aesthetics."
  }
];

export default function CreatorBuilder() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        }
      }
    );

    const cards = gridRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section
      id="creator-builder"
      ref={containerRef}
      style={{
        backgroundColor: 'var(--background-secondary)',
        borderBottom: '1px solid var(--border-primary)',
      }}
    >
      <div className="container">
        
        {/* Section Title */}
        <div
          ref={titleRef}
          style={{
            maxWidth: '800px',
            margin: '0 auto var(--space-xl)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            PHILOSOPHY & VISION
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.15,
              fontWeight: 500,
              margin: '0 0 20px'
            }}
          >
            I don't build ordinary websites.<br />
            <span className="text-gradient">I craft digital experiences beyond ordinary.</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 300
            }}
          >
            Every project is engineered with intentionality—combining visual design mastery, interactive motion physics, and robust backend engineering.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="glass-panel pillar-card"
              style={{
                padding: 'clamp(24px, 4vw, 36px) clamp(16px, 3vw, 24px)',
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
              }}
            >
              {/* Number indicator */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'rgba(0, 217, 255, 0.15)',
                  lineHeight: 1,
                }}
              >
                {pillar.num}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .pillar-card:hover {
          transform: translateY(-4px);
        }
        .pillar-card:hover h3 {
          color: var(--accent-primary) !important;
        }
      `}</style>
    </section>
  );
}
