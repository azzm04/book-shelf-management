"use client"

import { usePathname } from "next/navigation"
import MobileNavbar from "./mobile-navbar"
import DesktopNavbar from "./desktop-navbar"

export default function Navbar() {
  const pathname = usePathname()

  const getPageId = () => {
    if (pathname === "/") return "home"
    if (pathname.startsWith("/fiksi")) return "fiksi"
    if (pathname.startsWith("/nonfiksi")) return "nonfiksi"
    if (pathname.startsWith("/profile")) return "profile"
    if (pathname.startsWith("/favorites")) return "favorites"
    return "home"
  }

  const currentPage = getPageId()

  return (
    <>
      <DesktopNavbar currentPage={currentPage} />
      <MobileNavbar currentPage={currentPage} />
    </>
  )
}
