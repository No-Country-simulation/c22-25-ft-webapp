'use client'
import { Button, Link, Avatar, Divider, Tooltip } from '@nextui-org/react'
import {
  UserCheck,
  Users,
  LayoutDashboard,
  PanelRight,
  LogOut,
  // UserPen,
} from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const mainNavItems = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    label: 'Profesionales',
    href: '/professionals',
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: 'Pacientes',
    href: '/patients',
  },
  // {
  //   icon: <UserPen className="h-5 w-5" />,
  //   label: 'Perfil',
  //   href: '/profile',
  // },
]

export const Sidebar = () => {
  const pathName = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true)
  const openSidebar = () => setIsCollapsed(!isCollapsed)
  const { data: session } = useSession()
  return (
    <aside
      className={`
      flex flex-col
      fixed left-0 top-0 
      bg-cloud-300 text-white
      h-fit md:h-screen z-50
      ${isCollapsed ? 'w-full md:w-16' : 'w-full md:w-72'}
    `}
    >
      {/* Header */}
      <div className={`w-full flex items-center justify-between p-4`}>
        {!isCollapsed && (
          <>
            <Image
              width={160}
              height={40}
              src="/logo-negative.svg"
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
                  'before:bg-neutral-400 dark:before:bg-white',
                ],
              }}
            >
              <Button
                isIconOnly
                variant="bordered"
                aria-label="Open sidebar"
                onClick={openSidebar}
              >
                <PanelRight className="h-5 w-5 text-gray-300" />
              </Button>
            </Tooltip>
          </>
        )}
        {isCollapsed && (
          <>
            <Button
              isIconOnly
              variant="light"
              aria-label="Open sidebar"
              onClick={openSidebar}
              className={`${isCollapsed ? 'hidden md:block' : ''}`}
            >
              <Image
                width={200}
                height={200}
                src="/isotipo.svg"
                alt="Isotipo"
                className={`w-8 h-8`}
              />
            </Button>

            <Image
              width={200}
              height={200}
              src="/logo-negative.svg"
              alt="Logo"
              className={`w-fit h-8 ${isCollapsed ? 'md:hidden block' : ''}`}
            />
            <Button
              isIconOnly
              variant="bordered"
              aria-label="Open sidebar"
              onClick={openSidebar}
              className={`md:hidden`}
            >
              <PanelRight className="h-5 w-5 text-gray-300" />
            </Button>
          </>
        )}
      </div>

      {/* Main Navigation */}
      <nav className={`h-full flex-col ${isCollapsed ? 'hidden md:flex' : ''}`}>
        <div className="flex flex-col">
          {mainNavItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={`
              flex items-center gap-3 h-12
              px-3 py-3 
              text-gray-300 hover:text-white hover:bg-white/10
              transition-colors
              ${isCollapsed ? 'md:justify-center' : ''}
              ${pathName === item.href ? 'border-l-2 border-pink-200' : ''}
              `}
            >
              <span className={`${isCollapsed ? '' : 'ml-[10px]'}`}>
                {item.icon}
              </span>
              <span
                className={`
                ${isCollapsed ? 'md:hidden' : ''}  
                `}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Button to open the sidebar */}
        {isCollapsed && (
          <div className="hidden md:flex mt-auto justify-center">
            <Tooltip
              placement={'right-end'}
              content={'Abrir panel'}
              // color="secondary"
              classNames={{
                base: [
                  // arrow color
                  'before:bg-neutral-400 dark:before:bg-white',
                ],
              }}
            >
              <Button
                isIconOnly
                variant="bordered"
                aria-label="Open sidebar"
                onClick={openSidebar}
              >
                <PanelRight className="h-5 w-5 text-gray-300" />
              </Button>
            </Tooltip>
          </div>
        )}
      </nav>

      {/* User Profile */}
      <Divider
        className={`my-2 bg-white/20 ${isCollapsed ? 'hidden md:block' : ''}`}
      />
      <div className={`p-4 ${isCollapsed ? 'hidden md:block' : ''}`}>
        <div
          className={`
          flex items-center gap-3
          ${isCollapsed ? 'justify-center' : ''}
        `}
        >
          <Avatar
            src="/isotipo.svg"
            className="w-8 h-8"
            alt={`${session?.user?.firstName} avatar`}
            radius="sm"
            as={Link}
            href="/profile"
          />
          {!isCollapsed && (
            <>
              <div>
                <div className="text-sm">
                  {session?.user?.firstName || 'Nombres'}{' '}
                  {`${session?.user?.lastName?.charAt(0).toUpperCase()}.` ||
                    'A.'}
                </div>
                <div className="text-xs text-gray-400">
                  {session?.user?.email || 'correo@example.com'}
                </div>
              </div>
              <Button
                isIconOnly
                aria-label="Cerrar sesión"
                color="danger"
                className="ml-auto"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <LogOut />
              </Button>
            </>
          )}
        </div>
      </div>
    </aside>
  )
}
