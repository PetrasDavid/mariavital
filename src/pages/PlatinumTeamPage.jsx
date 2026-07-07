import { motion } from "framer-motion";
import { Users, GraduationCap, Calendar, Mic, CalendarDays } from "lucide-react";
import { siteConfig } from "../config/config";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import ContactForm from "../components/ui/ContactForm";

const benefits = [
  { icon: Users, title: "Személyes mentorálás", description: "Mária vezetésével, kezdőktől haladókig." },
  { icon: GraduationCap, title: "Professzionális képzések", description: "Online és offline tréningek rendszeresen." },
  { icon: Calendar, title: "Események", description: "Csapatépítők, workshopok, közös programok." },
  { icon: Mic, title: "Podcast & tartalmak", description: "Inspiráló beszélgetések és oktatóanyagok." },
];

const leaders = [
  { name: "Mária Kovács", role: "Platinum Team vezető", initial: "M" },
  { name: "Csapatmentor", role: "Üzleti mentor", initial: "C" },
  { name: "Ringa Dance oktató", role: "Mozgásprogram", initial: "R" },
];

const events = [
  { date: "2026. ápr. 12.", title: "Tavaszi csapatépítő", type: "Offline" },
  { date: "2026. ápr. 20.", title: "Online termékbemutató", type: "Online" },
  { date: "2026. máj. 5.", title: "Ringa Dance workshop", type: "Offline" },
];

const podcasts = [
  { title: "Hogyan kezdj MLM-ben?", duration: "32 perc" },
  { title: "Flavon és az immunrendszer", duration: "28 perc" },
  { title: "Ringa Dance történet", duration: "24 perc" },
];

export default function PlatinumTeamPage() {
  const { distributor, links } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Platinum Team"
        title="Csatlakozz a csapatomhoz"
        subtitle={`A ${distributor.teamName} mentori támogatást, képzéseket és egy támogató közösséget kínál — kezdőknek és tapasztalt partnereknek egyaránt.`}
      />

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
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">Helyőrző események — frissítés következik.</p>
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
