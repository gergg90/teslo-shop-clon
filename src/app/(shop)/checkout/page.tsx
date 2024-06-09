import { Title } from "@/components";
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

function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Verificar Orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span>Ajustar elementos</span>
            <Link href="/cart" className="underline mb-15">
              Editar Carrito
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
                  <p>${product.price} x3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - resumen de la oreden */}

          <div className="bg-white rounded-xl h-fit shadow-xl p-10">
            <h2 className="text-2xl mb-2 ">Direccion de entrega:</h2>
            <div className="mb-10">
              <p className="text-xl">Gergg</p>
              <p>Petare</p>
              <p>Ve. centro</p>
              <p>Alcaldia sucre</p>
              <p>Venezuela Caracas</p>
              <p>Codigo postal 7070</p>
              <p>Telefono: 0412-560-46-96</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-blue-800 opacity-50 mb-10" />

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
              {/* Disclaimer */}
              <p className="mb-5">
                <span className="text-xs">
                  Al hacer click en{" "}
                  <span className="font-semibold">{`"Colocar Orden"`}</span>,
                  aceptas nuestros{" "}
                  <a href="#" className="underline">
                    terminos y condiciones
                  </a>{" "}
                  mas{" "}
                  <a href="#" className="underline">
                    politicas de privacidad.
                  </a>
                </span>
              </p>

              <Link
                href={`/orders/id`}
                className="flex underline decoration-white underline-offset-2 justify-center btn-primary"
              >
                Colocar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
