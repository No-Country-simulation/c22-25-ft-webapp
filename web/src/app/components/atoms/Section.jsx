import propTypes from 'prop-types'
export const Section = ({ children, className }) => {
  return (
    <section className={`flex flex-col p-8 ${className}`}>
      {children}
    </section>
  )
};
Section.propTypes = {
  children: propTypes.node,
  className: propTypes.string
}