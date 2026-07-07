import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40",
  secondary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40",
  soft:
    "bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40",
  outline:
    "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 bg-white/80",
  ghost: "text-brand-700 hover:bg-brand-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base font-semibold",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  external = false,
  className = "",
  type = "button",
  onClick,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4 shrink-0" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
