import propTypes from 'prop-types'
export const WrapperForm = ({ children, className, title = "</WrapperForm>" }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h2 className="text-4xl font-bold text-cloud-300 text-center mb-6">{title}</h2>
      {children}
    </div>
  )
};
WrapperForm.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  title: propTypes.string,
}