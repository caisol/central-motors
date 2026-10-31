import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import ProductsBrowser from "@/components/site/ProductsBrowser";
import { getProducts, getBodyTypes } from "@/data/db";

export const metadata: Metadata = {
  title: "Car Prices in Pakistan, All New Models",
  description:
    "Compare all new car prices in Pakistan: Fronx, Swift, Cultus, Alto and Every. Official variants, specs and starting prices at Central Motors, authorised dealership in Rawalpindi.",
  keywords: ["Car prices Pakistan", "new vehicle models", "Fronx price", "Swift price", "Alto price", "Cultus price"],
  alternates: { canonical: "/products" },
};

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const [products, types] = await Promise.all([getProducts(), getBodyTypes()]);
  return (
    <>
      <PageHero
        eyebrow="Our lineup"
        title="All vehicle models"
        subtitle="The current passenger lineup. Prices shown are starting figures."
      />
      <div className="pt-10">
        <ProductsBrowser products={products} types={types} />
      </div>
    </>
  );
}
