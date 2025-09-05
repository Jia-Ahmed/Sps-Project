import PricingLayout from '../../components/PricingLayout'
const BasicPlan = () => {
  return (
    <PricingLayout
      seo={{
        title: 'Basic Plan - VITA SEC-530 Compliance',
        description:
          'Our Basic  Plan provides monthly compliance assessments, expert guidance, and audit-ready documentation for your organization.'
      }}
      heroTitle='Get Started on Your VITA SEC-530 Compliance'
      heroParagraphs={[
        'At SPS, we help organizations in Virginia meet cybersecurity standards outlined in VITA SEC-530. Our Basic Service is designed to provide the foundation for establishing compliance and strengthening security practices.'
      ]}
      sections={[
        {
          title: 'What’s Included in the Basic Service?',
          heading: 'Monthly VITA SEC-530 Compliance Assessment',
          text: "Our expert compliance consultant will meet with your team once a month to assess your organization's current compliance status."
        },
        {
          heading: 'Recommendations to Improve Compliance',
          text: 'You’ll receive detailed recommendations tailored to your specific needs, including optional services to improve your cybersecurity posture.'
        },
        {
          heading: 'Artifact Creation for VITA Audits',
          text: 'We’ll help you create essential artifacts and documentation that can be presented to VITA auditors, ensuring transparency and readiness during evaluations.'
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
export default BasicPlan
