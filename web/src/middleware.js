import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/professionals/:path*',
    '/patients/:path*',
    '/profile/:path*',
  ],
}

export async function middleware(request) {
  const token = await getToken({ req: request })

  const protectedRoutes = ['/users', '/professionals', '/patients', '/profile']

  // Verificar si la ruta solicitada es una ruta protegida
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  // Si la ruta es protegida y no hay token, redirigir a login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (
    (token && request.nextUrl.pathname.startsWith('/login')) ||
    request.nextUrl.pathname.startsWith('/register')
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Lógica de acceso según el rol del usuario
  if (token) {
    const userRole = token.roles[0].name // Asumiendo que 'rol' es un string como 'Administrador', 'Desarrollador', etc.
    // const userStatus = token.status -> En caso que el usuario sea deshabilitado; pero esto no está implementado

    // Permitir acceso a todos los paths para X y X
    // if (userRole === 'X' || userRole === 'Y') {
    //   return NextResponse.next()
    // }

    // Restringir acceso a /professionals
    if (
      userRole === 'doctor' &&
      request.nextUrl.pathname.startsWith('/professionals')
      // || request.nextUrl.pathname.startsWith('/otroPathDeAdministradores')
    ) {
      return NextResponse.redirect(new URL('/dashboard', request.url)) // Redirigir a la página de inicio
    }
  }

  return NextResponse.next() // Continúa a la siguiente middleware o a la ruta solicitada
}
