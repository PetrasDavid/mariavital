import { Link } from "react-router-dom";
import { Phone, Mail, Heart } from "lucide-react";
import { siteConfig } from "../../config/config";
import { getSocialLinks, SocialIcon } from "../ui/SocialIcons";

export default function Footer() {
  const { brand, distributor, contact, legal } = siteConfig;
  const year = new Date().getFullYear();
  const socialLinks = getSocialLinks(siteConfig.social);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-600 text-white">
                <Heart className="h-5 w-5" fill="currentColor" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white">{brand.name}</span>
                <span className="block text-xs text-brand-400 font-medium">{brand.slogan}</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              {distributor.fullName} független Flavon distributor weboldala.
              {brand.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks
                .filter((link) => !link.placeholder)
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-brand-600 hover:text-white transition-colors"
                  >
                    <SocialIcon type={link.type} className="h-5 w-5" />
                  </a>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigáció</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kapcsolat</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 leading-relaxed mb-4">{legal.disclaimer}</p>
          <p className="text-xs text-gray-600">
            © {year} {brand.name} · {distributor.fullName}. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
