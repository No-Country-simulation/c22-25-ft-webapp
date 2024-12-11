import propTypes from 'prop-types'
import { Section } from '@/components/atoms/Section'
import { BasicInformation } from '@/components/molecules/BasicInformation'
import { Consults } from '@/components/molecules/Consults'
import { PatientInformation } from '@/components/molecules/PatientInformation'
import { getPatientByDNI } from '@/services/patients'
import { getServerSession } from 'next-auth'
import { authOptions } from '#/src/app/api/auth/[...nextauth]/route'

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
  //     firstName: <string>,
  //     lastName: <string>,
  //     gender: <string>,
  //     birthday: <string>,
  //     address: <string>,
  //     cellphone: <number>,
  //     email: '<string>'
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

  const consults = [
    {
      id: 1,
      reason: 'Dolor de estomago',
      date: '2025-06-06',
    },
    {
      id: 2,
      reason: 'Dolor de cabeza',
      date: '2024-12-20',
    },
    {
      id: 3,
      reason: 'Dolor de cabeza',
      date: '2024-06-06',
      description:
        'Consulta realizada para evaluar un dolor persistente en la cabeza. Se diagnosticó tensión y se recomendaron técnicas de relajación y tratamiento para aliviar los síntomas experimentados.',
    },
    {
      id: 4,
      reason: 'Dolor de cabeza',
      date: '2024-12-10',
    },
  ]

  const today = new Date()

  // Dividir las consultas
  const pastConsults = consults.filter(
    consult => new Date(consult.date) < today
  )
  const upcomingConsults = consults.filter(
    consult => new Date(consult.date) >= today
  )

  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-cloud-300">
        Paciente
      </h1>

      <div
        className={
          'flex flex-col lg:grid lg:grid-cols-2 gap-6 w-full overflow-hidden'
        }
      >
        {/* Primera columna */}
        <div className="flex flex-col gap-6 w-full">
          <PatientInformation patientInfo={patientInfo.patient} />
          <BasicInformation
          // dni={dni}
          />
        </div>

        {/* Segunda columna */}
        <div className="flex flex-col gap-6 w-full">
          {upcomingConsults.length > 0 && (
            <Consults title="Consultas" consults={upcomingConsults} />
          )}
          {pastConsults.length > 0 && (
            <Consults title="Consultas pasadas" consults={pastConsults} />
          )}
        </div>
      </div>
    </Section>
  )
}

PatientPage.propTypes = {
  params: propTypes.object,
}
