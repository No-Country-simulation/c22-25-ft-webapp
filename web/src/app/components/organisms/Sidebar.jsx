'use client'
import {
  Button,
  Link,
  Avatar,
  Divider,
  Tooltip,
} from "@nextui-org/react"
import { Plus, Book, FolderGit2, MessageSquare, PanelRight } from 'lucide-react'
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

const mainNavItems
  = [
    {
      icon: <Plus className="h-5 w-5" />,
      label: "Inicio de sesión",
      href: "/login"
    },
    {
      icon: <Book className="h-5 w-5" />,
      label: "Registrarse",
      href: "/register"
    },
    {
      icon: <FolderGit2 className="h-5 w-5" />,
      label: "Dashboard",
      href: "/dashboard"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Pantalla con lista",
      href: "/"
    }
  ]

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const pathName = usePathname()

  const openSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <aside className={`
      flex flex-col
      fixed left-0 top-0 h-screen
      bg-cloud-300 text-white
      ${isCollapsed ? 'w-16' : 'w-72'}
    `}>
      {/* Header */}
      <div className={
        `
        ${isCollapsed ? 'py-4 px-2' : 'p-4'}
         flex items-center justify-between`
      }>
        {!isCollapsed && (
          // <span className="text-xl font-bold">v0</span>
          <>
            <Image
              width={160}
              height={40}
              src="/logo.svg"
              alt="logo"
              className="w-58 h-10"
            />
            <Tooltip
              placement={'right-end'}
              content={'Cerrar panel'}
              // color="secondary"
              classNames={{
                base: [
                  // arrow color
                  "before:bg-neutral-400 dark:before:bg-white",
                ],
              }}
            >
              <Button isIconOnly variant="bordered" aria-label="Open sidebar" onClick={openSidebar}>
                <PanelRight className="h-5 w-5 text-gray-300" />
              </Button>
            </Tooltip>
          </>
        )}
        {
          isCollapsed && (
            <Button isIconOnly variant="light" aria-label="Open sidebar" onClick={openSidebar} className="w-full">
              <Image
                width={200}
                height={200}
                src="/isotipo.svg"
                alt="Isotipo"
                className="w-8 h-8"
              />
            </Button>
          )
        }
      </div>

      {/* Main Navigation */}
      <nav className="h-full flex flex-col">
        <div className="flex flex-col">
          {mainNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
              flex items-center gap-3 h-12
              px-3 py-3 
              text-gray-300 hover:text-white hover:bg-white/10
              transition-colors
              ${isCollapsed ? 'justify-center' : ''}
              ${pathName === item.href ? 'border-l-2 border-pink-200' : ''}
              `}
            >
              <span className={
                `${isCollapsed ? '' : 'ml-[10px]'}`
              }>{item.icon}</span>
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>

        {isCollapsed && (
          <div className="mt-auto flex justify-center">
            <Tooltip
              placement={'right-end'}
              content={'Abrir panel'}
              // color="secondary"
              classNames={{
                base: [
                  // arrow color
                  "before:bg-neutral-400 dark:before:bg-white",
                ],
              }}
            >
              <Button isIconOnly variant="bordered" aria-label="Open sidebar" onClick={openSidebar}>
                <PanelRight className="h-5 w-5 text-gray-300" />
              </Button>
            </Tooltip>
          </div>
        )}
      </nav>

      {/* User Profile */}
      <Divider className="my-2 bg-white/20" />
      <div className="p-4">
        <div className={`
          flex items-center gap-3
          ${isCollapsed ? 'justify-center' : ''}
        `}>
          <Avatar
            src="/isotipo.svg"
            className="w-8 h-8"
            alt="User avatar"
            radius="sm"
          />
          {!isCollapsed && (
            <div>
              <div className="text-sm">username</div>
              <div className="text-xs text-gray-400">correo@gmail.com</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

