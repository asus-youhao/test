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
  { id: "home1", icon: Home, label: "Home", isHome: true, homeIndex: 1 },
  { id: "about", icon: User, label: "About Robotics" },
  { id: "experience", icon: Briefcase, label: "Projects & Deployments" },
  { id: "skills", icon: PenTool, label: "Skills Tree" },
  // { id: "achievements", icon: Trophy, label: "Patents & Awards" },
  // { id: "contact", icon: Mail, label: "Contact" },
]

const socialLinks = [
  {
    id: "youtube_video_1",
    href: "https://www.youtube.com/watch?v=179ljc96YWw",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "youtube_video_2",
    href: "https://www.youtube.com/watch?v=dFGpzAG4HqQ",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "github",
    href: "https://github.com/Willson-L",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "leetcode",
    href: "https://leetcode.com/u/Willson-L/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
        <path d="M19.5 39.5c-.6 0-1.1-.2-1.5-.6l-9.4-9.4c-.8-.8-.8-2.1 0-2.8l9.4-9.4c.8-.8 2.1-.8 2.8 0s.8 2.1 0 2.8L13.8 25l7.1 7.1c.8.8.8 2.1 0 2.8-.4.4-.9.6-1.4.6zm11 0c-.5 0-1-.2-1.4-.6-.8-.8-.8-2.1 0-2.8l7.1-7.1-7.1-7.1c-.8-.8-.8-2.1 0-2.8s2.1-.8 2.8 0l9.4 9.4c.8.8.8 2.1 0 2.8l-9.4 9.4c-.4.4-.9.6-1.4.6z" />
        <circle cx="25" cy="25" r="3" />
      </svg>
    ),
  },
];

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
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={link.id.charAt(0).toUpperCase() + link.id.slice(1)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </aside>
  )
}
