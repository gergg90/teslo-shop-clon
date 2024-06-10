import { titleFont } from "@/config/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex justify-center items-center w-full text-xs mb-8 ">
      <Link href="/">
        <span className="bg-blue-600 text-white rounded-md p-2">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo{" "}
          </span>
          <span>| Shop</span>
          <span> © {new Date().getFullYear()}</span>
        </span>
      </Link>
    </div>
  );
}
