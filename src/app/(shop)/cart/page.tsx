import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title name="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span>Agregar mas items</span>
            <Link href="/" className="underline mb-15">
              Continua comprando
            </Link>
          </div>

          {/* Items */}

          {productInCart.map((product) => (
            <div key={product.slug} className="flex">
              <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                width={100}
                height={100}
                className="mr-5 rounded"
              />

              <div>
                <p>{product.title}</p>
                <p className="mb-2">${product.price}</p>

                <QuantitySelector quantity={1} />

                <button className="underline mt-3">Remover</button>
              </div>
            </div>
          ))}

          {/* Checkout */}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
