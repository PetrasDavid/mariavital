import { motion } from "framer-motion";
import { Users, GraduationCap, Calendar, Mic, CalendarDays } from "lucide-react";
import { siteConfig, platinumPitch } from "../config/config";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import ContactForm from "../components/ui/ContactForm";

const benefits = [
  { icon: Users, title: "Személyes mentorálás", description: "Marcsi vezetésével, kezdőktől haladókig." },
  { icon: GraduationCap, title: "Professzionális képzések", description: "Online és offline tréningek rendszeresen." },
  { icon: Calendar, title: "Események", description: "Csapatépítők, workshopok, közös programok." },
  { icon: Mic, title: "Podcast & tartalmak", description: "Inspiráló beszélgetések és oktatóanyagok." },
];

const leaders = [
  { name: "Miskolci Marcsi", role: "Elit Team vezető", initial: "M" },
  { name: "Csapatmentor", role: "Üzleti mentor", initial: "C" },
  { name: "Termék mentor", role: "Támogatás & képzés", initial: "T" },
];

const events = [
  {
    date: "2026. aug. 1.",
    title: "Platinum Team találkozó",
    location: "Budapest, Tél utca 3. (IV. kerület)",
    type: "Offline",
  },
];

const podcasts = [
  { title: "Hogyan kezdj MLM-ben?", duration: "32 perc" },
  { title: "Flavon és az immunrendszer", duration: "28 perc" },
  { title: "Egészséges rutin mindennap", duration: "24 perc" },
];

export default function PlatinumTeamPage() {
  const { distributor, links } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Platinum Team"
        title={platinumPitch.headline}
        subtitle={`A ${distributor.teamName} mentori támogatást, képzéseket és egy támogató közösséget kínál — kezdőknek és tapasztalt partnereknek egyaránt.`}
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
              <SectionHeading title="Platinum team eseménynaptár" align="left" />
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
              <SectionHeading title="Podcast & tartalmak" align="left" />
              <div className="space-y-3">
                {podcasts.map((pod) => (
                  <div
                    key={pod.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{pod.title}</p>
                      <p className="text-sm text-gray-500">{pod.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-700 to-emerald-800 text-white">
              <Calendar className="h-8 w-8 text-brand-200 mb-4" />
              <h2 className="text-2xl font-bold mb-3">Online időpontfoglalás tanácsadásra</h2>
              <p className="text-brand-100 mb-6 leading-relaxed">
                Beszéljünk személyesen az üzleti lehetőségről — foglalj időpontot!
              </p>
              <Button
                href={links.calendlyUrl}
                variant="primary"
                size="lg"
                icon={Calendar}
                iconPosition="left"
                className="!bg-white !text-brand-800 hover:!bg-brand-50"
              >
                Online időpontfoglalás tanácsadásra
              </Button>
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Jelentkezés</h2>
              <p className="text-gray-600 text-sm mb-6">
                Töltsd ki az űrlapot, és {distributor.name} felveszi veled a kapcsolatot.
              </p>
              <ContactForm messagePlaceholder="Mire keresed a megoldást?" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
