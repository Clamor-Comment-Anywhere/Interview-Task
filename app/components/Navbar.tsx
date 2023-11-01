'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/Clamor Logo 1.svg";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <nav className="nav">
      <div className="flex">
          <Image className="logo" src={logo} alt="Clamor Logo" />
        <h3 className="brand-name">Clamor</h3>
      </div>
      <ul className="flex">
        <li>
          <Link href="/">
            Product
          </Link>
        </li>
        <li>
          <Link href="/" >
            Platforms
          </Link>
        </li>
        <li>
          <Link href="/">
            Support
          </Link>
        </li>
        <li>
          <Link href="/admin">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
