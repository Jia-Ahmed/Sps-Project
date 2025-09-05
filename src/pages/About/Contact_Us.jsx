import { useState } from 'react'
import Hero from '../../components/Hero'

const Contact_Us = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    meetingDate: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company/Organization is required'
    }

    // Phone validation (matches format like 923001234567)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone format is invalid (e.g., 923001234567)'
    }

    // Job title validation
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job Title/Role is required'
    }

    // Date validation
    if (!formData.meetingDate.trim()) {
      newErrors.meetingDate = 'Meeting date is required'
    } else {
      const selectedDate = new Date(formData.meetingDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (selectedDate < today) {
        newErrors.meetingDate = 'Please select a future date'
      }
    }

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formErrors = validateForm()

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      // Here you would typically send the data to your backend
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <>
      <Hero
        title='Helping State of Virginia with VITA SEC-530 Compliance'
        paragraphs={[
          'Need guidance on achieving VITA SEC-530 Compliance? Our experts provide tailored support and solutions to help Virginia state agencies meet cybersecurity and compliance requirements effectively.'
        ]}
      />

      <div className=' bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-3xl font-bold text-blue-900 mb-4'>
              VITA SEC-530 Compliance Assistance
            </h1>
            <p className='text-lg text-gray-700 max-w-3xl mx-auto'>
              Reach out to us for expert assistance in meeting VITA SEC-530
              compliance requirements for Virginia state agencies.
            </p>
          </div>

          <div className='flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden'>
            {/* Contact Form */}
            <div className='w-full lg:w-2/3 p-8'>
              {isSubmitted ? (
                <div className='text-center py-12'>
                  <div className='bg-green-100 text-green-700 p-4 rounded-lg mb-6'>
                    <svg
                      className='w-12 h-12 mx-auto mb-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                    <h3 className='text-xl font-semibold mb-2'>
                      Thank You for Your Submission!
                    </h3>
                    <p>
                      Our consultant will contact you shortly to confirm your
                      meeting time.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='Enter your full name'
                    />
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-600'>{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='Enter your email address'
                    />
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Company / Organization
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='Enter your company or organization'
                    />
                    {errors.company && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Phone (e.g. 923001234567)
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='923001234567'
                    />
                    {errors.phone && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='jobTitle'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Job Title / Role
                    </label>
                    <input
                      type='text'
                      id='jobTitle'
                      name='jobTitle'
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.jobTitle ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='Enter your job title or role'
                    />
                    {errors.jobTitle && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.jobTitle}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='meetingDate'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      What date and time work best for you to meet with our
                      consultant?
                    </label>
                    <input
                      type='datetime-local'
                      id='meetingDate'
                      name='meetingDate'
                      value={formData.meetingDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.meetingDate
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                    />
                    {errors.meetingDate && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.meetingDate}
                      </p>
                    )}
                  </div>

                  <button
                    type='submit'
                    className='w-full  text-white py-3 px-4 rounded-md  bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 
                       hover:from-blue-900 hover:via-blue-700 hover:to-blue-800 
                        duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium'
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div
              className='w-full lg:w-1/3  bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 
                       hover:from-blue-900 hover:via-blue-700 hover:to-blue-800 
                       transition-all duration-300 text-white p-8'
            >
              <h2 className='text-xl font-semibold mb-6'>Contact Info</h2>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <svg
                    className='w-5 h-5 mt-1 mr-4 flex-shrink-0'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    ></path>
                  </svg>
                  <div>
                    <h3 className='font-medium mb-1'>Call Us</h3>
                    <p className='text-blue-200'>+301-337-2290</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <svg
                    className='w-5 h-5 mt-1 mr-4 flex-shrink-0'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    ></path>
                  </svg>
                  <div>
                    <h3 className='font-medium mb-1'>Email</h3>
                    <p className='text-blue-200'>support@spsnet.com</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <svg
                    className='w-5 h-5 mt-1 mr-4 flex-shrink-0'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                  <div>
                    <h3 className='font-medium mb-1'>Address</h3>
                    <p className='text-blue-200'>
                      2400 Research Blvd, Suite 115,
                      <br />
                      Rockville, MD 20850 USA.
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-10'>
                <h3 className='font-medium mb-4'>Follow Us</h3>
                <div className='flex space-x-4'>
                  <a
                    href='https://www.twitter.com'
                    className='text-white hover:text-blue-200 transition-colors'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='https://www.twitter.com'
                    >
                      <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                    </svg>
                  </a>
                  <a
                    href='https://www.instagram.com/'
                    className='text-white hover:text-blue-200 transition-colors'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='https://www.instagram.com/'
                    >
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact_Us
