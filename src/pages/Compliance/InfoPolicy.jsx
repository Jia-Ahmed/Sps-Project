import PageLayout from '../../components/PageLayout'
import Policy from '../../assets/Policy.webp'

const InfoPolicy = () => {
  return (
    <PageLayout
      seo={{
        title: 'Information Security Policy',
        description:
          'Our Information Security Policy establishes a framework to protect confidentiality, integrity, and availability of data.'
      }}
      heroTitle='Information Security Policy'
      heroParagraphs={[
        'In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:'
      ]}
      sections={[
        {
          title: 'Information Security Policy',
          text: 'This section establishes a base standard for information security and risk management across the agency. Drawing from NIST SP 800-53 Rev. 5, it defines baseline expectations for protecting confidentiality, integrity, and availability. Agencies must meet or exceed these baselines and may then tailor and document controls to suit their environment and sensitivity of their systems and data.',
          quote:
            '“Agencies are required to develop, document, and enforce an information security program that aligns with SEC530 Information Security Standard. Exceptions may only be granted with proper justification, mitigation, and approval.”',
          imageSrc: Policy,
          imageAlt: 'Policy illustration'
        },
        {
          title: 'Information Security Program Objectives',
          text: 'Key objectives include defining clear roles and responsibilities, establishing and maintaining the security program, managing exceptions appropriately, and identifying exemptions where applicable.',
          listWithIcons: [
            {
              title: 'Define Roles & Responsibilities'
            },
            { title: 'Establish and Enforce the Security Program' },
            { title: 'Manage Exceptions and Document Mitigations' }
          ]
        },
        {
          title: 'Access Control Policy',
          text: 'Agencies must document and implement access control procedures. This includes account management, timely disabling of unused accounts, audits, and monitoring. Shared accounts are prohibited, and privileged access must be restricted and documented.'
        },
        {
          title: 'Security Control Framework',
          text: 'The Information Security Standard is based on 17 control families, such as Access Control, Incident Response, Awareness and Training, and Supply Chain Risk Management. Each control includes baseline requirements and optional enhancements to strengthen security as needed.',
          listWithIcons: [
            {
              title: 'Risk & Classification',
              description:
                'Agencies must conduct Business Impact Analyses (BIAs), classify systems and data, and document results in the eGRC system. Sensitive systems require additional oversight'
            },
            {
              title: 'Assessment & Audits',
              description:
                'Risk assessments must be conducted every three years with annual self-assessments, and sensitive systems audited independently according to SEC502 requirements.'
            },
            {
              title: 'Roles & Governance',
              description:
                'Agency Heads, CIOs, CISOs, and ISOs each have specific duties in overseeing security, enforcing compliance, and maintaining accountability.'
            },
            {
              title: 'Program Enforcement',
              description:
                'Documented programs, exception processes, and control tailoring ensure agencies meet statewide requirements while managing operational risk effectively.'
            }
          ]
        }
      ]}
    />
  )
}

export default InfoPolicy
