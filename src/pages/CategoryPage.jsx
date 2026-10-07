import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productCategories, siteConfig } from "../config/config";
import { getProductById } from "../config/productsData";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";
import SectionHeading from "../components/ui/SectionHeading";
import SeoHead from "../components/ui/SeoHead";
import { categorySeo } from "../config/seoData";

export default function CategoryPage() {
  const { slug } = useParams();
  const category =
    productCategories.find((c) => c.id === slug) ||
    productCategories.find((c) => c.to.endsWith(slug));

  if (!category) {
    return (
      <>
        <SeoHead {...categorySeo(null)} />
        <PageHero
          title="Kategória nem található"
          subtitle="Ez a kategória nem létezik — nézd meg az összes Flavon terméket."
        >
          <div className="mt-8">
            <Button to="/termekek" variant="secondary">
              Termékek
            </Button>
          </div>
        </PageHero>
      </>
    );
  }

  const categoryProducts = (category.productIds || [])
    .map((id) => getProductById(id))
    .filter(Boolean);

  return (
    <>
      <SeoHead {...categorySeo(category)} />
      <PageHero
        eyebrow="Flavon kategória"
        title={`${category.emoji} ${category.title}`}
        subtitle={`${category.description} Ajánlás: ${siteConfig.distributor.formalName}.`}
        compact
      />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 md:p-8 mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-gray-700 leading-relaxed">
                Ehhez a témához válogatott Flavon termékek —{" "}
                <strong>Kosárba teszem</strong> a saját kosaradba kerül, a{" "}
                <strong>Gyártói karton</strong> a Flavon hivatalos webshopjára visz.
              </p>
              <p className="text-sm text-brand-800 font-medium mt-2">
                {categoryProducts.length} ajánlott termék ebben a kategóriában
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button to="/termekek" variant="secondary" icon={ArrowRight}>
                Összes termék
              </Button>
              <Button to="/kapcsolat" variant="outline">
                Kérdésed van?
              </Button>
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <>
              <SectionHeading
                title="Ajánlott termékek"
                subtitle={`${category.title} — egészség, életmód és Flavon támogatással.`}
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                {categoryProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600 mb-12">
              Ehhez a kategóriához még nincs bekötött termék.{" "}
              <Link to="/termekek" className="text-brand-700 font-semibold underline">
                Nézd meg az összes terméket
              </Link>
              .
            </p>
          )}

          <h2 className="text-lg font-bold text-gray-900 mb-4">További kategóriák</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.to}
                className={`rounded-2xl border p-4 text-center transition-all ${
                  cat.id === category.id
                    ? "border-brand-400 bg-brand-50 shadow-sm"
                    : "border-gray-100 hover:border-brand-200 hover:bg-gray-50"
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
