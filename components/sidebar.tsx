"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Home,
  User,
  Briefcase,
  PenTool,
  Trophy,
  Mail,
} from "lucide-react"

interface NavItem {
  id: string
  icon: React.ElementType
  label: string
  isHome?: boolean
  homeIndex?: number
}

const navItems: NavItem[] = [
  { id: "home1", icon: Home, label: "Home (1)", isHome: true, homeIndex: 1 },
  { id: "home2", icon: Home, label: "Home (2)", isHome: true, homeIndex: 2 },
  { id: "home3", icon: Home, label: "Home (3)", isHome: true, homeIndex: 3 },
  { id: "home4", icon: Home, label: "Home (4)", isHome: true, homeIndex: 4 },
  { id: "about", icon: User, label: "About" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "skills", icon: PenTool, label: "Skills" },
  { id: "achievements", icon: Trophy, label: "Achievements" },
  { id: "contact", icon: Mail, label: "Contact" },
]

const socialLinks = [
  { id: "twitter", icon: "𝕏", href: "#" },
  { id: "instagram", icon: "○", href: "#" },
  { id: "linkedin", icon: "in", href: "#" },
]

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const getHomeGradient = (index: number) => {
    const gradients = [
      "bg-gradient-to-br from-green-400 to-green-600",
      "bg-gradient-to-br from-blue-400 to-blue-600",
      "bg-gradient-to-br from-yellow-400 to-yellow-600",
      "bg-gradient-to-br from-pink-400 to-pink-600",
    ]
    return gradients[index - 1] || gradients[0]
  }

  return (
    <aside className="fixed right-0 top-0 h-screen w-16 bg-secondary/80 backdrop-blur-sm flex flex-col items-center py-4 z-50">
      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          const isHovered = hoveredItem === item.id
          const Icon = item.icon

          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => onSectionChange(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "w-12 h-12 flex items-center justify-center rounded-md transition-all duration-200 relative",
                  isActive && item.isHome
                    ? getHomeGradient(item.homeIndex!)
                    : isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.isHome && (
                  <span className="absolute bottom-1 right-1.5 text-[10px] font-medium">
                    {item.homeIndex}
                  </span>
                )}
              </button>

              {/* Tooltip */}
              {isHovered && (
                <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-accent text-accent-foreground text-sm rounded whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Social Links */}
      <div className="flex flex-col items-center gap-3 mt-auto pt-4 border-t border-border">
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </aside>
  )
}
