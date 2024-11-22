import propTypes from 'prop-types'
import { Sidebar } from '@/components/organisms/Sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex" >
      <Sidebar />
      <div className='w-16' /> {/* -> Pushing {children} */}
      <main className="flex-1">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.node,
}