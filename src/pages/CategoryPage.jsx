import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productCategories, siteConfig } from "../config/config";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import ProductPurchaseButtons from "../components/ui/ProductPurchaseButtons";

export default function CategoryPage() {
  const { slug } = useParams();
  const category =
    productCategories.find((c) => c.id === slug) ||
    productCategories.find((c) => c.to.endsWith(slug));

  if (!category) {
    return (
      <PageHero
        title="Kategória nem található"
        subtitle="Ez a kategória nem létezik — nézd meg az összes terméket."
      >
        <div className="mt-8">
          <Button to="/termekek" variant="secondary">
            Termékek
          </Button>
        </div>
      </PageHero>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Termékek"
        title={`${category.emoji} ${category.title}`}
        subtitle={category.description}
        compact
      />

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm text-center mb-10">
            <p className="text-gray-600 leading-relaxed mb-6">
              A {category.title.toLowerCase()} támogatása a Flavon termékcsaláddal —
              személyes ajánlással {siteConfig.distributor.name}tól. Böngéssz a
              teljes kínálatban, vagy lépj tovább közvetlenül a hivatalos oldalra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button to="/termekek" variant="secondary" icon={ArrowRight}>
                Összes termék
              </Button>
              <Button to="/kapcsolat" variant="outline">
                Kérdésed van? Írj!
              </Button>
            </div>
            <ProductPurchaseButtons size="modal" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.to}
                className={`rounded-2xl border p-4 text-center transition-all ${
                  cat.id === category.id
                    ? "border-brand-400 bg-brand-50"
                    : "border-gray-100 hover:border-brand-200"
                }`}
              >
                <span className="text-2xl block mb-1">{cat.emoji}</span>
                <span className="text-sm font-semibold text-gray-800">{cat.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
