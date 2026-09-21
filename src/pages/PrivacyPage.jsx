import { Link } from "react-router-dom";
import { siteConfig } from "../config/config";
import PageHero from "../components/ui/PageHero";

export default function PrivacyPage() {
  const { brand, contact, distributor, legal } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Jogi információ"
        title="Adatvédelmi tájékoztató"
        subtitle="Hogyan kezeljük a weboldalon megadott személyes adatokat."
        compact
      />

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:font-bold">
          <p className="text-sm text-gray-500 mb-8">
            Utolsó frissítés: 2026. szeptember. Ez egy tájékoztató sablon — a tulajdonos
            átnézése után véglegesíthető.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Adatkezelő</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Az adatkezelő: <strong>{legal.operatorName}</strong> ({distributor.fullName}), a{" "}
            <strong>{brand.name}</strong> ({brand.domain}) weboldal üzemeltetője.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elérhetőség:{" "}
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
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Milyen adatokat kezelünk?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
            <li>Kapcsolatűrlap: név, e-mail, telefon (opcionális), üzenet</li>
            <li>Hírlevél: e-mail cím</li>
            <li>Rendelésigény: szállítási és kapcsolattartási adatok</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Cél és jogalap</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Az adatokat a megkeresések megválaszolására, hírlevél küldésére (hozzájárulás
            alapján), valamint rendelésigények kezelésére használjuk. A hozzájárulás
            bármikor visszavonható.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Tárolás és továbbítás</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Az űrlapokról érkező üzenetek e-mailben érkeznek az adatkezelőhöz. A Flavon
            hivatalos webshopon keresztül leadott rendelések adatkezelése a Flavon
            szabályzata szerint történik.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Jogok</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kérelmezheted az adataidhoz való hozzáférést, helyesbítést, törlést, a
            kezelés korlátozását, valamint panaszt tehetsz a Nemzeti Adatvédelmi és
            Információszabadság Hatóságnál (NAIH).
          </p>

          <p className="text-gray-700 leading-relaxed mt-10">
            <Link to="/impresszum" className="text-brand-700 font-medium underline">
              Impresszum
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
