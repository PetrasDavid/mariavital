import { LogIn, Lock } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Tagoknak"
        title="Belépés tagoknak"
        subtitle="A zárt tagi felület hamarosan elérhető — képzések, anyagok és csapatfórum egy helyen."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold text-center text-gray-900 mb-2">Hamarosan</h2>
            <p className="text-gray-600 text-sm text-center mb-8 leading-relaxed">
              A tagi belépés fejlesztés alatt áll. Ha Platinum Team tag vagy és nem kapsz
              hozzáférést, írj a kapcsolat oldalon.
            </p>
            <form className="space-y-4 opacity-50 pointer-events-none" aria-hidden="true">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
                disabled
              />
              <input
                type="password"
                placeholder="Jelszó"
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
                disabled
              />
              <Button variant="secondary" size="lg" icon={LogIn} className="w-full" disabled>
                Belépés
              </Button>
            </form>
            <Button to="/kapcsolat" variant="outline" size="md" className="w-full mt-4">
              Kapcsolatfelvétel
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
