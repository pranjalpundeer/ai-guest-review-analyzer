/**
 * Input Component
 *
 * A single reusable field used for every text input, email, password, and
 * textarea across the platform (Login/Signup, the AI review textarea,
 * search boxes, etc.) so all fields share one focus ring, error state, and
 * dark-mode treatment.
 *
 * Props:
 * @param {string} [label] - Field label rendered above the input
 * @param {string} [name] - Input name/id (auto-generated when omitted)
 * @param {'text'|'email'|'password'|'number'|'search'|'textarea'} [type='text'] - Field type;
 *        'textarea' renders a <textarea>, 'password' renders a show/hide toggle
 * @param {string|number} value - Controlled value
 * @param {Function} onChange - Change handler, receives the native change event
 * @param {string} [placeholder] - Placeholder text
 * @param {string} [error] - Error message; renders a red border + helper text
 * @param {string} [helperText] - Helper text shown when there is no error
 * @param {React.ReactNode} [icon] - Optional icon rendered inside the field, left-aligned
 * @param {boolean} [disabled=false]
 * @param {boolean} [required=false]
 * @param {number} [rows=4] - Number of rows when type='textarea'
 * @param {string} [className] - Additional classes merged onto the field element
 */

import { useId, useState } from 'react';

const Input = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  helperText,
  icon,
  disabled = false,
  required = false,
  rows = 4,
  className = '',
  ...rest
}) => {
  const autoId = useId();
  const id = name || autoId;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isTextarea = type === 'textarea';

  const fieldClasses = [
    'w-full rounded-xl border bg-himalaya-snow dark:bg-himalaya-slate',
    'text-himalaya-slate dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500',
    'text-sm focus:outline-none focus:ring-2 focus:ring-himalaya-blue/40 focus:border-himalaya-blue',
    'disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200',
    icon ? 'pl-10' : 'pl-4',
    isPassword ? 'pr-11' : 'pr-4',
    isTextarea ? 'py-3 resize-none leading-relaxed' : 'py-3',
    error
      ? 'border-red-300 dark:border-red-700 focus:ring-red-200 focus:border-red-400'
      : 'border-gray-200 dark:border-gray-600',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </span>
        )}

        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            rows={rows}
            className={fieldClasses}
            aria-invalid={!!error}
            {...rest}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={isPassword && showPassword ? 'text' : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={fieldClasses}
            aria-invalid={!!error}
            {...rest}
          />
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            tabIndex={-1}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-himalaya-blue transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {error ? (
        <p className="text-xs text-red-500 mt-1.5">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">{helperText}</p>
      ) : null}
    </div>
  );
};

export default Input;
