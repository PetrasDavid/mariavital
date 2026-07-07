import { Link } from "react-router-dom";

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const MessengerIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.259-5.963 3.259L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
  </svg>
);

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  messenger: MessengerIcon,
};

export function getSocialLinks(social) {
  return [
    { ...social.facebookProfile, type: "facebook" },
    { ...social.facebookGroup1, type: "facebook" },
    { ...social.facebookGroup2, type: "facebook" },
    { ...social.facebookRecipe1, type: "facebook" },
    { ...social.facebookRecipe2, type: "facebook" },
    { ...social.instagram, type: "instagram" },
    { ...social.tiktok, type: "tiktok" },
    { ...social.messenger, type: "messenger" },
  ];
}

export function SocialIcon({ type, className }) {
  const Icon = iconMap[type];
  return Icon ? <Icon className={className} /> : null;
}

export function SocialButton({ link, variant = "card" }) {
  const Icon = iconMap[link.type];

  if (variant === "icon") {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
          link.placeholder
            ? "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
            : "bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white"
        }`}
      >
        <Icon className="h-5 w-5" />
      </a>
    );
  }

  return (
    <a
      href={link.placeholder ? undefined : link.href}
      target={link.placeholder ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 ${
        link.placeholder
          ? "border-dashed border-gray-200 bg-gray-50 text-gray-400 cursor-default"
          : "border-gray-100 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50"
      }`}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 ${
          link.placeholder
            ? "bg-gray-100 text-gray-400"
            : "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 truncate">{link.label}</p>
        {link.placeholder && (
          <p className="text-xs text-gray-400 mt-0.5">Hamarosan elérhető</p>
        )}
      </div>
    </a>
  );
}

export function SocialLinkList({ social, variant = "icon" }) {
  const links = getSocialLinks(social);
  return (
    <div className={variant === "icon" ? "flex flex-wrap gap-3" : "grid sm:grid-cols-2 gap-4"}>
      {links.map((link) => (
        <SocialButton key={link.label} link={link} variant={variant} />
      ))}
    </div>
  );
}

export { FacebookIcon, InstagramIcon, TikTokIcon, MessengerIcon };
