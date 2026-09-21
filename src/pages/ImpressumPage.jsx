import { Link } from "react-router-dom";
import { siteConfig } from "../config/config";
import PageHero from "../components/ui/PageHero";

export default function ImpressumPage() {
  const { brand, contact, distributor, legal } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Jogi információ"
        title="Impresszum"
        subtitle="A weboldal üzemeltetőjének adatai."
        compact
      />

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="space-y-6 text-gray-700">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Weboldal
              </dt>
              <dd className="mt-1 text-lg font-bold text-gray-900">
                {brand.name} · {brand.domain}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Üzemeltető
              </dt>
              <dd className="mt-1 text-lg text-gray-900">
                {legal.operatorName}
                <span className="block text-base text-gray-600">
                  ({legal.operatorDisplayName} · {distributor.title})
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                E-mail
              </dt>
              <dd className="mt-1 space-y-1">
                <a className="block text-brand-700 underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
                {contact.emailSecondary && (
                  <a
                    className="block text-brand-700 underline"
                    href={`mailto:${contact.emailSecondary}`}
                  >
                    {contact.emailSecondary}
                  </a>
                )}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Telefon
              </dt>
              <dd className="mt-1">
                <a className="text-brand-700 underline" href={`tel:${contact.phoneHref}`}>
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Megjegyzés
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-gray-600">
                {legal.disclaimer}
              </dd>
            </div>
          </dl>

          <p className="mt-10 text-sm text-gray-600">
            <Link to="/adatvedelem" className="text-brand-700 font-medium underline">
              Adatvédelmi tájékoztató
            </Link>
            {" · "}
            <Link to="/kapcsolat" className="text-brand-700 font-medium underline">
              Kapcsolat
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
