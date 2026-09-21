import { Link } from "react-router-dom";
import { siteConfig } from "../config/config";
import { pageSeo } from "../config/seoData";
import PageHero from "../components/ui/PageHero";
import SeoHead from "../components/ui/SeoHead";

export default function TermsPage() {
  const { brand, contact, distributor, legal } = siteConfig;
  const seo = pageSeo.terms;

  return (
    <>
      <SeoHead {...seo} />
      <PageHero
        eyebrow="Jogi információ"
        title="Általános szerződési feltételek (ÁSZF)"
        subtitle="Tájékoztató a marcsivital weboldalon történő böngészésről, kosárról és rendelésigényről."
        compact
      />

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed space-y-8">
          <p className="text-sm text-gray-500">
            Utolsó frissítés: 2026. szeptember. Ez tájékoztató sablon — a tulajdonos
            átnézése után véglegesíthető. Nem helyettesíti a Flavon hivatalos
            webshopjának saját ÁSZF-jét.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Szolgáltató</h2>
            <p>
              Az oldal üzemeltetője: <strong>{legal.operatorName}</strong> (
              {distributor.fullName}), a <strong>{brand.name}</strong> (
              {brand.domain}) weboldal keretében. Elérhetőség:{" "}
              <a className="text-brand-700 underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              {contact.emailSecondary && (
                <>
                  {" · "}
                  <a
                    className="text-brand-700 underline"
                    href={`mailto:${contact.emailSecondary}`}
                  >
                    {contact.emailSecondary}
                  </a>
                </>
              )}
              {" · "}
              <a className="text-brand-700 underline" href={`tel:${contact.phoneHref}`}>
                {contact.phone}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Az oldal jellege</h2>
            <p>
              A {brand.name} független Flavon distributor személyes tájékoztató és
              érdeklődés-/rendelésigény-gyűjtő oldala.{" "}
              <strong>Nem</strong> a Flavon hivatalos vállalati webshopja. A termékek
              gyártása, készletezése, számlázása és szállítása a Flavon hivatalos
              rendszerén keresztül történik.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Árak</h2>
            <p>
              Az oldalon megjelenő árak tájékoztató jellegűek. A végleges ár a rendelés
              visszaigazolásakor, illetve a Flavon hivatalos webshopban érvényes.
              Gyártói kartonos (1#) vásárlásnál a feltüntetett kartonár irányadó.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Kosár és rendelésigény</h2>
            <p className="mb-3">
              A „kosárba” gombokkal termékeket / csomagokat gyűjthetsz. A pénztárnál
              megadott adatokkal <strong>rendelésigény</strong> keletkezik (jellemzően
              e-mailben), amely nem minősül automatikusan elfogadott szerződésnek.
            </p>
            <p>
              Az üzemeltető a rendelésigényt visszaigazolja, egyeztet, majd a Flavon /
              gyártói folyamat szerint történik a tényleges rendelés, fizetés és
              szállítás. Online bankkártyás fizetés ezen az oldalon jelenleg nem
              elérhető.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Flavon webshop / affiliate</h2>
            <p>
              A „gyártói karton” és egyes külső linkek a Flavon hivatalos webshopjára
              vezetnek (ajánlói / affiliate linkkel). Ott a Flavon saját ÁSZF-je,
              adatkezelése és fizetési feltételei érvényesek.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Felelősség</h2>
            <p>
              Az oldalon közölt információk tájékoztató jellegűek. Az étrend-kiegészítők
              nem helyettesítik a változatos étrendet vagy orvosi kezelést. Az üzemeltető
              nem vállal felelősséget a Flavon webshop működéséért, készletéért vagy
              szállítási késedelméért.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Adatvédelem</h2>
            <p>
              A személyes adatok kezeléséről az{" "}
              <Link to="/adatvedelem" className="text-brand-700 font-medium underline">
                Adatvédelmi tájékoztató
              </Link>{" "}
              rendelkezik.
            </p>
          </div>

          <p className="text-sm text-gray-600 pt-4">
            <Link to="/impresszum" className="text-brand-700 font-medium underline">
              Impresszum
            </Link>
            {" · "}
            <Link to="/adatvedelem" className="text-brand-700 font-medium underline">
              Adatvédelem
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
