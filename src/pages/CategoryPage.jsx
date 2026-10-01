import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productCategories, siteConfig } from "../config/config";
import { getProductById } from "../config/productsData";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";
import SeoHead from "../components/ui/SeoHead";

export default function CategoryPage() {
  const { slug } = useParams();
  const category =
    productCategories.find((c) => c.id === slug) ||
    productCategories.find((c) => c.to.endsWith(slug));

  if (!category) {
    return (
      <>
        <SeoHead
          title="Kategória nem található"
          description="Ez a kategória nem létezik."
          path={`/kategoria/${slug || ""}`}
          noIndex
        />
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
      </>
    );
  }

  const categoryProducts = (category.productIds || [])
    .map((id) => getProductById(id))
    .filter(Boolean);

  return (
    <>
      <SeoHead
        title={category.title}
        description={category.description}
        path={`/kategoria/${category.id}`}
      />
      <PageHero
        eyebrow="Termékek"
        title={`${category.emoji} ${category.title}`}
        subtitle={category.description}
        compact
      />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-brand-50/50 p-6 md:p-8 mb-10">
            <p className="text-gray-700 leading-relaxed mb-5 max-w-3xl">
              A {category.title.toLowerCase()} támogatása a Flavon termékcsaláddal —
              személyes ajánlással {siteConfig.distributor.name}tól. A kiskereskedelmi
              gomb a kosárba teszi a terméket; a gyártói karton a Flavon webshopra visz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button to="/termekek" variant="secondary" icon={ArrowRight}>
                Összes termék
              </Button>
              <Button to="/kapcsolat" variant="outline">
                Kérdésed van? Írj!
              </Button>
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {categoryProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mb-12">
              Ehhez a kategóriához még nincs bekötött termék.{" "}
              <Link to="/termekek" className="text-brand-700 font-semibold underline">
                Nézd meg az összes terméket
              </Link>
              .
            </p>
          )}

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
