import { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Loader2 } from 'lucide-react';

export const openWaitlistModal = () => {
  window.dispatchEvent(new Event('open-waitlist-modal'));
};

export function JoinWaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-waitlist-modal', handleOpen);
    return () => window.removeEventListener('open-waitlist-modal', handleOpen);
  }, []);

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

  const onClose = () => setIsOpen(false);

  const validateEmail = (val: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("entry.988755290", email);
      
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose}
      />
      
      <div className="relative bg-black border border-white/10 rounded-2xl w-full max-w-sm p-6 shadow-[0_0_40px_rgba(0,255,204,0.1)] animate-in fade-in zoom-in-95 duration-200 text-white font-mono">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
        >
          <X size={16} strokeWidth={2} />
        </button>

        {!isSuccess ? (
          <div className="flex flex-col">
            <div className="text-center mb-6 pt-2">
              <h2 className="text-xl font-display font-black text-white mb-2 tracking-wide uppercase">Join the i5 Network</h2>
              <p className="text-white/50 text-xs leading-relaxed px-2 font-body">
                Gain institutional-grade market intelligence, cohort analytics, and smart-money flows before they happen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-email" className="text-[10px] font-bold text-primary tracking-widest uppercase ml-1">
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
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-body"
                  required
                  autoFocus
                />
                {error && <span className="text-red-400 text-[10px] ml-1 font-body">{error}</span>}
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary hover:bg-transparent text-black hover:text-primary border border-primary font-bold text-sm py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 mt-2 uppercase tracking-wider group"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <Send size={14} className="-rotate-45 mb-0.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 border border-primary/20">
              <CheckCircle className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            <h2 className="text-xl font-display font-black text-white mb-2 tracking-wide uppercase">You're on the waitlist!</h2>
            <p className="text-white/50 text-xs leading-relaxed mb-6 px-2 font-body">
              Your request has been received. We'll notify <strong className="text-white font-bold">{submittedEmail}</strong> once access becomes available.
            </p>
            <button 
              onClick={onClose}
              className="w-full bg-primary hover:bg-transparent text-black hover:text-primary border border-primary font-bold text-sm py-2.5 rounded-lg transition-colors uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
