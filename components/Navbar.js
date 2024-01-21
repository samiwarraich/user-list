import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Link className="logo" href="/">
        <Image src="/logo.png" alt="site logo" width={25} height={25} />
      </Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/users/">User Listing</Link>
    </nav>
  );
};

export default Navbar;
