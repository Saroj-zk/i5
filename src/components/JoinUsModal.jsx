import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Loader2 } from 'lucide-react';

const JoinUsModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setSubmittedEmail('');
      setLoading(false);
      setError('');
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateEmail = (val) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const formUrl = import.meta.env.VITE_FORM_URL || import.meta.env.FORM_URL;
    const entryEmail = import.meta.env.VITE_ENTRY_EMAIL || import.meta.env.ENTRY_EMAIL;

    if (!formUrl || !entryEmail) {
      setError('Waitlist submission is not properly configured.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append(entryEmail, email);

      // Submit to Google Form using no-cors mode (standard waitlist setup)
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setSubmittedEmail(email);
      setIsSuccess(true);
    } catch (err) {
      console.error('Waitlist submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {!isSuccess ? (
          <>
            <div className="modal-header">
              {/* <div className="modal-subtitle">Private Beta</div> */}
              <h2 className="modal-title">Join the i5 Network</h2>
              <p className="modal-desc">
                Gain institutional-grade market intelligence, cohort analytics, and smart-money flows before they happen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form" autoComplete="off">
              <div className="form-group">
                <label htmlFor="modal-email" className="form-label">
                  Email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  disabled={loading}
                  className="form-input"
                  required
                  autoFocus
                />
                {error && <span className="modal-error">{error}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={18} className="pulse" style={{ marginRight: '0.5rem' }} />
                    Joining waitlist...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success-content">
            <div className="modal-success-icon">
              <CheckCircle size={32} />
            </div>
            <h2 className="modal-title">You're on the waitlist!</h2>
            <p className="modal-desc" style={{ marginBottom: '2.5rem' }}>
              Your request has been received successfully. We’ll notify <strong style={{ color: 'var(--text-primary)' }}>{submittedEmail}</strong> once access becomes available.
            </p>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinUsModal;
