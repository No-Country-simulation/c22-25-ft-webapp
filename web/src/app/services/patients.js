export const getAllPatients = async token => {
  if (!token) {
    console.error('No se proporcionó un token de autorización.')
    return []
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/patients`,
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
      throw new Error(`Failed to fetch patients: ${res.status}`)
    }

    if (res.status === 204) return []

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching patients:', error)
    return []
  }
}
