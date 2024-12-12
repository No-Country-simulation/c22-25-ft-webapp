export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export const getAge = birthday => {
  // Convertir la fecha de cumpleaños de formato DD/MM/YYYY a un objeto Date
  const [day, month, year] = birthday?.split('-').map(Number)
  const birthDate = new Date(year, month - 1, day) // Los meses en JavaScript son 0-indexados

  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()

  const m = today.getMonth() - birthDate.getMonth()

  // Ajustar la edad si el cumpleaños aún no ha ocurrido este año
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
}

export const formatDateToBackend = dateString => {
  const [year, month, day] = dateString.split('-')
  return `${day}-${month}-${year}`
}
