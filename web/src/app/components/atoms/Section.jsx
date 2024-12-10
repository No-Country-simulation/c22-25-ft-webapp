import propTypes from 'prop-types'
export const Section = ({ children, className, id }) => {
  return (
    <section className={`flex flex-col p-4 md:p-8 ${className}`} id={id || ''}>
      {children}
    </section>
  )
}
Section.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  id: propTypes.string,
}
