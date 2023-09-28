import Image from "next/image";
import Link from "next/link";
import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });
const linkes = [
  {
    page: "Features",
    path: "",
  },
  {
    page: "How It Works",
    path: "",
  },
];

export default function Navbar() {
  return (
    <header className="py-4 border-4 border-x-0 border-t-0 border-gray-100">
      <nav className="custom-container flex items-center justify-between">
        <Image
          src="/images/globals/logo.svg"
          alt="HelpMeOut"
          width={120}
          height={50}
          style={{ width: "157px", height: "60px" }}
          className="w-full"
        />
        <div className="justify-around gap-3 hidden md:flex">
          <ul className="flex gap-12 items-center">
            {linkes.map((link) => {
              return (
                <li key={link.page}>
                  <Link href={link.path}>{link.page}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          href=""
          className={`${sora.className} font-semibold blue-dark text-lg`}
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}