import { motion } from "framer-motion";
import { Users, GraduationCap, Calendar, CalendarDays, Play } from "lucide-react";
import {
  siteConfig,
  platinumPitch,
  mentorProgramStory,
  platinumLeadershipStory,
} from "../config/config";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import ContactForm from "../components/ui/ContactForm";
import SeoHead from "../components/ui/SeoHead";
import { pageSeo } from "../config/seoData";
import { isLiveUrl } from "../utils/links";

const benefits = [
  { icon: Users, title: "Személyes mentorálás", description: "Marcsi vezetésével, kezdőktől haladókig." },
  { icon: GraduationCap, title: "Professzionális képzések", description: "Online és offline tréningek rendszeresen." },
  { icon: Calendar, title: "Események", description: "Csapatépítők, workshopok, közös programok." },
  { icon: Play, title: "Videó & tartalmak", description: "Nézd meg a csapat bemutatkozó videóját." },
];

const leaders = [
  { name: "Miskolci Marcsi", role: "Elit Team vezető", initial: "M" },
  { name: "Csapatmentor", role: "Üzleti mentor", initial: "C" },
  { name: "Termék mentor", role: "Támogatás & képzés", initial: "T" },
];

const events = [
  {
    date: "2026. nov. 21–22.",
    title: "Flavon 2 napos rendezvény",
    location: "Siófok",
    type: "Flavon országos esemény",
  },
];

export default function PlatinumTeamPage() {
  const { distributor, links, social } = siteConfig;
  const calendlyLive = isLiveUrl(links.calendlyUrl);

  return (
    <>
      <SeoHead {...pageSeo.platinum} />
      <PageHero
        eyebrow="Platinum Team"
        title={platinumPitch.headline}
        subtitle={`A ${distributor.teamName} mentori támogatást, képzéseket és egy támogató közösséget kínál. Kezdőknek és tapasztalt partnereknek egyaránt.`}
      />

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-xl mb-10">
            <img
              src={distributor.teamImage}
              alt={distributor.teamImageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {platinumPitch.points.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full bg-brand-50 text-brand-800 text-sm font-semibold capitalize"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-brand-50 border border-brand-100"
              >
                <Icon className="h-7 w-7 text-brand-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Eseménynaptár" align="left" />
              <div className="space-y-3">
                {events.map((event) => (
                  <div
                    key={event.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-500">
                        {event.date} · {event.type}
                      </p>
                      {event.location && (
                        <p className="text-sm text-gray-500">{event.location}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading title="Videó" align="left" />
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/t41xkMjWZwU"
                  title="Platinum Team — bemutatkozó videó"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20 bg-gradient-to-br from-brand-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              {mentorProgramStory.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              {mentorProgramStory.title}
            </h2>
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed text-left sm:text-center">
              {mentorProgramStory.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
            {mentorProgramStory.images.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-white border border-brand-100"
          >
            <img
              src={mentorProgramStory.certificate.src}
              alt={mentorProgramStory.certificate.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <p className="text-center text-sm font-semibold text-brand-800 py-3 px-4">
              Mentorprogram oklevél
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              {platinumLeadershipStory.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              {platinumLeadershipStory.title}
            </h2>
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed text-left sm:text-center">
              {platinumLeadershipStory.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-brand-800 font-semibold text-base sm:text-lg leading-relaxed">
              {platinumLeadershipStory.cta}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={social.messenger.href} external variant="primary">
                Írj Messengerben
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  document.getElementById("jelentkezes")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Űrlap kitöltése
              </Button>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {platinumLeadershipStory.images.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Vezetőség" subtitle="Ismerd meg a csapat arcait." />
          <div className="grid sm:grid-cols-3 gap-6">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100"
              >
                <div className="w-20 h-20 rounded-full bg-brand-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {leader.initial}
                </div>
                <h3 className="font-bold text-gray-900">{leader.name}</h3>
                <p className="text-sm text-gray-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jelentkezes" className="pb-20 md:pb-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-700 to-emerald-800 text-white">
              <Calendar className="h-8 w-8 text-brand-200 mb-4" />
              <h2 className="text-2xl font-bold mb-3">
                {calendlyLive ? "Online időpontfoglalás tanácsadásra" : "Beszéljünk személyesen"}
              </h2>
              <p className="text-brand-100 mb-6 leading-relaxed">
                {calendlyLive
                  ? "Beszéljünk személyesen az üzleti lehetőségről — foglalj időpontot!"
                  : "Az online időpontfoglaló hamarosan elérhető. Addig írj Messengerben vagy töltsd ki a jelentkezési űrlapot."}
              </p>
              {calendlyLive ? (
                <Button
                  href={links.calendlyUrl}
                  external
                  variant="primary"
                  size="lg"
                  icon={Calendar}
                  iconPosition="left"
                  className="!bg-white !text-brand-800 hover:!bg-brand-50"
                >
                  Online időpontfoglalás tanácsadásra
                </Button>
              ) : (
                <Button
                  href={social.messenger.href}
                  external
                  variant="primary"
                  size="lg"
                  className="!bg-white !text-brand-800 hover:!bg-brand-50"
                >
                  Írj Messengerben
                </Button>
              )}
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Jelentkezés</h2>
              <p className="text-gray-600 text-sm mb-6">
                Töltsd ki az űrlapot, és {distributor.name} felveszi veled a kapcsolatot.
              </p>
              <ContactForm
                type="platinum"
                messagePlaceholder="Mire keresed a megoldást?"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
