export const getAllConsults = async ({ token, dni, role }) => {
  let URL
  if (role === 'doctor') {
    URL = `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/${dni}/records`
  } else {
    URL = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/records`
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
      throw new Error(errorText)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching consults:', error)
    return []
  }
}
