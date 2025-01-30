"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart3, Home, Settings, User } from "lucide-react"

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Analytics',
    icon: BarChart3,
    href: '/dashboard/analytics',
    color: "text-violet-500"
  },
  {
    label: 'Profile',
    icon: User,
    href: '/dashboard/profile',
    color: "text-pink-500"
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
    color: "text-orange-500"
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
              >
                <Button
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === route.href && "bg-muted"
                  )}
                >
                  <route.icon className={cn("mr-2 h-4 w-4", route.color)} />
                  {route.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}