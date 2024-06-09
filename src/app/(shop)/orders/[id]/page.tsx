import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[4],
  initialData.products[5],
  initialData.products[6],
];

interface Props {
  params: {
    id: string;
  };
}

function OrderPage({ params }: Props) {
  const { id } = params;

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title={`Orden #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-4 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              <p className="mx-2">Pendiente por pagar</p>
              <p className="mx-2">Orden Pagada</p>
            </div>

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
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-4 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                <p className="mx-2">Pendiente por pagar</p>
                <p className="mx-2">Orden Pagada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
