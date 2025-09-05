import PageLayout from '../../components/PageLayout'
import roles from '../../assets/roles.webp'
const RolesResponsibilities=()=>{
return(
     <PageLayout
      seo={{
        title: 'Roles and Responsibilities',
        description:
          "SPS defines clear roles and responsibilities to ensure accountability, strengthen security practices, and support compliance across the organization."
      }}
      heroTitle='Roles and Responsibilities'
      heroParagraphs={[
        'In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:'
      ]}
      sections={[
        {
          title: 'Roles & Responsibilities',
          text: 'This section defines the key IT security roles and responsibilities within the Commonwealth’s Information Security Program. Individuals may hold multiple roles— as long as separation of duties is maintained to prevent conflicts of interest or fraud.',
          quote:
            '“Each agency should utilize an organization chart that depicts the reporting structure… and shall maintain documentation regarding specific roles and responsibilities relating to information security.”',
          quoteSource:"SEC 530 Standard",
            imageSrc: roles,
          imageAlt: 'RolesResponsibilities'
        },
        {
          title: 'Chief Information Officer of the Commonwealth (CIO)',
          text: 'The CIO directs the development of policies, procedures, and standards for assessing security risks, determining appropriate measures, and performing security audits of government electronic information.',
        },
        {
          title: 'Chief Information Security Officer (CISO)',
          text: 'The CISO administers the Commonwealth’s Information Security Program, reviews exceptions, provides guidance and expertise, monitors sensitive system security status, and facilitates implementation of security policies and education.'
        },
        {
          title: 'Agency Head',
          text: 'The Agency Head holds responsibility for the agency’s IT system and data security. Their duties include:',
          listWithIcons: [
            {
              title: 'Designate an Information Security Officer (ISO) at least biennially, reporting directly to the Agency Head.',
            },
            {
              title: 'Ensure the information security program is maintained and communicated, and review BIAs, risk assessments, and contingency plans.',
            
            },
            {
              title: 'Approve or reject System Security Plans for sensitive systems and require corrective measures as needed.',
            
            },
            {
              title: 'Ensure compliance with IT security audit standards (SEC 502), oversee corrective actions, and report findings to the CISO.',
             
            },
             {
              title: 'Establish an information security awareness and training program and provide necessary resources.',
             
            },
             {
              title: 'Assign roles: System Owner, Data Owner, Data Custodian, and System Administrator for each sensitive system.',
             
            }
          ]
        },
        {
            title:'Information Security Officer (ISO)',
            text:'The ISO’s responsibilities include:',
             listWithIcons: [
            {
              title: 'Developing and managing the agency’s information security program in line with Commonwealth policies.',
            },
            {
              title: 'Classifying all agency systems and data by sensitivity.',
            
            },
            {
              title: 'Establishing and maintaining security awareness and training programs for all staff and contractors.',
            
            },
            {
              title: 'Implementing preventive, detective, and corrective security controls appropriate to system risk and criticality.',
             
            },
             {
              title: 'Reporting and mitigating security incidents per Virginia law and VITA requirements.',
             
            },
             {
              title: 'Coordinating with the CISO and completing ISO certification requirements annually.'
             
            }
          ]
        },
        {
            title:'System Owner, Data Owner, System Administrator & Other Roles',
            text:'Additional responsibilities include:',
            listWithIcons: [
            {
              title: 'System Owners: Ensure users complete system-specific security training and manage system risk appropriately.',
            },
            {
              title: 'Users: Comply with security requirements, and report breaches or suspected incidents.',
            
            },]
        }
      ]}
    />
)
}
export default RolesResponsibilities