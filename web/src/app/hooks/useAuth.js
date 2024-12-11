import { useSession } from 'next-auth/react'

const useAuthToken = () => {
  const { data: session, status } = useSession()

  const isLoading = status === 'loading'
  const isAuthenticated = status === 'authenticated'

  // Retorna el token si está autenticado
  const token = isAuthenticated ? session?.accessToken : null

  return { token, isLoading, isAuthenticated }
}

export default useAuthToken
