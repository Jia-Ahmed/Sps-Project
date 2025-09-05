// src/components/ComplianceRoutes.jsx
import { lazy, Suspense } from "react";

// ✅ Lazy imports (only allowed like this)
const InfoPolicy = lazy(() => import("../pages/Compliance/InfoPolicy"));
const RolesResponsibilities = lazy(() =>
  import("../pages/Compliance/RolesResponsibilities")
);
const BusinessImpact = lazy(() =>
  import("../pages/Compliance/BusinessImpact")
);
const ITSystem = lazy(() => import("../pages/Compliance/ITSystem"));
const ITInventory = lazy(() => import("../pages/Compliance/ITInventory"));
const RiskAssessment = lazy(() =>
  import("../pages/Compliance/RiskAssessment")
);
const ITSecurityAudits = lazy(() =>
  import("../pages/Compliance/ITSecurityAudits")
);
const SecurityControl = lazy(() =>
  import("../pages/Compliance/SecurityControl")
);
const SEC540 = lazy(() => import("../pages/Compliance/SEC540"));

// ✅ Suspense wrapper
const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

export const ComplianceLinks = [
  {
    name: 'Information Security Policy',
    path: '/compliance/information-security-policy',
    component:InfoPolicy,
    description:
      'Our Information Security Policy establishes a comprehensive framework for protecting the confidentiality, integrity, and availability of data, systems, and networks across the organization. It sets clear security objectives, compliance requirements, and operational practices designed to safeguard organizational information from internal and external threats, while ensuring regulatory and contractual obligations are met. The policy emphasizes the protection of sensitive information, including personally identifiable information (PII), financial records, intellectual property, and other critical business data, against unauthorized access, disclosure, modification, or destruction.'
  },
  {
    name: 'Roles & Responsibilities',
    path: '/compliance/roles-responsibilities',
    component:RolesResponsibilities,
    description:
      'Clear roles and responsibilities are fundamental to maintaining an effective and accountable information security program. Every member of the organization, from executive leadership to operational staff, has a distinct responsibility in protecting information assets, ensuring compliance, and mitigating risks. Employees are expected to follow established security policies, participate in mandatory training programs, report any suspicious activities, and protect sensitive data in all daily operations. Managers and supervisors are responsible for enforcing security procedures within their teams, monitoring adherence to policies, and escalating issues to higher management or the Information Security Officer (ISO) as necessary.'
  },
  {
    name: 'Business Impact Analysis',
    path: '/compliance/business-impact',
    component:BusinessImpact,
    description:
      'The Business Impact Analysis (BIA) is a critical component of our organizations information security and continuity planning efforts. It systematically identifies and evaluates essential business functions, determining the potential impact of disruptions on these operations. By assessing the financial, operational, and reputational consequences of various threats—such as cyberattacks, natural disasters, or system failures—the BIA enables us to prioritize recovery strategies effectively'
  },
  {
    name: 'IT System & Data Sensitivity',
    path: '/compliance/it-system-and-data-sensitivity',
    component:ITSystem,
    description: (
      <>
        <p>
          We classify IT systems and data based on their sensitivity to ensure
          the right level of protection. Classification categories typically
          include:
        </p>
        <ul className='list-disc pl-6 mt-2 space-y-1'>
          <li>
            <b>Public:</b>Information intended for general access without
            restrictions
          </li>
          <li>
            <b>Internal:</b> Business-use information not for public disclosure.
          </li>
          <li>
            <b>Confidential:</b> Sensitive data requiring controlled access.
          </li>
          <li>
            <b>Restricted:</b> Highly sensitive systems/data with strict
            protection measures
          </li>
        </ul>
      </>
    )
  },
  {
    name: 'Sensitive IT System Inventory and Definition',
    path: '/compliance/sensitive-it-inventory',
    component:ITInventory,
    description: (
      <>
        <p>
          An inventory of sensitive IT systems helps maintain visibility and
          proper protection. Each system is defined by:
        </p>
        <ul className='list-disc pl-6 mt-2 space-y-1'>
          <li>
            <b>System Name & Owner:</b>Identification and accountability.
          </li>
          <li>
            <b>Data Handled:</b> Type of sensitive or regulated information
            processed.
          </li>
          <li>
            <b>Criticality:</b>Impact of downtime or data loss on business
            operations.
          </li>
          <li>
            <b>Controls Applied:</b> Security measures in place for protection.
          </li>
        </ul>
      </>
    )
  },
  {
    name: 'Risk Assessment',
    path: '/compliance/risk-assessment',
    component:RiskAssessment,
    description: (
      <>
        <p>
          Risk assessments evaluate potential threats and vulnerabilities to IT systems and data. The process typically includes:
        </p>
        <ul className='list-disc pl-6 mt-2 space-y-1'>
          <li>
            <b>Identify Assets:</b>Catalog critical systems, data, and processes.
          </li>
          <li>
            <b>Analyze Threats & Vulnerabilities:</b>Assess posible risks and weakness.
          </li>
          <li>
            <b>Evaluate Impact & Likelihood::</b>Measure business impact if risks materialize.
          </li>
          <li>
            <b>Mitigation Plans:</b>  Recommend controls and prioritize risk treatments.
          </li>
        </ul>
      </>
    )
  },
  {
    name: 'IT Security Audits',
    path: '/compliance/it-security-audits',
    component:ITSecurityAudits,
        description: (
      <>
        <p>
          IT security audits are conducted to evaluate the effectiveness of security measures, compliance with policies, and adherence to regulatory standards. These audits help identify gaps and strengthen the overall security posture.
        </p>
        <ul className='list-disc pl-6 mt-2 space-y-1'>
          <li>
            <b>Compliance Review:</b>Ensures alignment with industry standards (e.g., ISO, NIST, GDPR).
          </li>
          <li>
            <b>Vulnerability Assessment:</b> Identifies weaknesses in systems, networks, and processes.
          </li>
          <li>
            <b>Control Effectiveness:</b>Tests whether implemented safeguards are working as intended.
          </li>
          <li>
            <b>Continuous Improvement:</b> Provides recommendations to reduce risks and enhance resilience.
          </li>
        </ul>
      </>
    )
  },
  {
    name: 'Security Control Catalog',
    path: '/compliance/security-control-catalog',
    component:SecurityControl,
 description: (
      <>
        <p>
          The Security Controls Catalog provides a comprehensive list of technical and organizational measures used to safeguard systems and data. These controls are aligned with best practices and regulatory requirements.</p>
        <ul className='list-disc pl-6 mt-2 space-y-1'>
          <li>
            <b>Access Controls:</b> Role-based access, authentication, and authorization policies.
          </li>
          <li>
            <b>Network Security:</b> Firewalls, intrusion detection/prevention, and segmentation.
          </li>
          <li>
            <b>Data Protection:</b>Encryption, backup, and secure data handling processes.
          </li>
          <li>
            <b>Monitoring & Logging:</b> Continuous monitoring of systems for anomalies and threats.
          </li>
          <li>
            <b>Incident Reponse:</b>Defined processes to detect, respond, and recover from security incidents.
          </li>
        </ul>
      </>
    )
  },
  {
    name: 'SEC 540 Data Classifications',
    path: '/compliance/sec-540',
    component:SEC540,
    description:(
      <>
      <p>The Data Classification Standard (SEC 540) establishes how agencies across the Commonwealth of Virginia (COV) classify and protect information. Agencies must safeguard electronic data in line with the Code of Virginia and comply with federal regulations such as HIPAA, FERPA, PCI, and others.</p>
       <ul className='list-disc pl-6 mt-2 space-y-1'>
          <li>
            <b>Why it matters:</b> Protects confidentiality, integrity, and availability while meeting legal and regulatory requirements.
          </li>
          <li>
            <b>Who it applies to:</b> All employees, contractors, and partners handling organizational data in any format.
          </li>
          <li>
            <b>How data is classified :</b> Based on confidentiality, regulatory needs, business impact, and access requirements.
          </li>
          <li>
            <b>Classification labels:</b> Define usage, compliance, and sensitivity or handling requirements.
          </li>
        
        </ul>
      </>
    )
  }
]
// 👉 Routes for Router (withSuspense applied)
export const ComplianceRoutes = ComplianceLinks.map((item) => ({
  path: item.path,
  element: withSuspense(item.component),
}));
