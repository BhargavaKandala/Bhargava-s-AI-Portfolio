import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Immersive Product Experience / 3D Web',
    budget: '$5k - $15k',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    
    // Simulate contact form submission
    setTimeout(() => {
      const isSuccess = Math.random() > 0.05; // 95% success rate
      if (isSuccess) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          projectType: 'Immersive Product Experience / 3D Web',
          budget: '$5k - $15k',
          message: ''
        });
      } else {
        setStatus('error');
      }
    }, 1800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-panel"
      style={{
        padding: 'clamp(24px, 5vw, 44px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
        backgroundColor: 'rgba(16, 16, 16, 0.6)',
        border: '1px solid var(--border-primary)',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        position: 'relative'
      }}
      aria-label="Send a message to Younus"
    >
      <div style={{ textAlign: 'left', borderBottom: '1px solid var(--border-primary)', paddingBottom: '16px' }}>
        <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', margin: '0 0 4px', color: 'var(--text-primary)' }}>
          Start a Project Conversation
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
          Tell me about your vision, technical scope, or timeline.
        </p>
      </div>

      {/* Success Banner */}
      {status === 'success' && (
        <div
          role="alert"
          style={{
            padding: '16px',
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid var(--success)',
            color: 'var(--success)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.95rem',
            textAlign: 'center',
            fontWeight: 500
          }}
        >
          Thank you! Your message was transmitted successfully. Younus will respond within 24 hours.
        </div>
      )}

      {/* Error Banner */}
      {status === 'error' && (
        <div
          role="alert"
          style={{
            padding: '16px',
            backgroundColor: 'rgba(248, 113, 113, 0.1)',
            border: '1px solid var(--error)',
            color: 'var(--error)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.95rem',
            textAlign: 'center',
            fontWeight: 500
          }}
        >
          Something went wrong. Please try again or email directly at mohammedyounus15contact@gmail.com
        </div>
      )}

      {/* Name Input */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
        <label htmlFor="form-name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Your Name
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          placeholder="e.g. Alex Morgan"
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'error-name' : undefined}
          style={{
            padding: '14px 16px',
            backgroundColor: 'var(--background-secondary)',
            border: errors.name ? '1px solid var(--error)' : '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            transition: 'border-color var(--transition-fast)'
          }}
          className="form-input"
        />
        {errors.name && (
          <span id="error-name" style={{ fontSize: '0.8rem', color: 'var(--error)' }}>
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Input */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
        <label htmlFor="form-email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Work Email
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          placeholder="alex@company.com"
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'error-email' : undefined}
          style={{
            padding: '14px 16px',
            backgroundColor: 'var(--background-secondary)',
            border: errors.email ? '1px solid var(--error)' : '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            transition: 'border-color var(--transition-fast)'
          }}
          className="form-input"
        />
        {errors.email && (
          <span id="error-email" style={{ fontSize: '0.8rem', color: 'var(--error)' }}>
            {errors.email}
          </span>
        )}
      </div>

      {/* Project Type Select */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
        <label htmlFor="form-project-type" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Service Scope
        </label>
        <select
          id="form-project-type"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          disabled={status === 'loading'}
          style={{
            padding: '14px 16px',
            backgroundColor: 'var(--background-secondary)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            transition: 'border-color var(--transition-fast)'
          }}
          className="form-input"
        >
          <option value="Immersive Product Experience / 3D Web">Immersive Product Experience / 3D Web</option>
          <option value="Scalable Full Stack Application">Scalable Full Stack Application</option>
          <option value="High-Performance Frontend Engineering">High-Performance Frontend Engineering</option>
          <option value="Motion Design & Scrollytelling">Motion Design & Scrollytelling</option>
          <option value="Design System & Premium UI Engineering">Design System & Premium UI Engineering</option>
        </select>
      </div>

      {/* Message Input */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
        <label htmlFor="form-message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Project Brief / Message
        </label>
        <textarea
          id="form-message"
          name="message"
          rows="5"
          placeholder="Tell me about your goals, features, and target launch timeline..."
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'error-message' : undefined}
          style={{
            padding: '14px 16px',
            backgroundColor: 'var(--background-secondary)',
            border: errors.message ? '1px solid var(--error)' : '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            lineHeight: 1.5,
            resize: 'vertical',
            transition: 'border-color var(--transition-fast)'
          }}
          className="form-input"
        />
        {errors.message && (
          <span id="error-message" style={{ fontSize: '0.8rem', color: 'var(--error)' }}>
            {errors.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          padding: '16px',
          background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
          color: '#050505',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'bold',
          fontSize: '1rem',
          letterSpacing: '0.5px',
          marginTop: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          opacity: status === 'loading' ? 0.7 : 1,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          boxShadow: '0 4px 20px rgba(0, 217, 255, 0.25)',
          transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
        }}
        className="form-submit-btn"
      >
        {status === 'loading' ? (
          <>
            <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" stroke="rgba(5,5,5,0.2)"></circle>
              <path d="M4 12a8 8 0 0 1 8-8" stroke="currentColor"></path>
            </svg>
            Transmitting Message...
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>

      <style>{`
        .form-input:focus {
          border-color: var(--accent-primary) !important;
        }
        .form-submit-btn:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 217, 255, 0.45) !important;
        }
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
