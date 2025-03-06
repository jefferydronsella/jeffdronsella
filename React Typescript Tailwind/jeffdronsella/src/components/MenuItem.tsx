import { Link } from "react-router-dom"

export default function MenuItem({ href, label }: { href: string, label: string }) {
  // const path = usePathname();
  // const homePath = path === "/";
  const selected = false //label.toLowerCase() === "home" && homePath || `/${label.toLowerCase()}` === path
  return (
    <Link to={href} className={`${selected ? "font-semibold" : ""}`}>{label}</Link>
  )
}