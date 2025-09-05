import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-white.webp'
import { HiMenu, HiX } from 'react-icons/hi'
import {
  FaShieldAlt,
  FaTags,
  FaInfoCircle,
  FaServicestack
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

import { ComplianceLinks } from './ComplianceRoutes'
import ServiceRoutes from '../components/ServiceRoutes'

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    function handleClickOutside (e) {
      if (!mobileOpen && navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileOpen])

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Compliance',
      icon: <FaShieldAlt className='inline mr-2' />,
      subpages: ComplianceLinks
    },
    {
      name: 'Services',
      icon: <FaServicestack className='inline mr-2 text-lg align-middle' />,
      subpages: ServiceRoutes
    },

    {
      name: 'Pricing',
      icon: <FaTags className='inline mr-2' />,
      subpages: [
        { name: ' Basic Plan', path: '/pricing/basic-plan' },
        { name: 'Standard Plan', path: '/pricing/standard-plan' },
        { name: 'Premium Plan', path: '/pricing/premium-plan' }
      ]
    },
    {
      name: 'About Us',
      icon: <FaInfoCircle className='inline mr-2' />,
      subpages: [
        { name: 'Contact Us', path: '/about/contact_us' },
        { name: 'About Us', path: '/about/about_us' }
      ]
    }
  ]

  return (
    <nav className='bg-gradient-to-r from-slate-900 via-blue-900 to-slate-700  text-white shadow-md sticky top-0 z-50'>
      <div className='w-full px-2 sm:px-4 lg:px-6' ref={navRef}>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              to='/'
              aria-label='Go to homepage'
              className='flex items-center space-x-2'
            >
              <img src={logo} alt='SPS' className='h-10 w-auto' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6 items-center'>
            {navItems.map((item, idx) =>
              item.subpages ? (
                <div
                  key={idx}
                  className='relative'
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`hover:text-gray-200 transition duration-300 px-2 py-1 rounded-lg ${
                      openDropdown === item.name ? 'shadow-md bg-blue-900' : ''
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </button>

                  {/* Animated Dropdown */}
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className='absolute mt-2 bg-white text-black rounded-md shadow-lg border border-gray-200 w-56 z-50'
                      >
                        {/* {item.subpages.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            to={sub.path}
                            className='block px-4 py-2 hover:bg-blue-100   last:border-0 text-sm font-medium'
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.name}
                          </Link>
                        ))} */}
                        {item.subpages.map((sub, subIdx) =>
                          sub.path.startsWith('http') ? (
                            // ✅ External link
                            <a
                              key={subIdx}
                              href={sub.path}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='block px-4 py-2 hover:bg-blue-100 last:border-0 text-sm font-medium'
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sub.name}
                            </a>
                          ) : (
                            // ✅ Internal link
                            <Link
                              key={subIdx}
                              to={sub.path}
                              className='block px-4 py-2 hover:bg-blue-100 last:border-0 text-sm font-medium'
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sub.name}
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.path}
                  className='hover:text-gray-200 transition duration-300 px-2 py-1'
                  onClick={() => setOpenDropdown(null)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Login Button */}
          <div className='hidden md:flex'>
            <Link
              to='/login'
              className='ml-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition duration-300'
            >
              Login to CSM
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls='mobile-menu'
              aria-label={
                mobileOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'
            >
              {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id='mobile-menu'
          className='md:hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-700  px-4 pb-4'
        >
          {navItems.map((item, idx) =>
            item.subpages ? (
              <div key={idx} className='mt-2'>
                <button
                  // onClick={() => toggleDropdown(item.name)}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                  className='w-full text-left py-2 font-medium flex items-center justify-between hover:text-blue-300'
                >
                  <span>
                    {item.icon} {item.name}
                  </span>
                  <span>{openDropdown === item.name ? '▲' : '▼'}</span>
                </button>
                {openDropdown === item.name && (
                  <div className='block '>
                    {/* {item.subpages.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.path}
                        className='block px-4 py-2 text-sm hover:text-blue-300 hover:underline'
                        onClick={() => {
                          setMobileOpen(false)
                          setOpenDropdown(null)
                        }}
                      >
                        {sub.name}
                      </Link>
                    ))} */}
                    {item.subpages.map((sub, subIdx) =>
                      sub.path.startsWith('http') ? (
                        <a
                          key={subIdx}
                          href={sub.path}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='block px-4 py-2 text-sm hover:text-blue-300 hover:underline'
                          onClick={() => {
                            setMobileOpen(false)
                            setOpenDropdown(null)
                          }}
                        >
                          {sub.name}
                        </a>
                      ) : (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          className='block px-4 py-2 text-sm hover:text-blue-300 hover:underline'
                          onClick={() => {
                            setMobileOpen(false)
                            setOpenDropdown(null)
                          }}
                        >
                          {sub.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                to={item.path}
                className='block py-2 hover:text-blue-300'
                onClick={() => {
                  setMobileOpen(false)
                }}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            to='/login'
            className='block mt-3 px-4 py-2  hover:text-blue-300 hover:underline rounded font-semibold'
            onClick={() => {
              setMobileOpen(false)
            }}
          >
            Login to CSM
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
