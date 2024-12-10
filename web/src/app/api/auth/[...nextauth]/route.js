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

    const { token } = await response.json() // Solo obtenemos el token

    if (!token) throw new Error('No token received')

    // ! Esto es momentaneo, porque al tener el token deberíamos tener el usuario al mismo tiempo
    // Hacemos otra llamada para obtener los datos del usuario usando el token
    const userResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users`, // Get de todos los usuarios
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Usamos el token para autenticar la solicitud
        },
      }
    )

    if (!userResponse.ok) throw new Error('Failed to fetch user data')

    const allUsers = await userResponse.json() //! Todos los usuarios

    // Filtramos el usuario que ha iniciado sesión
    const loggedInUser = allUsers.find(user => user.email === credentials.email)

    if (!loggedInUser) throw new Error('User not found')

    return { ...loggedInUser, token } // Devuelve solo los datos del usuario que ha iniciado sesión y el token
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
        token.dni = user.dni // DNI del usuario
        token.email = user.email // Correo del usuario
        token.firstName = user.firstName // Nombre del usuario
        token.lastName = user.lastName // Apellido del usuario
        token.roles = user.roles // Roles del usuario
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
