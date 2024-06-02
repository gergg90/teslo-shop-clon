import { Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

function HomePage() {
  return (
    <>
      <Title name="Tienda" className="mb-2" subtitle="Todos los productos" />
    </>
  );
}

export default HomePage;
