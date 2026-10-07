import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import SeoHead from "../components/ui/SeoHead";

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Az oldal nem található"
        description="Ez az oldal nem létezik a marcsivital weboldalon."
        path="/404"
        noIndex
      />
      <PageHero
        eyebrow="404"
        title="Ez az oldal nem található"
        subtitle="A keresett cím nem létezik, vagy már áthelyeztük. Menj vissza a kezdőlapra, vagy nézd meg a termékeket."
        compact
      />
      <section className="pb-20">
        <div className="max-w-xl mx-auto px-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" variant="secondary" icon={Home} iconPosition="left">
            Kezdőlap
          </Button>
          <Button to="/termekek" variant="outline" icon={ArrowLeft} iconPosition="left">
            Termékek
          </Button>
          <Link
            to="/kapcsolat"
            className="inline-flex items-center justify-center text-sm font-semibold text-brand-700 hover:underline px-4 py-3"
          >
            Kapcsolat
          </Link>
        </div>
      </section>
    </>
  );
}
