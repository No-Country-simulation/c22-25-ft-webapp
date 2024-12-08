import { Section } from '@/components/atoms/Section'
import { BookUser, ClipboardPlus, TextSearch } from 'lucide-react'

const features = [
  {
    title: `Registro Completo de Pacientes`,
    description: `Nuestra plataforma te permite crear perfiles completos para cada paciente, incluyendo datos personales, historial médico, antecedentes familiares, y más. Todo organizado para facilitar tu consulta y mejorar el seguimiento.`,
    icon: (
      <BookUser
        size={150}
        strokeWidth={1}
        className="px-8 bg-cloud-300 text-pink-400 rounded-full mb-4"
      />
    ),
  },
  {
    title: `Historia Clínica Ambulatoria Digital`,
    description: `Registra, visualiza y gestiona las consultas previas, diagnósticos, tratamientos, y resultados de estudios médicos de tus pacientes de forma organizada y fácilmente accesible.`,
    icon: (
      <ClipboardPlus
        size={150}
        strokeWidth={1}
        className="px-8 bg-cloud-300 text-pink-400 rounded-full mb-4"
      />
    ),
  },
  {
    title: `Gestión de Profesionales desde el Panel de Administrador`,
    description: `El panel de administrador te permite gestionar fácilmente a los profesionales de salud dentro de la plataforma. Puedes asignar roles y gestionar usuarios.`,
    icon: (
      <TextSearch
        size={150}
        strokeWidth={1}
        className="px-8 bg-cloud-300 text-pink-400 rounded-full mb-4"
      />
    ),
  },
]

export const FeaturesSection = () => {
  return (
    <Section className="flex flex-col gap-10 lg:p-12 my-10">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-cloud-300">{`Funcionalidades`}</h2>
        <p className="text-cloud-300 max-w-md text-pretty text-center">{`Optimiza la atención y gestión de tus profesionales con nuestra plataforma integral, diseñada para hacer más eficiente cada paso del proceso médico.`}</p>
      </div>
      <ul className="grid md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex flex-col gap-4 items-center">
            {feature.icon}
            <h3 className="text-xl font-bold text-cloud-300 text-center text-wrap">
              {feature.title}
            </h3>
            <p className="text-center text-cloud-300 text-pretty">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
