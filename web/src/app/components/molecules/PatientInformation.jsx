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
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <span className="text-cloud-300 text-sm font-bold uppercase">
            {patientInfo?.firstName} {patientInfo?.lastName}
          </span>
          <span className="text-cloud-300 text-sm font-bold">
            DNI: {patientInfo?.dni}
          </span>
        </div>

        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <span className="text-cloud-300 text-sm font-bold">
            {getAge(patientInfo?.birthday)} años
          </span>
          <Chip
            className="capitalize"
            color={genderColorMap[patientInfo?.gender]}
            size="sm"
            variant="flat"
          >
            {patientInfo?.gender}
          </Chip>
        </div>

        <span className="text-cloud-300 text-sm font-bold">
          TELÉFONO: {patientInfo?.cellphone}
        </span>
        <span className="text-cloud-300 text-sm font-bold">
          CORREO: {patientInfo?.email}
        </span>
        <span className="text-cloud-300 text-sm font-bold">
          DOMICILIO: {patientInfo?.address}
        </span>
      </div>
    </div>
  )
}

PatientInformation.propTypes = {
  patientInfo: propTypes.object,
}
