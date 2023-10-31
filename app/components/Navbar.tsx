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
      <div className="brand">
        <Link href="/">
          <Image className="logo" src={logo} alt="Clamor Logo" />
        </Link>
        <h3 className="brand-name">Clamor</h3>
      </div>
      <ul className="flex">
        <li>
          <Link href="/product" className={pathname == '/product' ? 'active' : ''}>
            Product
          </Link>
        </li>
        <li>
          <Link href="/platform" className={pathname == '/platform' ? 'active' : ''}>
            Platform
          </Link>
        </li>
        <li>
          <Link href="/support" className={pathname == '/support' ? 'active' : ''}>
            Support
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
