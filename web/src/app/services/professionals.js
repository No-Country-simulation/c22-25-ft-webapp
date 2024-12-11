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

export const updateProfessional = async ({ token, professional }) => {
  if (!token) {
    console.error('No se proporcionó un token de autorización.')
    return null
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/user/${professional.dni}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(professional),
      }
    )

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Error response:', res.status, errorText)
      throw new Error(`Failed to update professional: ${res.status}`)
    }

    if (res.status === 204) return null

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error updating professional:', error)
    return null
  }
}
