import { Link } from 'react-router-dom'
import logo from '../assets/logo-white.webp'
import { ComplianceLinks } from "./ComplianceRoutes";

export default function Footer () {
  

  return (
    <footer className='bg-gradient-to-r from-slate-900 via-blue-900 to-slate-700 text-white  shadow-lg mt-auto '>
      <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <Link
            to='/'
            onClick={() => (window.location.href = '/')}
            className='flex items-center space-x-3 mb-4'
          >
            <img src={logo} alt='Logo' className='h-12 w-auto' />
          </Link>
          <p className='text-sm leading-relaxed text-justify'>
            Software Productivity Strategists, Inc. (SPS) delivers AI and
            Cloud-powered industry solutions. With expertise across design,
            development, security, and operations, we build scalable, secure,
            and reliable systems. Our award-winning team includes IBM-certified
            inventors and global competition champions.
          </p>
        </div>
        {/* compliance links */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Compliance</h3>
          <ul className='space-y-2'>
            {ComplianceLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className='hover:text-blue-400 hover:underline'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom bar */}
      <div className='border-t border-white/20  py-3 text-center text-sm text-white'>
        Design & Developed By{' '}
        <a
          className='text-white hover:text-blue-400 font-bold'
          href='https://spsnet.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Software Productivity Strategists, Inc.
        </a>
      </div>
    </footer>
  )
}
