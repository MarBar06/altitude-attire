import { useState } from 'react';

interface PreOrderFormProps {
  variant?: 'hero' | 'cta';
}

const patchOptions = [
  { id: 'CALM & FOCUS', label: 'CALM & FOCUS' },
  { id: 'ANTI-FATIGUE LEGS', label: 'ANTI-FATIGUE LEGS' },
  { id: 'BLOATING & DIGEST COMFORT', label: 'BLOATING & DIGEST COMFORT' },
  { id: 'SKIN BARRIER', label: 'SKIN BARRIER' },
  { id: 'JET LAG RESTORED', label: 'JET LAG RESTORED' },
];

export const PreOrderForm = ({ variant = 'hero' }: PreOrderFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    role: '',
    city: '',
    country: '',
    patches: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email) {
      setError('Email is required');
      return;
    }
    
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    // Store in localStorage (mock capture)
    const existingData = JSON.parse(localStorage.getItem('altessia_preorders') || '[]');
    existingData.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('altessia_preorders', JSON.stringify(existingData));
    
    setSubmitted(true);
  };

  const handlePatchToggle = (patchId: string) => {
    setFormData((prev) => ({
      ...prev,
      patches: prev.patches.includes(patchId)
        ? prev.patches.filter((p) => p !== patchId)
        : [...prev.patches, patchId],
    }));
  };

  if (submitted) {
    return (
      <div className={`${variant === 'cta' ? 'text-center' : ''} p-8 bg-card rounded-2xl border border-border/30`}>
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-3">Welcome to ALTESSIA</h3>
        <p className="text-muted-foreground">
          You're on the list. We'll be in touch with exclusive early access.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${variant === 'cta' ? 'max-w-xl mx-auto' : ''}`}>
      <div className="space-y-4">
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email address *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="form-input"
            required
          />
        </div>

        {/* Role */}
        <div>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="form-select"
          >
            <option value="">Select your role</option>
            <option value="cabin-crew">Cabin crew</option>
            <option value="frequent-flyer">Frequent flyer</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* City & Country */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="form-input"
          />
        </div>

        {/* Patch Interest */}
        <div>
          <p className="form-label mb-3">Which patches interest you?</p>
          <div className="grid grid-cols-2 gap-3">
            {patchOptions.map((patch) => (
              <label
                key={patch.id}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                  formData.patches.includes(patch.id)
                    ? 'border-primary bg-primary/5'
                    : 'border-border/40 bg-card/40 hover:border-border'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.patches.includes(patch.id)}
                  onChange={() => handlePatchToggle(patch.id)}
                  className="form-checkbox"
                />
                <span className="text-sm">{patch.label}</span>
              </label>
            ))}
          </div>
        </div>

        {error && (
          <p className="text-destructive text-sm">{error}</p>
        )}

        <button type="submit" className="btn-primary w-full">
          Join the Pre-Order List
        </button>

        <p className="micro-trust text-center">
          No spam. Limited access. Priority delivery.
        </p>
      </div>
    </form>
  );
};
