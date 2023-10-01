import Image from "next/image";
import Link from "next/link";
const menu = [
  { id: 0, name: "Home", path: "/" },
  { id: 1, name: "Converter", path: "/" },
  { id: 2, name: "How it Works", path: "/" },
];
const about_us = [
  { id: 0, name: "About", path: "/" },
  { id: 1, name: "Contact Us", path: "/" },
  { id: 2, name: "Privacy Policy", path: "/" },
];
const screen_record = [
  { id: 0, name: "Browser Window", path: "/" },
  { id: 1, name: "Desktop", path: "/" },
  { id: 2, name: "Application", path: "/" },
];

export default function Footer() {
  return (
    <footer className="blue-bg py-[6rem] text-white text-[0.9rem] mt-auto">
      <section className="custom-container flex flex-col md:grid  gap-12 md:gap-0 grid-cols-3">
        <Image
          src="/images/globals/logo-footer.svg"
          alt="Help Me Out"
          width={150}
          height={150}
          style={{ width: "130px", height: "auto" }}
          className="w-full m-auto md:m-0"
        />
        <div className="grid grid-cols-3 justify-between md:col-span-2">
          <div className="grid gap-4 w-full justify-center">
            <h2 className="">Menu</h2>
            <ul className="flex flex-col gap-4 font-thin">
              {menu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid gap-4 w-full justify-center">
            <h2>About</h2>
            <ul className="flex flex-col gap-4 font-thin">
              {about_us.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid gap-4 w-full justify-center">
            <h2>Screen Record</h2>
            <ul className="flex flex-col gap-4 font-thin">
              {screen_record.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
