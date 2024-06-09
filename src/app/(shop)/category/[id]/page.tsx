import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const products = initialData.products;

function CategoryPage({ params }: Props) {
  const { id } = params;

  if (id !== "men" && id !== "women" && id !== "kid" && id !== "unisex")
    return notFound();

  const productsFilter = products.filter((product) => product.gender === id);

  const titleCategory: Record<Category, string> = {
    men: "Hombres",
    women: "Damas",
    kid: "Niños",
    unisex: "Unisex",
  };

  return (
    <>
      <Title
        title={`Articulos para: ${titleCategory[id]}`}
        className="mb-2"
        subtitle="Todos los articulos"
      />
      <ProductGrid products={productsFilter} />
    </>
  );
}

export default CategoryPage;
