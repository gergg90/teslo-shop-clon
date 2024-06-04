import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const products = initialData.products;

function CategoryPage({ params }: Props) {
  const { id } = params;

  if (id !== "men" && id !== "women" && id !== "kid") return notFound();

  const productsFilter = products.filter((product) => product.gender === id);

  let titleCategory = "";
  if (params.id === "men") {
    titleCategory = "Hombres";
  }
  if (params.id === "women") {
    titleCategory = "Damas";
  }
  if (params.id === "kid") {
    titleCategory = "Niños";
  }

  return (
    <>
      <Title
        name={titleCategory}
        className="mb-2"
        subtitle={`Todos los productos de la categoria ${titleCategory}`}
      />
      <ProductGrid products={productsFilter} />
    </>
  );
}

export default CategoryPage;
