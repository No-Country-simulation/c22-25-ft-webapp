export const getUserByDni = async ({ token, dni, rol }) => {
  let URL

  if (rol === 'doctor') {
    URL = `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/${dni}`
  } else {
    URL = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/user/${dni}`
  }

  try {
    const res = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (!res.ok) {
      const errorText = await res.text()
      console.error('Error response:', res.status, errorText)
      throw new Error(`Failed to fetch user: ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}
