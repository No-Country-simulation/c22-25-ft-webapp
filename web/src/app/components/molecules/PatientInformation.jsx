import propTypes from 'prop-types'
import { getAge } from '@/utils/utils'
import { Chip } from '@nextui-org/react'
const genderColorMap = {
  masculino: 'primary',
  femenino: 'danger',
}
export const PatientInformation = ({ patientInfo }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-cloud-300 text-sm font-bold uppercase">
          {patientInfo?.firstName} {patientInfo?.lastName}
        </span>
        <Chip
          className="capitalize"
          color={genderColorMap[patientInfo?.gender]}
          size="sm"
          variant="flat"
        >
          {patientInfo?.gender}
        </Chip>
        <span className="text-cloud-300 text-sm font-bold uppercase">
          {getAge(patientInfo?.birthday)} años
        </span>
        <span className="text-cloud-300 text-sm font-bold uppercase">
          DNI: {patientInfo?.dni}
        </span>
        <span className="text-cloud-300 text-sm font-bold uppercase">
          Teléfono: {patientInfo?.cellphone}
        </span>
        <span className="text-cloud-300 text-sm font-bold uppercase">
          Correo: {patientInfo?.email}
        </span>
      </div>
      <p>{patientInfo?.address}</p>
    </div>
  )
}

PatientInformation.propTypes = {
  patientInfo: propTypes.object,
}
