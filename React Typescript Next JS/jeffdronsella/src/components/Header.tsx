import Image from "next/image";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center pt-4 gap-24">
        <Image src="/butterfly.jpg" alt="a butterfly" width="100" height="100" />
        <h1 className="font-[bernhardfashion] text-7xl font-semibold">Jeffery A. Dronsella</h1>
        <Image src="/butterfly.jpg" alt="a butterfly" width="100" height="100" />
      </div>
      <nav>
        <ul className="flex justify-center gap-16 text-3xl pt-4">
          <MenuItem href="/" label="Home" />
          <MenuItem href="/music" label="Music" />
          <MenuItem href="/about" label="About" />
          <MenuItem href="/contact" label="Contact" />
        </ul>
      </nav>
    </>
  )
}