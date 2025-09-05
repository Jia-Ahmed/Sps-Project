import PricingLayout from '../../components/PricingLayout'
const PremiumPlan = () => {
  return (
    <PricingLayout
      seo={{
        title: 'Premium Plan - VITA SEC-530 Compliance',
        description:
          'Our Premium Plan provides monthly compliance assessments, expert guidance, and audit-ready documentation for your organization.'
      }}
      heroTitle='Customized Cybersecurity and Compliance Solutions'
      heroParagraphs={[
        'Every agency and business in Virginia has unique challenges. With our Premium Service, we deliver a fully tailored approach to achieving and maintaining VITA SEC-530 compliance, aligned with your operational priorities.'
      ]}
      sections={[
        {
          title: 'What’s Included in the Premium Service?',
          heading: 'Bespoke Compliance Support',
          text: 'Work with our team to design a customized compliance strategy tailored to your specific needs, challenges, and timelines.'
        },
        {
          heading: 'Dedicated Security Experts',
          text: 'Collaborate with a team of cybersecurity experts who will work closely with your organization to address critical VITA SEC-530 compliance areas, including:',
          items: [
            'Security Policy Management for IT and OT assets',
            'Vulnerability Assessments and Risk Mitigation',
            'Monitoring, Incident Response, and Reporting'
          ]
        },
        {
          heading: 'Flexible Engagements',
          text: 'Choose how you want to work with us—whether it’s ongoing compliance support, focused improvement projects, or strategic advisory services.'
        },

        {
          title: 'How You Benefits',

          items: [
            'Get a clear understanding of your compliance status.',
            'Develop confidence in presenting compliance evidence to VITA auditors.',
            'Begin improving your security policies and controls with actionable insights.'
          ]
        }
      ]}
    />
  )
}
export default PremiumPlan
