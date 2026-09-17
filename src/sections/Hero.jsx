import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroScene from '../components/HeroScene';

export default function Hero({ isLoaded }) {
  const containerRef = useRef(null);
  const tagRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const availabilityRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) return;

    // GSAP entrance animation for text
    const tl = gsap.timeline();
    
    tl.fromTo(availabilityRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );

    tl.fromTo(nameRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo(tagRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo(titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );
  }, [isLoaded]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 'clamp(80px, 12vh, 120px)',
        paddingBottom: 'clamp(40px, 6vh, 80px)',
        overflow: 'hidden'
      }}
    >
      {/* 3D Scene */}
      <HeroScene />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="hero-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
          
          {/* Main Hero Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', maxWidth: '720px' }}>
            
            {/* Availability status indicator */}
            <div
              ref={availabilityRef}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'rgba(16, 16, 16, 0.6)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '28px',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)'
              }}
            >
              <span className="pulse-dot" style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
              Available for selected projects
            </div>

            {/* Name */}
            <h2
              ref={nameRef}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                margin: '0 0 6px'
              }}
            >
              SREE BHARGAVA
            </h2>

            {/* Professional Title Display */}
            <p
              ref={tagRef}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                margin: '0 0 24px'
              }}
            >
              Creative Web Developer
            </p>

            {/* Headline */}
            <h1
              ref={titleRef}
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-1px',
                margin: '0 0 24px',
                fontFamily: 'var(--font-heading)'
              }}
              className="text-gradient"
            >
              Building Digital Experiences Beyond Ordinary.
            </h1>

            {/* Subheading */}
            <p
              ref={subRef}
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '40px',
                fontWeight: 300
              }}
            >
              I design and engineer immersive web experiences using modern frontend technologies, scalable backend architecture, motion design, and creative storytelling.
            </p>

            {/* Action CTAs */}
            <div
              ref={ctaRef}
              className="hero-cta-wrap"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                width: '100%'
              }}
            >
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, 'work')}
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                  color: '#050505',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)',
                  transition: 'transform var(--transition-fast), boxShadow var(--transition-fast)',
                  textAlign: 'center'
                }}
                className="btn-primary-hover"
              >
                Explore My Work
              </a>
              
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                style={{
                  padding: '16px 32px',
                  background: 'rgba(16, 16, 16, 0.4)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  transition: 'border-color var(--transition-fast), background-color var(--transition-fast)',
                  textAlign: 'center'
                }}
                className="btn-secondary-hover"
              >
                Let's Build Together
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Styled states */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
        .pulse-dot {
          animation: pulse 2s infinite ease-in-out;
          box-shadow: 0 0 8px var(--accent-primary);
        }
        .btn-primary-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 217, 255, 0.5) !important;
        }
        .btn-secondary-hover:hover {
          border-color: var(--accent-secondary) !important;
          background-color: rgba(0, 217, 255, 0.1) !important;
        }
        @media (max-width: 576px) {
          .hero-cta-wrap a {
            width: 100% !important;
          }
        }
        @media (min-width: 992px) {
          .hero-content-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
