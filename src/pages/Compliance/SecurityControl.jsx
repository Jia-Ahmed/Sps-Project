import PageLayout from '../../components/PageLayout'
import security from '../../assets/security.webp'
const SecurityControl = () => {
  return (
    <PageLayout
      seo={{
        title: 'Security Controls Catalog',
        description:
          'The SPS Security Controls Catalog provides a structured set of safeguards to manage risks, protect information assets, and ensure regulatory compliance.'
      }}
      heroTitle='Security Controls Catalog'
      heroParagraphs={[
        'In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:'
      ]}
      sections={[
        {
          title: 'Security Controls Catalog',
          text: 'The Commonwealth’s Information Security Standard (SEC-530) defines a catalog of security controls organized into families. Each control contains a statement, a discussion to explain intent, and possible enhancements for higher-risk or sensitive systems.',
          quote:
            'Security controls described in this standard are organized into families. Each family contains controls related to the same security functionality.',
          quoteSource: 'SEC 530 Standard',
          imageSrc: security,
          imageAlt: 'SecurityControl'
        },
        {
          title: 'Access Control (AC)',
          text: 'Controls that limit access to systems, applications, and data to authorized users and processes, including account management, least privilege, and session controls.'
        },
        {
          title: 'Awareness and Training (AT)',
          text: 'Controls to ensure all personnel receive appropriate security and privacy training, promoting awareness of risks and responsibilities.'
        },
        {
          title: 'Audit and Accountability (AU)',
          text: 'Controls for creating, protecting, reviewing, and analyzing audit logs to ensure accountability for user and system activities.'
        },
        {
          title: 'Assessment, Authorization, and Monitoring (CA)',
          text: 'Controls for security assessments, system authorizations, continuous monitoring, and vulnerability management.'
        },
        {
          title: 'Configuration Management (CM)',
          text: 'Controls for establishing baselines, monitoring configuration changes, and enforcing secure settings to prevent unauthorized changes.'
        },
        {
          title: 'Contingency Planning (CP)',
          text: 'Controls to ensure agencies can respond to and recover from disruptions, including disaster recovery and business continuity planning.'
        },
        {
          title: 'Identification and Authentication (IA)',
          text: ' Controls requiring unique identification and robust authentication methods for users, devices, and processes before granting system access.'
        },
        {
          title: 'Incident Response (IR)',
          text: 'Controls for establishing, training, and testing an incident response capability to detect, report, and recover from incidents.'
        },
        {
          title: 'Sample Control: Access Control (AC-2)',
          text: (
            <>
              Example:<b>Account Management (AC-2)</b>
            </>
          ),
          listWithIcons: [
            {
              title: 'Define allowed account types and assign account managers.'
            },
            {
              title:
                'Require approval for creating accounts and promptly disable accounts when users leave.'
            },
            {
              title: 'Review all accounts at least annually.'
            },
            {
              title:
                'Implement enhancements such as automated account management and disabling inactive accounts.'
            }
          ]
        },
        {
          title: 'Structure of Controls',
          text: 'Each control in SEC-530 includes:',
          listWithIcons: [
            {
              title: 'Control',
              description: 'The requirement statement.'
            },
            {
              title: 'Discussion',
              description: ' Explanation and intent of the control.'
            },
            {
              title: 'Control Enhancements',
              description:
                ' Additional or stronger requirements for sensitive systems.'
            }
          ]
        }
      ]}
    />
  )
}
export default SecurityControl
