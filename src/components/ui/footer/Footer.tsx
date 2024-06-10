import { titleFont } from "@/config/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex justify-center items-center w-full text-xs mb-8 bg-blue-600 text-white rounded-sm">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo{" "}
        </span>
        <span>| Shop</span>
        <span> © {new Date().getFullYear()}</span>
      </Link>
    </div>
  );
}
