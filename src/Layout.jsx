import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrolToTop'
export default function Layout () {
  return (
    <div className='flex flex-col min-h-screen'>
      <ScrollToTop/>
      <Navbar />
      {/* Page Content */}
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
