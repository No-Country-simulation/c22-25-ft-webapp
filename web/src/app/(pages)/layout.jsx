import propTypes from 'prop-types'
import { Sidebar } from '@/components/organisms/Sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row" >
      <Sidebar />
      <div className='h-16 md:w-16 md:h-screen' /> {/* -> Pushing {children} */}
      <main className="flex-1">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.node,
}