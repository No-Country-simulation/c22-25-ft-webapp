import propTypes from 'prop-types'
import { CardConsult } from './ui/CardConsult'
export const Consults = ({ consults, title = 'Consultas' }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="text-cloud-300 text-sm font-bold uppercase">{title}</h3>
      {consults.length > 0 &&
        consults.map(consult => (
          <CardConsult
            key={consult.id}
            reason={consult.reason}
            date={consult.date}
            description={consult.description}
          />
        ))}
    </div>
  )
}

Consults.propTypes = {
  title: propTypes.string,
  consults: propTypes.array,
}
