import { Link, useLocation } from "react-router-dom"
import { NavItem } from "./NavItems";

export default function MenuItem({ navItem }: { navItem: NavItem }) {
  const path = useLocation().pathname;
  const selected = navItem.path === path;
  return (
    <Link to={navItem.path} className={`${selected ? "font-semibold" : ""} text-wrap w-min text-center`}>{navItem.label}</Link>
  )
}