import v1 from '../../assets/v1.webp'
import PageLayout from '../../components/PageLayout'
import v3 from '../../assets/v3.webp'
import vita6 from '../../assets/vita6.webp'

const About = () => {
  return (
    <PageLayout
      seo={{
        title: 'Virtual Information Security Officer (vISO) Services',
        description:
          'CSM Vita provides expert vISO services to help organizations achieve and maintain VITA, COV, and regulatory compliance. Our Cognitive Security Manager ensures secure, audit-ready, and sustainable cybersecurity programs.'
      }}
      heroTitle='Virtual Information Security Officer (vISO) Services'
      heroParagraphs={[
        'A Virtual Information Security Officer (vISO) provides expert cybersecurity leadership and hands-on support to help your organization meet compliance requirements and strengthen its overall security posture. Working as an extension of your team, the vISO guides employees, fills capability gaps, and performs the essential security tasks needed to maintain compliance with Commonwealth of Virginia (COV), VITA, and other applicable standards.'
      ]}
      sections={[
        {
          title: 'How a vISO Supports Your Team',
          text: 'Policy & Procedure Development  ',
          listWithIcons: [
            {
              title:
                'Develop and maintain security policies aligned with all 18 control families'
            },
            { title: 'Maintain and update Acceptable Use policies' },
            {
              title:
                'Create clear, actionable procedures for approximately 1,300 security controls'
            },
            {
              title:
                'Collaborate with internal staff to ensure documentation reflects real-world practices'
            }
          ],
          imageSrc: v1,
          imageAlt: 'Policy and Procedure development'
        },
        {
          title: 'Control Implementation & Documentation',
          listWithIcons: [
            {
              title:
                'Create implementation artifacts to demonstrate control compliance'
            },
            {
              title:
                'Organize and maintain evidence for each control, per system'
            },
            {
              title:
                'Ensure readiness for audits and assessments through proper documentation'
            }
          ]
        },
        {
          title: 'Security Planning & Compliance',
          text: 'Core Security Documents',
          listWithIcons: [
            { title: 'System Security Plans (SSP) for pre-production systems' },
            { title: 'Control Assessment Plans' },
            { title: 'Plans of Action and Milestones (POA&Ms)' }
          ]
        },
        {
          title: 'Configuration & Change Management',
          listWithIcons: [
            {
              title: 'Configuration Management Plan'
            },
            {
              title: 'Baseline system configurations'
            },
            {
              title: 'Hardware and software inventories'
            },
            {
              title: 'Change Management documentation'
            }
          ]
        },
        {
          title: 'Continuity & Incident Response Planning',
          listWithIcons: [
            { title: 'Continuity of Operations Plans (COOP)' },
            { title: 'Disaster Recovery Plans (DRP)' },
            { title: 'Contingency and exercise plans' },
            { title: 'Incident Response Plans and simulations' }
          ]
        },
        {
          title: 'Organization-Wide Planning',
          listWithIcons: [
            { title: 'Security and Privacy Plans' },
            { title: 'Comprehensive Information Security Program Plan' }
          ]
        },
        {
          title: 'Risk Management Support',
          listWithIcons: [
            { title: 'Conduct annual risk assessments for each system' },
            {
              title:
                'Lead pre-procurement risk assessments for new technologies or services'
            },
            {
              title: 'Translate risk findings into actionable remediation plans'
            }
          ],
          quote:
            '“With a vISO, you don’t just meet compliance—you build a culture of security.”',
          quoteSource: 'vISO Services',
          imageSrc: v3,
          imageAlt: 'Service',
          imageFit: 'contain'
        },
        {
          title: 'Annual and Ongoing Activities',
          text: 'Performed Annually',
          listWithIcons: [
            { title: 'Business Impact Analyses (BIA)' },
            { title: 'Data sensitivity and classification reviews' },
            { title: 'Control revision assessments due to system changes' },
            {
              title:
                'Maintain Interoperability Security Agreements (ISAs) with external partners'
            },
            { title: 'Coordinate and report on penetration testing' }
          ]
        },
        {
          title: 'Ongoing Support',
          listWithIcons: [
            {
              title:
                'Vulnerability remediation tracking (30/60/90-day deadlines)'
            },
            { title: 'Access approvals for onboarding/offboarding' },
            {
              title:
                'Execution of all ISO duties specified by COV and internal controls'
            },
            { title: 'Security awareness and training programs' },
            { title: 'Phishing campaign management and reporting' }
          ]
        },
        {
          title: 'Occasional & Scheduled Activities',
          listWithIcons: [
            { title: 'Support for COV RAMP assessments' },
            { title: 'Cloud Terms and Conditions reviews' },
            { title: 'Quarterly updates in Archer or other GRC platforms' }
          ]
        },
        {
          title: 'Every Three Years',
          listWithIcons: [
            {
              title:
                'Lead preparation for security audits conducted by VITA or external entities'
            }
          ],
          quote:
            '“Annual and ongoing activities ensure compliance, resilience, and continuous security improvement.”',
          quoteSource: 'vISO Services',
          imageSrc: vita6,
          imageAlt: 'Security'
        }
      ]}
    />
  )
}
export default About
