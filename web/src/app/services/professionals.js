export const getAllProfessionals = async token => {
  if (!token) {
    console.error('No se proporcionó un token de autorización.')
    return []
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Error response:', res.status, errorText)
      throw new Error(`Failed to fetch professionals: ${res.status}`)
    }

    if (res.status === 204) return []

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching professionals:', error)
    return []
  }
}
