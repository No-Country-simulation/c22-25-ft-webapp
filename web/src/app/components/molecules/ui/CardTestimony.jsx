import Image from 'next/image'
import propTypes from 'prop-types'

const TestimonyAvatar = ({
  name = 'John Doe',
  role = 'Gerente de Sistemas',
  srcAvatar,
}) => {
  return (
    <div className="flex items-center gap-4 bg-sand-300 px-4 py-6">
      <Image
        className="w-10 h-10 rounded-full"
        width={100}
        height={100}
        src={srcAvatar}
        alt={`${name} Avatar`}
      />
      <div className="flex flex-col">
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-sm text-cloud-300 font-bold">{role}</p>
      </div>
    </div>
  )
}

export const CardTestimony = ({ className, testimony }) => {
  return (
    <div
      className={`flex flex-col gap-8 border p-6 h-fit bg-sand-200 ${className}`}
    >
      <p className="leading-relaxed">{testimony.testimony}</p>
      <TestimonyAvatar
        name={testimony.user.name}
        role={testimony.user.role}
        srcAvatar={testimony.user.srcAvatar}
      />
    </div>
  )
}
CardTestimony.propTypes = {
  className: propTypes.string,
  testimony: propTypes.object,
}

TestimonyAvatar.propTypes = {
  name: propTypes.string,
  role: propTypes.string,
  srcAvatar: propTypes.string,
}
