import PageLayout from '../../components/PageLayout'
import ITsystem from '../../assets/ITsystem.webp'
const ITSystem = () => {
  return (
    <PageLayout
      seo={{
        title: 'IT System and Data Sensitivity Classification',
        description:
          'SPS classifies IT systems and data by sensitivity levels to safeguard critical assets, ensure proper handling, and strengthen information security.'
      }}
      heroTitle='IT System and Data Sensitivity Classification'
      heroParagraphs={[
        'In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:'
      ]}
      sections={[
        {
          title: 'IT System and Data Sensitivity Classification',
          text: 'System and data sensitivity classification is the process of assigning a sensitivity level to information systems and the data they store, process, or transmit. This ensures that agencies apply appropriate safeguards to protect confidentiality, integrity, and availability in line with business and regulatory requirements.',
          quote:
            '“Agencies must classify their IT systems and data based on sensitivity to ensure appropriate security controls are implemented and maintained.”',
          quoteSource: 'SEC 530 Standard',
          imageSrc: ITsystem,
          imageAlt: 'ITSystem'
        },
        {
          title: 'Core Objectives of Sensitivity Classification',
          text: 'Classification establishes the foundation for system security planning and determines the level of controls necessary to protect agency operations and citizen data. This process also supports risk assessments and compliance efforts.',
          listWithIcons: [
            {
              title: 'Identify and categorize IT systems and associated data'
            },
            {
              title:
                'Assess the impact of loss of confidentiality, integrity, or availability'
            },
            {
              title:
                'Assign appropriate sensitivity levels (e.g., Low, Moderate, High)'
            },
            {
              title:
                'Ensure alignment with business needs and compliance standards'
            },
            {
              title:
                'Integrate results into risk management and security controls'
            }
          ]
        },
        {
          title: 'Sensitivity Classification Levels',
          text: 'The classification framework typically includes the following levels, each guiding the selection of security measures:',
          listWithIcons: [
            {
              title: 'Low Sensitivity',
              description:
                'Loss has limited adverse impact; minimal disruption to operations.'
            },
            {
              title: 'Moderate Sensitivity',
              description:
                'Loss could cause significant disruption or damage to agency functions.'
            },
            {
              title: 'High Sensitivity',
              description:
                ' Loss would result in severe or catastrophic effects on operations, finances, public trust, or safety.'
            }
          ]
        },
        {
          title: 'Why Sensitivity Classification Matters',
          text: 'Accurate classification ensures that resources are prioritized for the most critical systems and data. It provides a structured approach to safeguarding sensitive information, maintaining compliance, and reducing risks to mission-essential services.'
        }
      ]}
    />
  )
}
export default ITSystem
