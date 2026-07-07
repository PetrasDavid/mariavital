import { motion } from "framer-motion";
import { Music, Calendar, Image, Trophy } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/ui/ContactForm";

const schedule = [
  { day: "Hétfő", time: "18:00–19:00", location: "Budapest · Online is", level: "Kezdő" },
  { day: "Szerda", time: "10:00–11:00", location: "Budapest", level: "Haladó" },
  { day: "Péntek", time: "17:30–18:30", location: "Online", level: "Minden szint" },
  { day: "Szombat", time: "09:00–10:30", location: "Budapest · Workshop", level: "Kihívás" },
];

const challenges = [
  { title: "7 napos lapos has kihívás", status: "Aktív", emoji: "🔥" },
  { title: "30 napos Ringa Dance kihívás", status: "Hamarosan", emoji: "💃" },
  { title: "Tavaszi detox mozgás", status: "Hamarosan", emoji: "🌿" },
];

export default function RingaDancePage() {
  return (
    <>
      <PageHero
        eyebrow="Ringa Dance"
        title="Mozgás, zene, közösség"
        subtitle="A Ringa Dance egy vidám, hatékony mozgásforma — fogyáshoz, energiához és jó közérzethez. Csatlakozz az órákhoz!"
      />

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900">Mi az a Ringa Dance?</h2>
              <p>
                A Ringa Dance egyedi mozgásforma, amely ötvözi a kardiót, a táncot és a
                közösségi élményt. Nem kell profi táncosnak lenned — csak nyitottnak a
                mozgásra és a jó zenére!
              </p>
              <p>
                Mária életében a Ringa Dance kulcsszerepet játszott a tartós fogyásban és
                a mentális egészség megőrzésében. Ma oktatóként osztja meg ezt az örömöt.
              </p>
            </div>
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-rose-200 to-brand-200 flex flex-col items-center justify-center text-brand-800">
              <Music className="h-16 w-16 mb-3 opacity-60" />
              <span className="font-medium">Bemutató videó helye</span>
            </div>
          </div>

          <SectionHeading title="Órarend" subtitle="Helyőrző időpontok — a pontos helyszínek hamarosan." />
          <div className="overflow-x-auto rounded-2xl border border-gray-100 mb-20">
            <table className="w-full text-left">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Nap</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Időpont</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Helyszín</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Szint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {schedule.map((row) => (
                  <tr key={row.day} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.day}</td>
                    <td className="px-6 py-4 text-gray-600">{row.time}</td>
                    <td className="px-6 py-4 text-gray-600">{row.location}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-100 text-brand-700">
                        {row.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionHeading title="Galéria" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className="aspect-square rounded-2xl bg-gradient-to-br from-brand-100 to-rose-100 flex items-center justify-center text-gray-400"
              >
                <Image className="h-8 w-8 opacity-40" />
              </div>
            ))}
          </div>

          <SectionHeading title="Kihívások" />
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {challenges.map((ch) => (
              <motion.div
                key={ch.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 15 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-gray-100 bg-white text-center"
              >
                <span className="text-4xl mb-3 block">{ch.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-1">{ch.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                  <Trophy className="h-3 w-3" />
                  {ch.status}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-brand-600" />
              <h2 className="text-xl font-bold text-gray-900">Jelentkezés Ringa Dance órákra</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
