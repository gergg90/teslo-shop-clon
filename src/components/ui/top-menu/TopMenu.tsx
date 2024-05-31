import { titleFont } from "@/config/fonts";
import Link from "next/link";

function TopMenu() {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className="">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-300"
          href="/category/men"
        >
          Hombres
        </Link>
      </div>
    </nav>
  );
}

export default TopMenu;
