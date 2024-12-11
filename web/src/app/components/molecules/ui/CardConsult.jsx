'use client'
import propTypes from 'prop-types'
import { format } from '@formkit/tempo'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from '@nextui-org/react'

const getChipData = date => {
  const today = new Date()
  const timeDifference = date - today // Diferencia en milisegundos
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) // Convertir a días

  if (daysDifference < 0) {
    // Fecha ya ha pasado
    return { color: 'success', label: 'Pasado' }
  } else if (daysDifference < 7) {
    return { color: 'danger', label: 'Próximamente' }
  } else if (daysDifference < 30) {
    return { color: 'warning', label: 'Pronto' }
  } else {
    return { color: 'primary', label: 'Lejos' }
  }
}
export const CardConsult = ({ reason, date, description }) => {
  const { color: colorTag, label: labelTag } = getChipData(new Date(date))

  return (
    <Card className="w-full border shadow-none">
      <CardHeader>
        <span className="text-cloud-300 text-sm font-bold uppercase">
          {reason}
        </span>
      </CardHeader>
      <Divider />
      {description && (
        <CardBody>
          <p>{description}</p>
        </CardBody>
      )}
      <CardFooter className="w-full flex flex-row items-center justify-between">
        <span className="text-sm font-bold">
          {format(date, 'MMMM D, YYYY', 'es')}
        </span>
        <Chip color={colorTag}>{labelTag}</Chip>
      </CardFooter>
    </Card>
  )
}

CardConsult.propTypes = {
  reason: propTypes.string,
  date: propTypes.string,
  description: propTypes.string,
}
