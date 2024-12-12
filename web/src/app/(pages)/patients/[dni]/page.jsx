import propTypes from 'prop-types'
import { Section } from '@/components/atoms/Section'
import { BasicInformation } from '@/components/molecules/BasicInformation'
import { PatientInformation } from '@/components/molecules/PatientInformation'
import { getPatientByDNI } from '@/services/patients'
import { getServerSession } from 'next-auth'
import { authOptions } from '#/src/app/api/auth/[...nextauth]/route'
import { NewConsult } from '@/components/molecules/NewConsult'
import { CardConsult } from '@/components/molecules/ui/CardConsult'

export default async function PatientPage({ params: { dni } }) {
  const session = await getServerSession(authOptions)
  const token = session?.accessToken
  const doctorDni = session?.user?.dni
  const patientInfo = await getPatientByDNI({
    token,
    doctorDni,
    patientDni: dni,
  })

  // {
  //   patient: {
  //     dni: <string>,
  //     ......
  //   },
  //   clinicalRecordList: [
  //     {
  //       recordId: 4,
  //       date: '2025-01-01T04:00:00.000+00:00',
  //       status: 'pending',
  //       consultationRecord: [{
  //             consultationRecordId: null,
  //             reason: null,
  //             currentIllness: null,
  //             personalBackground: null,
  //             familiarBackground: null,
  //             physicalExam: null,
  //             dx: null,
  //             treatment: null,
  //             evolution: null,
  //             diagnosticTests: null,
  //             medProcedures: null,
  //             informedConsent: null,
  //             aditionalInformation: null
  //       }]
  //     }
  //   ]
  // }

  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Paciente
      </h1>

      <div className={'flex flex-col lg:grid lg:grid-cols-2 gap-6 w-full'}>
        {/* Primera columna */}
        <div className="flex flex-col gap-6 w-full">
          <PatientInformation patientInfo={patientInfo?.patient} />
          <BasicInformation
          // dni={dni}
          />
        </div>

        {/* Segunda columna */}
        <div className="flex flex-col gap-6 w-full">
          <NewConsult patientDni={dni} />

          <div className="w-full flex flex-col gap-2">
            <h3 className="text-cloud-300 text-sm font-bold uppercase">
              Consultas
            </h3>

            <div className="flex flex-col gap-2">
              {patientInfo?.clinicalRecordList?.map(consult => (
                <CardConsult key={consult.recordId} consult={consult} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

PatientPage.propTypes = {
  params: propTypes.object,
}
