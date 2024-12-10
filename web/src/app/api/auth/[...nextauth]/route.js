import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth/next'

async function login(credentials) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    )

    if (!response.ok) throw new Error('Something went wrong')

    const result = await response.json() // Solo obtenemos el token

    if (!result.token) throw new Error('No token received')

    return result // Devuelve solo los datos del usuario que ha iniciado sesión y el token
  } catch (error) {
    console.error('Error while logging in: ', error)
    throw new Error('Failed to login')
  }
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'admin1@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async credentials => {
        try {
          const user = await login(credentials)
          return user
        } catch (error) {
          console.error(error)
          throw new Error('Failed to login')
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Asigna las propiedades del usuario al token
        token.dni = user.user.dni // DNI del usuario
        token.email = user.user.email // Correo del usuario
        token.firstName = user.user.firstName // Nombre del usuario
        token.lastName = user.user.lastName // Apellido del usuario
        token.roles = user.user.roles // Roles del usuario
        token.accessToken = user.token // Guarda el token recibido del backend
      }
      return token // Devuelve el token actualizado
    },
    async session({ session, token }) {
      if (token) {
        // Asigna las propiedades del token a la sesión
        session.user.dni = token.dni // DNI del usuario en la sesión
        session.user.email = token.email // Correo del usuario en la sesión
        session.user.firstName = token.firstName // Nombre del usuario en la sesión
        session.user.lastName = token.lastName // Apellido del usuario en la sesión
        session.user.roles = token.roles // Roles del usuario en la sesión
        session.accessToken = token.accessToken // Token de acceso en la sesión
      }
      return session // Devuelve la sesión actualizada
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
