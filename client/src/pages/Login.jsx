/**
 * Login / Signup Page
 * Tabbed authentication card — switches between Login and Sign Up forms.
 * No real auth wired up yet; submissions surface a Toast instead of an alert.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../components/ui';
import { useToast } from '../context/ToastContext';

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
);

const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const INITIAL_FORM = { name: '', email: '', password: '', confirmPassword: '' };

const Login = () => {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [form, setForm] = useState(INITIAL_FORM);
  const [remember, setRemember] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const { showToast } = useToast();

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const switchMode = (next) => {
    setMode(next);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === 'signup' && form.password !== form.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match.' });
      return;
    }

    setSubmitting(true);
    // Simulated network delay — replace with a real auth call when the backend is ready.
    setTimeout(() => {
      setSubmitting(false);
      showToast(
        mode === 'login'
          ? 'Login functionality will be implemented with your auth backend.'
          : 'Account created! Connect your auth backend to enable real sign-up.',
        'info'
      );
    }, 700);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-himalaya-mist via-white to-himalaya-snow dark:from-himalaya-slate dark:via-himalaya-stone dark:to-himalaya-blue/20 px-4 py-12 transition-colors duration-200">

      <div className="w-full max-w-md animate-fade-up">

        {/* Card */}
        <div className="card shadow-card-hover">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-himalaya-blue to-himalaya-sky text-3xl mb-4 shadow-lg">
              🏔️
            </div>
            <h1 className="font-display text-2xl font-bold text-himalaya-blue dark:text-white">
              {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {mode === 'login'
                ? 'Sign in to your Himalayan Intelligence account'
                : 'Start analysing guest reviews in minutes'}
            </p>
          </div>

          {/* Login / Signup tabs */}
          <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-himalaya-snow dark:bg-himalaya-slate mb-6">
            {['login', 'signup'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => switchMode(m)}
                className={`py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  mode === m
                    ? 'bg-white dark:bg-himalaya-stone shadow-sm text-himalaya-blue dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-himalaya-blue dark:hover:text-gray-200'
                }`}
              >
                {m === 'login' ? 'Login' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {mode === 'signup' && (
              <Input
                label="Full Name"
                type="text"
                required
                icon={<UserIcon />}
                placeholder="Tenzin Sherpa"
                value={form.name}
                onChange={update('name')}
              />
            )}

            <Input
              label="Email Address"
              type="email"
              required
              icon={<MailIcon />}
              placeholder="you@hotel.com"
              value={form.email}
              onChange={update('email')}
            />

            <Input
              label="Password"
              type="password"
              required
              icon={<LockIcon />}
              placeholder="••••••••"
              value={form.password}
              onChange={update('password')}
            />

            {mode === 'signup' && (
              <Input
                label="Confirm Password"
                type="password"
                required
                icon={<LockIcon />}
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={update('confirmPassword')}
                error={errors.confirmPassword}
              />
            )}

            {mode === 'login' && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-himalaya-blue focus:ring-himalaya-blue/30"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-himalaya-sky hover:underline"
                  onClick={() => showToast('Password reset flow coming soon.', 'info')}
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button type="submit" variant="primary" size="lg" fullWidth loading={submitting}>
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-xs text-gray-400 uppercase tracking-wider">
              <span className="bg-white dark:bg-himalaya-stone px-3">or continue with</span>
            </div>
          </div>

          {/* Social placeholders */}
          <div className="grid grid-cols-2 gap-3">
            {['Google', 'GitHub'].map((provider) => (
              <Button
                key={provider}
                variant="secondary"
                className="!py-2.5 text-sm"
                onClick={() => showToast(`${provider} OAuth — to be implemented`, 'info')}
                icon={<span>{provider === 'Google' ? '🔵' : '⚫'}</span>}
              >
                {provider}
              </Button>
            ))}
          </div>

          {/* Switch mode link */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              className="text-himalaya-sky hover:underline font-medium"
              onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
            >
              {mode === 'login' ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>

        {/* Back home */}
        <p className="text-center text-xs text-gray-400 mt-6">
          <Link to="/" className="hover:text-himalaya-blue transition-colors">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
