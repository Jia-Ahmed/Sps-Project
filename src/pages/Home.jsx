import Seo from '../components/Seo'
import NewsTicker from '../pages/NewsTicker'
import Hero from '../components/Hero'
import ComplianceModal from '../components/ComplianceModal'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const Home = () => {
   const plans = [
    { name: "Basic Plan", price: "$1k/month", path: "/pricing/basic-plan" },
    { name: "Standard Plan", price: "$3k/month", path: "/pricing/standard-plan" },
    { name: "Premium Plan", price: "Custom", path: "/pricing/premium-plan" },
  ];
  return (
    <>
      {/* SEO */}
      <Seo
        title='CSM Vita – Virtual Information Security Officer (vISO) Services'
        description='CSM Vita provides expert vISO services to help organizations achieve and maintain VITA, COV, and regulatory compliance. Our Cognitive Security Manager ensures secure, audit-ready, and sustainable cybersecurity programs.'
        url='https://vita.spsnet.com/csm-vita'
      />
      <Hero
        title='Virtual Information Security Officer (viSO) Services for VITA Security Compliance'
        paragraphs={[
          'Our viSOs provide expert, hands-on cybersecurity leadership to help your organization achieve and maintain compliance with VITA, COV, and other regulatory standards.',
          'Acting as an integrated member of your team, our viSOs guide staff, manage security documentation, lead risk assessments, and support day-to-day security operations—ensuring your systems are protected, your controls are audit-ready, and your security program is both effective and sustainable.'
        ]}
        buttonText='Learn More'
        buttonLink='/about/about_us'
      />

      {/* slider */}
      <NewsTicker />
      <ComplianceModal />
      {/* Pricing cards */}
<section className="bg-gray-50 py-16"> 
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl text-blue-900 md:text-4xl font-bold text-center mb-12">
      Choose Your Plan
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl 
                     transition-all duration-300 cursor-pointer flex flex-col justify-between h-[280px]"
        >
          {/* Title */}
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">
            {plan.name}
          </h3>

          {/* Price */}
          <p className="text-lg text-gray-600 mb-6">{plan.price}</p>

          {/* Button */}
          <Link
            to={plan.path}
            className="mt-auto inline-block text-white font-medium py-3 px-6 rounded-xl 
                       bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 
                       hover:from-blue-900 hover:via-blue-700 hover:to-blue-800 
                       transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default Home
