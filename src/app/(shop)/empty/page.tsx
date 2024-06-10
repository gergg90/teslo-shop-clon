import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <IoCartOutline size={80} className="mx-5" />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Tu carrito esta vacio</h1>
        <Link href="/" className="mt-2 text-4xl text-blue-600">
          Compra ahora
        </Link>
      </div>
    </div>
  );
}

export default EmptyPage;
