// src/components/PageLayout.jsx
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import { FaCheckSquare } from 'react-icons/fa'

const PageLayout = ({ seo, heroTitle, heroParagraphs = [], sections = [] }) => {
  return (
    <div>
      {/* ===== SEO ===== */}
      {seo && <Seo {...seo} />}

      {/* ===== Hero Section ===== */}
      <Hero title={heroTitle} paragraphs={heroParagraphs} />

      {/* ===== Dynamic Sections (Card Layout) ===== */}
      <div className='max-w-6xl mx-auto px-6 py-12 space-y-8'>
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`rounded-xl    text-justify shadow-md p-8 hover:shadow-xl transition-all duration-300 
              ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div
              className={`grid gap-8 items-center ${
                section.imageSrc ? 'md:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {/* Left Column - Text */}
              <div>
                {section.title && (
                  <h2 className='text-2xl font-bold mb-4 text-gray-900'>{section.title}</h2>
                )}

                {section.text && <p className='mb-4 text-gray-700'>{section.text}</p>}

                {/* ✅ Quote Support */}
                {section.quote && (
                  <blockquote className='mt-4 pl-4 border-l-4 border-blue-500 text-gray-600'>
                    <p className='italic'> {section.quote} </p>
                    {section.quoteSource && (
                      <footer className='mt-2 font-semibold text-blue-600'>
                        — {section.quoteSource}
                      </footer>
                    )}
                  </blockquote>
                )}

                {/* List */}
                {section.list && section.list.length > 0 && (
                  <ul className='list-disc pl-6 space-y-2 mt-4 text-gray-700'>
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {/* ✅ List with Icons */}
                {section.listWithIcons && section.listWithIcons.length > 0 && (
                  <ul className='space-y-4 text-gray-700 mt-4'>
                    {section.listWithIcons.map((item, i) => (
                      <li key={i} className='flex items-start space-x-3'>
                        <FaCheckSquare className='text-blue-500 w-6 h-6 flex-shrink-0 mt-1' />
                        {item.description ? (
                          <span>
                            <strong>{item.title}:</strong> {item.description}
                          </span>
                        ) : (
                          <span className='font-normal'>{item.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right Column - Image */}
              {section.imageSrc && (
                <div className='flex justify-center'>
                  <img
                    src={section.imageSrc}
                     alt={section.imageAlt || section.title || 'Page image'}
                    className={`rounded-lg shadow-md w-full ${
                      section.imageFit === "contain"
                        ? "h-auto object-contain"
                        : "h-[300px] md:h-[350px] object-cover"
                    }`}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageLayout
