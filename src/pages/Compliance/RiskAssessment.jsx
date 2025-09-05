import PageLayout from '../../components/PageLayout'
import risk from '../../assets/risk.webp'
const RiskAssessment = () => {
  return (
    <PageLayout
      seo={{
        title: 'Risk Assessment',
        description:
          'SPS Risk Assessment identifies potential threats, evaluates vulnerabilities, and prioritizes mitigation strategies to protect business operations and data.'
      }}
      heroTitle='Risk Assessment'
      heroParagraphs={[
        'In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:'
      ]}
      sections={[
        {
          title: 'Risk Assessment',
          text: 'Risk assessment is the foundation of information security management. Agencies are required to identify threats, vulnerabilities, and potential impacts to ensure appropriate security controls are in place. This process aligns business objectives with security measures, reducing the likelihood and severity of incidents.',
          quote:
            '“Agencies must conduct regular risk assessments to identify, evaluate, and prioritize risks to IT systems and data, ensuring decisions are based on business impact and security requirements.”',
          quoteSource: 'SEC 530 Standard',
          imageSrc: risk,
          imageAlt: 'RiskAssessment'
        },
        {
          title: 'Key Components of Risk Assessment',
          listWithIcons: [
            {
              title: 'Asset Identification',
              description: 'Recognize critical systems, applications, and data.'
            },
            {
              title: 'Threat Identification',
              description:
                'Determine potential sources of harm (internal or external).'
            },
            {
              title: 'Vulnerability Analysis',
              description: 'Identify weaknesses that could be exploited.'
            },
            {
              title: 'Impact Assessment',
              description:
                'Evaluate the potential business, legal, and operational impact.'
            },
            {
              title: 'Risk Determination',
              description:
                'Measure likelihood and severity to assign a risk level.'
            }
          ]
        },
        {
          title: ' Risk Assessment Process',
          listWithIcons: [
            {
              title: 'Preparation',
              description:
                'Define scope, stakeholders, and methodology for assessment.'
            },
            {
              title: 'Data Collection',
              description:
                'Gather information about assets, threats, and vulnerabilities.'
            },
            {
              title: 'Analysis',
              description:
                ' Evaluate risk likelihood and impact using qualitative or quantitative methods.'
            },
            {
              title: 'Mitigation Planning',
              description:
                'Develop risk treatment strategies: avoid, transfer, mitigate, or accept risk.'
            },
            {
              title: 'Documentation & Review',
              description:
                'Record results and ensure assessments are reviewed periodically.'
            }
          ]
        },
        {
          title: 'Why Risk Assessment Matters',
          text: 'By systematically identifying and analyzing risks, agencies can focus resources on the most critical threats, reduce exposure to cyberattacks, and ensure compliance with legal and regulatory obligations. Risk assessments also strengthen incident response planning and improve overall resilience.'
        }
      ]}
    />
  )
}
export default RiskAssessment
