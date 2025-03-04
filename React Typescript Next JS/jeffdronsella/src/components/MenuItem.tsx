'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({ href, label }: { href: string, label: string }) {
  const path = usePathname();
  const homePath = path === "/";
  const selected = label.toLowerCase() === "home" && homePath || `/${label.toLowerCase()}` === path
  return (
    <Link href={href} className={`${selected ? "font-semibold" : ""}`}>{label}</Link>
  )
}