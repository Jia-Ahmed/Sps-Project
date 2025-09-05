import PageLayout from '../../components/PageLayout'
import sec from '../../assets/sec.webp'
const SEC540 = () => {
  return (
    <PageLayout
      seo={{
        title: 'SEC 540 — Data Classifications',
        description:
          'SPS SEC 540 outlines data classification standards to categorize information by sensitivity, ensuring proper handling, compliance, and data protection.'
      }}
      heroTitle='SEC 540 — Data Classifications'
      heroParagraphs={[
        'The Data Classification Standard (SEC 540) sets the baseline for how agencies across the Commonwealth of Virginia (COV) classify and protect information. Each Agency Head is responsible for safeguarding electronic data in line with the Code of Virginia (§2.2-603.F and §2.2-2009). Agencies must also comply with any federal regulations tied to the type of information they handle such as HIPAA, FERPA, IRS 1075, PCI, CJIS, and others.'
      ]}
      sections={[
        {
          title: 'Why it matters',
          text: 'This standard provides a framework to:',
          listWithIcons: [
            {
              title: 'Identify the type of data an agency uses.'
            },
            {
              title:
                'Separate data classification from sensitivity classification.'
            },
            {
              title:
                'Ensure information is managed in a way that protects confidentiality, integrity, and availability.'
            },
            {
              title: 'Meet legal, regulatory, and business requirements.'
            }
          ],
          imageSrc: sec,
          imageAlt: 'SEC-540'
        },
        {
          title: 'Who it applies to',
          text: 'This standard applies to:',
          listWithIcons: [
            {
              title:
                'All employees, contractors, consultants, and third-party partners who create, manage, store, transmit, or access organizational data.'
            },
            {
              title: 'All formats — digital, paper, or otherwise.'
            },
            {
              title:
                'COV agencies must also enforce compliance when data is processed by third-party providers.'
            }
          ]
        },
        {
          title: 'How data is classified',
          text: 'When deciding how to classify data, agencies should consider:',
          listWithIcons: [
            {
              title:
                'Confidentiality: What happens if unauthorized access occurs?'
            },
            {
              title:
                'Regulatory needs: Is the data subject to HIPAA, PCI, or other requirements?'
            },
            {
              title:
                'Business impact: Could disclosure cause financial loss or reputational harm?'
            },
            {
              title:
                'Access needs: Who inside or outside the agency needs access?'
            }
          ]
        },
        {
          title: 'Classification Labels',
          text: 'Every dataset must carry a clear label that identifies:',
          listWithIcons: [
            {
              title: 'How it can be used and shared.'
            },
            {
              title: 'Whether regulatory compliance applies.'
            },
            {
              title: 'Sensitivity or special handling requirements'
            },
            {
              title: 'Retention period and disposal guidelines.'
            }
          ]
        }
      ]}
    />
  )
}
export default SEC540
