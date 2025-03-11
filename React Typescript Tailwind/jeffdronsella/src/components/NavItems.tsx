import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Music from "./Music";
import Programmer from "./Programmer";

export type NavItem = {
  path: string;
  label: string;
  element: React.ReactNode;
}

export const navItems: NavItem[] =
  [{ path: "/", label: "Home", element: <Home /> },
  { path: "/music", label: "Music", element: <Music /> },
  { path: "/programmer", label: "Software Development", element: <Programmer />},
  { path: "/about", label: "About", element: <About /> },
  { path: "/contact", label: "Contact", element: <Contact /> }]
