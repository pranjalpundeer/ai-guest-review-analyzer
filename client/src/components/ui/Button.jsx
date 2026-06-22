/**
 * Button Component
 *
 * The single reusable button used across the entire platform (Navbar CTAs,
 * Hero actions, forms, tables, modals, toasts...). Renders as a native
 * <button>, a React Router <Link> (when `to` is given), or an external <a>
 * (when `href` is given) while keeping identical visual styling.
 *
 * Props:
 * @param {React.ReactNode} children - Button label / content
 * @param {Function} [onClick] - Click handler
 * @param {'primary'|'secondary'|'outline'|'ghost'|'danger'} [variant='primary'] - Visual style
 * @param {'sm'|'md'|'lg'} [size='md'] - Button size
 * @param {boolean} [disabled=false] - Disables the button and dims it
 * @param {boolean} [loading=false] - Shows an inline spinner and blocks interaction
 * @param {string} [to] - If provided, renders as an internal React Router <Link>
 * @param {string} [href] - If provided, renders as an external <a> (opens in new tab)
 * @param {'button'|'submit'|'reset'} [type='button'] - Native button type
 * @param {React.ReactNode} [icon] - Optional icon/emoji rendered before the label
 * @param {boolean} [fullWidth=false] - Stretches the button to fill its container
 * @param {string} [className] - Additional classes merged onto the root element
 */

import { Link } from 'react-router-dom';
import Loader from './Loader';

const VARIANT_CLASSES = {
  primary:
    'bg-himalaya-blue text-white hover:bg-himalaya-sky shadow-sm disabled:hover:bg-himalaya-blue',
  secondary:
    'bg-white dark:bg-himalaya-stone border border-himalaya-blue/30 text-himalaya-blue dark:text-himalaya-mist hover:bg-himalaya-mist dark:hover:bg-himalaya-slate',
  outline:
    'border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm',
  ghost:
    'text-himalaya-blue dark:text-himalaya-mist hover:bg-himalaya-mist dark:hover:bg-himalaya-blue/20',
  danger:
    'bg-white dark:bg-himalaya-stone border border-red-200 dark:border-red-800 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20',
};

const SIZE_CLASSES = {
  sm: 'px-3.5 py-2 text-xs gap-1.5 rounded-lg',
  md: 'px-6 py-3 text-sm gap-2 rounded-xl',
  lg: 'px-8 py-3.5 text-base gap-2.5 rounded-xl',
};

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  to,
  href,
  type = 'button',
  icon,
  fullWidth = false,
  className = '',
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const classes = [
    'inline-flex items-center justify-center font-semibold select-none',
    'transition-all duration-200 active:scale-95',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary,
    SIZE_CLASSES[size] ?? SIZE_CLASSES.md,
    fullWidth ? 'w-full' : '',
    isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none active:scale-100' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading ? (
        <Loader size="sm" variant={variant === 'primary' || variant === 'outline' ? 'light' : 'default'} />
      ) : (
        icon
      )}
      {children}
    </>
  );

  if (to && !isDisabled) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !isDisabled) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={isDisabled} className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
