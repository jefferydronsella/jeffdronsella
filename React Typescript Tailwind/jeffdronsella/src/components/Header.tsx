import MenuItem from "./MenuItem";
import { navItems } from "./NavItems";

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
          <div className="sm:flex sm:gap-8 justify-center">
            <div className="text-center">
              <MenuItem navItem={navItems[0]} />
            </div>
            <hr className="sm:hidden"/>
            <div>
              <MenuItem navItem={navItems[1]} />
            </div>
          </div>
          <MenuItem navItem={navItems[2]} />
          <div className="sm:flex sm:gap-8">
            <div className="text-center">
              <MenuItem navItem={navItems[3]} />
            </div>
            <hr className="sm:hidden"/>
            <div>
              <MenuItem navItem={navItems[4]} />
            </div>
          </div>
        </ul>
      </nav>
    </header>
  )
}