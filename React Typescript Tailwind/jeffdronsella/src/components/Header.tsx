import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center items-center pt-4 gap-12 lg:gap-24">
        <img src="/butterfly.jpg" alt="a butterfly" width="100" height="100" className="hidden md:inline" />
        <h1 className="font-[bernhardfashion] text-4xl sm:text-5xl lg:text-7xl font-semibold">Jeffery A. Dronsella</h1>
        <img src="/butterfly.jpg" alt="a butterfly" width="100" height="100" className="hidden md:inline" />
      </div>
      <nav>
        <ul className="flex justify-center gap-4 sm:gap-8 text-xl sm:text-2xl lg:text-3xl pt-4">
          <MenuItem href="/" label="Home" />
          <MenuItem href="/music" label="Music" />
          <MenuItem href="/about" label="About" />
          <MenuItem href="/contact" label="Contact" />
        </ul>
      </nav>
    </header>
  )
}