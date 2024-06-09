import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

function HomePage() {
  return (
    <>
      <Title title="Tienda" className="mb-2" subtitle="Todos los productos" />
      <ProductGrid products={products} />
    </>
  );
}

export default HomePage;
