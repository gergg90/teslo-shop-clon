import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[4],
  initialData.products[5],
  initialData.products[6],
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

            {/* Items */}

            {productInCart.map((product) => (
              <div key={product.slug} className="flex mt-2 mb-2">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
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
          </div>

          {/* Checkout - resumen de la oreden */}

          <div className="bg-white rounded-xl h-fit shadow-xl p-10">
            <h2 className="text-2xl mb-2">Resumen de orden:</h2>
            <div className="grid grid-cols-2">
              <span>N° productos</span>
              <span className="text-right">3 productos</span>

              <span>Sub total</span>
              <span className="text-right">$ 300</span>

              <span>Iva (16%)</span>
              <span className="text-right">$ 48</span>

              <span className="font-extrabold mt-5 text-2xl">Total:</span>
              <span className="text-right font-extrabold mt-5 text-2xl">
                $ 348
              </span>
            </div>

            <div className="mt-7 w-full">
              <Link
                href="/checkout/address"
                className="flex underline decoration-white underline-offset-2 justify-center btn-primary"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
