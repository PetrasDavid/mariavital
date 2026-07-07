import { motion } from "framer-motion";
import { Phone, Mail, Calendar, MapPin } from "lucide-react";
import { siteConfig } from "../config/config";
import { faqItems } from "../config/faqData";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import ContactForm from "../components/ui/ContactForm";
import FAQAccordion from "../components/ui/FAQAccordion";
import { SocialLinkList } from "../components/ui/SocialIcons";

export default function ContactPage() {
  const { contact, social, links, distributor } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Kapcsolat"
        title="Lépj kapcsolatba velünk"
        subtitle="Kérdésed van a termékekről, a Ringa Dance-ről vagy a csatlakozásról? Írj vagy hívj bátran — szívesen segítek!"
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Elérhetőségek</h2>

              <div className="space-y-4 mb-10">
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-brand-50 border border-brand-100 hover:border-brand-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="text-lg font-bold text-gray-900">{contact.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-rose-50 border border-rose-100 hover:border-rose-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-bold text-gray-900 break-all">{contact.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gray-200 text-gray-600 flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Szolgáltatás</p>
                    <p className="text-base font-semibold text-gray-900">
                      Online & személyes · Magyarország
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-700 to-emerald-800 text-white mb-10">
                <Calendar className="h-8 w-8 text-brand-200 mb-3" />
                <h3 className="text-xl font-bold mb-2">Online időpontfoglalás tanácsadásra</h3>
                <p className="text-brand-100 text-sm mb-5 leading-relaxed">
                  Foglalj időpontot ingyenes konzultációra {distributor.name}-val — termékek,
                  életmód vagy üzleti lehetőség témában.
                </p>
                <Button
                  href={links.calendlyUrl}
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  iconPosition="left"
                  className="!bg-white !text-brand-800 hover:!bg-brand-50"
                >
                  Online időpontfoglalás tanácsadásra
                </Button>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-5">Közösségi média</h3>
              <SocialLinkList social={social} variant="card" />
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 p-6 md:p-8 h-fit"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Üzenet küldése</h2>
              <p className="text-gray-600 text-sm mb-6">
                Töltsd ki az űrlapot, és {distributor.name} hamarosan válaszol.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ on contact page */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GYIK"
            title="Gyakori kérdések"
            subtitle="Gyors válaszok, mielőtt írnál."
          />
          <FAQAccordion items={faqItems.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}
