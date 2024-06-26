import { Product } from "@/interfaces";
import { ProductGriItem } from "./ProductGriItem";

interface Props {
  products: Product[];
}

export function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductGriItem key={product.slug} product={product} />
      ))}
    </div>
  );
}
