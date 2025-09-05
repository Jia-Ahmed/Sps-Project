import PageLayout from '../../components/PageLayout'
import business from '../../assets/business.webp'
const BusinessImpact = () => {
  return (
    <PageLayout
      seo={{
        title: 'Business Impact Analysis (BIA)',
        description:
          'Understand critical business processes, potential risks, and recovery strategies with SPS Business Impact Analysis. Ensure business continuity and resilience against disruptions.'
      }}
      heroTitle='Business Impact Analysis (BIA)'
      heroParagraphs={[
        'In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:'
      ]}
      sections={[
        {
          title: 'Business Impact Analysis (BIA)',
          text: 'A Business Impact Analysis (BIA) identifies essential business functions and the systems and data that support them. It helps agencies understand how the loss or disruption of services impacts confidentiality, integrity, and availability. The results guide risk management, contingency planning, and system classification efforts.',
          quote:
            '“Agencies are required to complete and document BIAs for all information systems and business processes, ensuring they are reviewed annually and fully updated every three years.”',
          quoteSource: 'SEC 530 Standard',
          imageSrc: business,
          imageAlt: 'BusinessImpact'
        },
        {
          title: 'Core Objectives of a BIA',
          text: 'The BIA ensures that each agency can define and prioritize essential functions, assess dependencies, and prepare recovery strategies. Outcomes of a BIA feed directly into risk assessments and contingency planning activities.',
          listWithIcons: [
            {
              title:
                'Identify essential business functions and supporting IT systems/data'
            },
            {
              title:
                'Assess impacts on confidentiality, integrity, and availability'
            },
            {
              title:
                'Define Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO)'
            },
            {
              title:
                'Align results with risk management and contingency planning'
            }
          ]
        },
        {
          title: 'BIA Review Cycle',
          text: 'Each agency must review its BIA annually and fully update it every three years. This ensures business functions and supporting systems remain accurately assessed, even as technology and operations evolve. Updated BIAs must be integrated into the Commonwealth’s risk management process.'
        },
        {
          title: 'Why Business Impact Analysis Matters',
          text: 'A well-executed BIA helps agencies prioritize resources, strengthen resilience, and ensure that critical services remain available during and after disruptions. By identifying vulnerabilities and recovery needs, agencies can plan effectively to protect citizens, data, and mission-essential operations.',
          listWithIcons: [
            {
              title: 'Identify Critical functions',
              description:
                'Determine which agency functions are essential for mission continuity.'
            },
            {
              title: 'Assess Impact',
              description:
                'Evaluate the effects of downtime, data loss, or compromised availability.'
            },
            {
              title: 'Set Recovery Objectives',
              description:
                ' Establish RTO and RPO targets for essential systems and processes.'
            },
            {
              title: 'Support Risk Managemnt',
              description:
                'Integrate BIA results into overall risk assessments and contingency plans.'
            }
          ]
        }
      ]}
    />
  )
}
export default BusinessImpact
