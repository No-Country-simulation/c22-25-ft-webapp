export const getPatientByDNI = async ({ token, doctorDni, patientDni }) => {
  if (!token) {
    console.error('No se proporcionó un token de autorización.')
    return null
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/${doctorDni}/patients/${patientDni}`,
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
      throw new Error(`Failed to fetch patient: ${res.status}`)
    }

    if (res.status === 204) return null

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching patient:', error)
    return null
  }
}

export const getAllPatients = async ({ token, doctorDni, rol }) => {
  if (!token) {
    console.error('No se proporcionó un token de autorización.')
    return []
  }

  let URL
  if (rol === 'doctor') {
    URL = `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/${doctorDni}/patients`
  } else {
    URL = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/patients`
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
