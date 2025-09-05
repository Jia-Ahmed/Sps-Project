import Hero from './Hero'
import Seo from './Seo'
import { FaCheckSquare } from 'react-icons/fa'
import { useState } from 'react'

const PricingLayout = ({
  seo,
  heroTitle,
  heroParagraphs = [],
  sections = []
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    date: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // ✅ Date range setup
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()

  const formatDate = date => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }

  const minDate = formatDate(today) // today
  const maxDate = formatDate(new Date(year, month + 1, 0)) // last day of this month

  // ✅ Input change handler
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value.trimStart()
    })
  }

  // ✅ Validation rules
  const validate = () => {
    let newErrors = {}

    if (!formData.name) {
      newErrors.name = 'Name is required.'
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters.'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.'
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.'
    } else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone should only contain 7-15 digits.'
    }

    if (!formData.company) newErrors.company = 'Company is required.'

    if (!formData.role) {
      newErrors.role = 'Role is required.'
    } else if (!/^[A-Za-z\s]+$/.test(formData.role)) {
      newErrors.role = 'Role should only contain letters.'
    }

    if (!formData.date) {
      newErrors.date = 'Please pick a date.'
    } else if (formData.date < minDate || formData.date > maxDate) {
      newErrors.date = `Date must be between ${minDate} and ${maxDate}.`
    }

    return newErrors
  }

  // ✅ Form submit
  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      const safeData = {
        ...formData,
        name: formData.name.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
        role: formData.role.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      }

      localStorage.setItem('pricingFormData', JSON.stringify(safeData))

      console.log('Form submitted:', safeData)
      alert('✅ Form submitted successfully! Data saved locally.')

      setSubmitted(true)
    }
  }

  return (
    <div>
      {seo && <Seo {...seo} />}
      <Hero title={heroTitle} paragraphs={heroParagraphs} />

      <div className='max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12'>
        {/* Left Content */}
        <div className='space-y-8'>
          {sections.map((section, i) => (
            <div
              key={i}
              className={`rounded-xl shadow-md p-6 transition-all duration-300 ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {/* Section Title */}
              {section.title && (
                <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                  {section.title}
                </h2>
              )}
              {/* Secondary Heading */}
              {section.heading && (
                <h3 className='text-lg font-semibold text-gray-700 mb-2'>
                  {section.heading}
                </h3>
              )}

              {/* Section text */}
              {section.text && (
                <p className='text-gray-700 mb-4'>{section.text}</p>
              )}

              {/* Section List */}
              {section.items && section.items.length > 0 && (
                <ul className='space-y-3'>
                  {section.items.map((item, j) => (
                    <li key={j} className='flex items-start space-x-3'>
                      <FaCheckSquare className='text-blue-500 w-5 h-5 mt-1' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right Form */}
        <div>
          <h2 className='text-xl font-bold mb-4 '>
            Take the first step toward VITA SEC-530 compliance today.
          </h2>

          {submitted ? (
            <p className='text-green-600 font-semibold'>
              ✅ Thank you! We’ll contact you soon.
            </p>
          ) : (
            <form className='space-y-4' onSubmit={handleSubmit} noValidate>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className='w-full p-3 border rounded'
                autoComplete='name'
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name}</p>
              )}

              <div className='grid grid-cols-2 gap-4 '>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full p-3 border rounded'
                    autoComplete='email'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm'>{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full p-3 border rounded'
                    autoComplete='tel'
                  />
                  {errors.phone && (
                    <p className='text-red-500 text-sm'>{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <input
                    type='text'
                    name='company'
                    placeholder='Company / Organization'
                    value={formData.company}
                    onChange={handleChange}
                    className='w-full p-3 border rounded'
                    autoComplete='organization'
                  />
                  {errors.company && (
                    <p className='text-red-500 text-sm'>{errors.company}</p>
                  )}
                </div>

                <div>
                  <input
                    type='text'
                    name='role'
                    placeholder='Job Title / Role'
                    value={formData.role}
                    onChange={handleChange}
                    className='w-full p-3 border rounded'
                    autoComplete='organization-title'
                  />
                  {errors.role && (
                    <p className='text-red-500 text-sm'>{errors.role}</p>
                  )}
                </div>
              </div>

              <label className='block font-medium'>
                Which date works best for you to meet with our consultant?
              </label>
              <input
                type='date'
                name='date'
                value={formData.date}
                min={minDate}
                max={maxDate}
                onChange={handleChange}
                className='w-full p-3 border rounded'
              />
              {errors.date && (
                <p className='text-red-500 text-sm'>{errors.date}</p>
              )}

              <button
                type='submit'
                className='w-full  bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 
                       hover:from-blue-900 hover:via-blue-700 hover:to-blue-800 
                       transition-all duration-300 text-white py-3 rounded '
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingLayout
