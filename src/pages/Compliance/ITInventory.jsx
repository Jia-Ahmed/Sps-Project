import PageLayout from '../../components/PageLayout'
import inventory from '../../assets/inventory.webp'
const ITInventory = () => {
  return (
    <PageLayout
      seo={{
        title: 'Sensitive IT System Inventory',
        description:
          'Explore SPS’s Information Security Policy – safeguarding data, mitigating risks, and ensuring compliance with international security standards.'
      }}
      heroTitle='Sensitive IT System Inventory'
      heroParagraphs={[
        'In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:'
      ]}
      sections={[
        {
          title: 'Sensitive IT System Inventory',
          text: 'Sensitive IT systems are those that process, store, or transmit information essential to an agency’s mission, public safety, or regulatory compliance. Maintaining an accurate inventory of these systems ensures that appropriate security controls are applied and continuously monitored.',
          quote:
            '“Agencies are required to identify, define, and maintain an inventory of sensitive IT systems to ensure security measures align with business, legal, and operational requirements.”',
          quoteSource: 'SEC 530 Standard',
          imageSrc: inventory,
          imageAlt: 'ITInventory'
        },
        {
          title: 'Overview of Sensitive IT Systems',
          text: 'A system is considered sensitive if unauthorized access, disclosure, modification, or loss of availability would cause significant adverse impact to the agency, its stakeholders, or the public.',
          listWithIcons: [
            {
              title: 'Processes mission-critical or confidential information'
            },
            {
              title: 'Supports essential business or government operations'
            },
            {
              title: 'Handles data regulated by law or compliance requirements'
            },
            {
              title: 'Has high potential impact if compromised or unavailable'
            }
          ]
        },
        {
          title: 'Maintaining a Sensitive System Inventory',
          text: 'Agencies must document and regularly update an inventory of all sensitive IT systems. This inventory serves as the foundation for risk assessments, security planning, and compliance reporting.',
          listWithIcons: [
            {
              title: 'System Identification',
              description:
                'List all IT systems that process or store sensitive data.'
            },
            {
              title: 'Classifications',
              description:
                'Define sensitivity level (Low, Moderate, High) based on business impact.'
            },
            {
              title: 'Ownership',
              description:
                ' Assign business and technical owners accountable for security.'
            },
            {
              title: 'Review & Update',
              description:
                ' Regularly validate and update inventory to reflect system changes.'
            }
          ]
        },
        {
          title: 'Why Inventory Matters',
          text: 'An accurate and up-to-date sensitive IT system inventory enables agencies to focus security resources on the most critical assets, comply with state and federal regulations, and minimize risks to operations, reputation, and public trust.'
        }
      ]}
    />
  )
}
export default ITInventory
