import { Section } from '@/components/atoms/Section'
import { CardTestimony } from '../molecules/ui/CardTestimony'

const testimonies = [
  {
    id: 1,
    testimony: `"Desde que implementamos esta plataforma, hemos mejorado significativamente la eficiencia en el manejo de pacientes. La capacidad de acceder rápidamente a los historiales médicos, junto con la gestión simplificada de citas y turnos, nos ha permitido dedicar más tiempo a la atención directa."`,
    user: {
      name: 'Dr. Laura Pérez',
      role: 'Directora Médica',
      srcAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    id: 2,
    testimony: `"El uso de esta plataforma ha transformado por completo la forma en que gestionamos la información de nuestros pacientes. No solo ha facilitado el seguimiento de los historiales clínicos, sino que también ha permitido una mejor integración con otros sistemas hospitalarios. Además, la plataforma es intuitiva, lo que nos ha permitido entrenar rápidamente a nuestro personal para maximizar su uso."`,
    user: {
      name: 'Carlos Martínez',
      role: 'Gerente de Sistemas',
      srcAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  },
  {
    id: 3,
    testimony: `"Implementar esta plataforma ha sido una de las mejores decisiones que hemos tomado. La funcionalidad para gestionar tanto los registros médicos como las citas, junto con el seguimiento de la evolución de cada paciente, ha mejorado nuestra capacidad de brindar atención personalizada y continua. Estamos más que satisfechos con el impacto que ha tenido en nuestra institución."`,
    user: {
      name: 'Dr. Roberto Gomez',
      role: 'Director Clínico',
      srcAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
]

export const TestimonialsSection = () => {
  return (
    <Section className={'py-12 lg:py-16 mt-10'}>
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-cloud-300 text-center">{`Testimonios`}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:mx-[100px]">
        {testimonies.map(testimony => {
          return <CardTestimony key={testimony.id} testimony={testimony} />
        })}
      </div>
    </Section>
  )
}
