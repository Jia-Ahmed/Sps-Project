import PageLayout from '../../components/PageLayout'
import roles from '../../assets/roles.webp'
const ITSecurityAudits = () => {
  return (
    <PageLayout
      seo={{
        title: 'IT Security Audits',
        description:
          ' SPS conducts comprehensive IT Security Audits to identify vulnerabilities, assess risks, and ensure compliance with industry standards for robust protection.'
      }}
      heroTitle='IT Security Audits'
      heroParagraphs={[
        'In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:'
      ]}
      sections={[
        {
          title: 'IT Security Audits',
          text: 'IT Security Audits are independent reviews required by the Commonwealth to evaluate how well agencies protect sensitive systems. They measure compliance with SEC 530 and SEC 502 standards, ensuring security policies, procedures, and technical safeguards are being followed.',
          quote:
            '“Each agency shall ensure that an IT security audit of all sensitive systems is conducted every three years in accordance with the Commonwealth’s security audit standard (SEC 502). All findings must be documented and corrective actions tracked until resolution.”',
          quoteSource: 'SEC 530 Standard',
          imageSrc: roles,
          imageAlt: 'ITSecurity'
        },
        {
          title: 'Objectives of IT Security Audits',
          text: 'The primary objectives of IT security audits are:',
          listWithIcons: [
            {
              title:
                'Verify compliance with Commonwealth security policies, standards, and laws.'
            },
            {
              title:
                'Identify risks, vulnerabilities, or non-compliance within sensitive systems.'
            },
            {
              title:
                'Evaluate the effectiveness of technical, operational, and management controls.'
            },
            {
              title:
                'Confirm corrective actions from previous audits are fully implemented.'
            },
            {
              title:
                'Provide assurance to agency leadership and the CISO that systems are safeguarded.'
            }
          ]
        },
        {
          title: 'Agency Responsibilities',
          text: 'Agencies are accountable for supporting IT security audits by:',
          listWithIcons: [
            {
              title:
                'Ensuring sensitive systems are audited at least once every three years.'
            },
            {
              title:
                'Maintaining updated Risk Assessments, BIAs, and Contingency Plans for review.'
            },
            {
              title:
                'Developing and implementing corrective action plans for all audit findings.'
            },
            {
              title:
                'Reporting audit results and progress on corrective actions to the Commonwealth’s CISO.'
            }
          ]
        },
        {
          title: 'Corrective Action & Compliance Tracking',
          text: 'Following an IT security audit, agencies must track, document, and report corrective actions until all findings are resolved. Progress must be regularly communicated to the CISO to ensure compliance and continuous improvement of the Commonwealth’s security posture.'
        }
      ]}
    />
  )
}
export default ITSecurityAudits
