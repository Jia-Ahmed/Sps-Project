import PricingLayout from '../../components/PricingLayout'
const StandardPlan = () => {
  return (
    <PricingLayout
      seo={{
        title: 'standard Plan - VITA SEC-530 Compliance',
        description:
          'Our Standard Plan provides monthly compliance assessments, expert guidance, and audit-ready documentation for organization.'
      }}
      heroTitle='Ongoing Support for VITA SEC-530 Compliance'
      heroParagraphs={[
        'Our Standard Service is ideal for organizations that require regular guidance and proactive measures to remain compliant with VITA SEC-530 requirements, ensuring continuous cybersecurity readiness.'
      ]}
      sections={[
        {
          title: 'What’s Included in the Standard  Service?',
          heading: 'Weekly Compliance Sessions',
          text: 'Our VITA SEC-530 compliance consultant will meet with your team four times a month to review progress, address challenges, and guide you toward compliance.'
        },
        {
          heading: 'Detailed Compliance Roadmaps',
          text: 'Get a comprehensive plan to enhance your cybersecurity posture, complete with timelines and actionable tasks.'
        },
        {
          heading: 'Artifact and Documentation Support',
          text: 'We ll work with you to maintain detailed, audit-ready documentation to demonstrate compliance.'
        },

        {
          title: 'Enhanced Advisory Services',
          text: 'Get additional insights and advice on:',

          items: [
            'Security Policy Management',
            'Risk and Vulnerability Assessments',
            'Awareness and Training'
          ]
        },
        {
          title: 'How You Benefit:',
          items: [
            'Stay on top of compliance with regular, dedicated support.',
            'Minimize risk with improved IT and OT security controls.',
            'Build a strong cybersecurity framework for audits and beyond.'
          ]
        }
      ]}
    />
  )
}
export default StandardPlan
