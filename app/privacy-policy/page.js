"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const privacyPolicyMd = `
  # Privacy Policy

  **Last Updated: 8th November 2024**

  ## Introduction

  DeltaEV Mobility Private Limited ("DeltaEV," "we," "our," or "Company") is committed to protecting the privacy and security of your information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our products, services, website, or engage with us in any business capacity.

  We understand the importance of maintaining the confidentiality of information entrusted to us by our business partners, clients, and website visitors. This Privacy Policy reflects our commitment to maintaining that trust while delivering innovative electric vehicle solutions, components, and services.

  ## Scope of Application

  This Privacy Policy applies to all information collected through our products, services, and business operations, including but not limited to our EV charging infrastructure, energy storage solutions, powertrain systems (including hydrogen-based solutions), EV components, and associated technical services. This policy specifically covers our corporate website, business transactions, and all related technical and business interactions.

  ## Information We Collect

  ### Business and Corporate Information

  We collect and maintain various categories of business information necessary for our operations and service delivery. This includes comprehensive corporate details such as company names, registration information, and business correspondence. We maintain detailed records of purchase histories, transaction details, and relevant business documentation necessary for fulfilling our contractual obligations and maintaining our business relationships.

  ### Technical and Operational Data

  In the course of providing our services and maintaining our equipment, we collect technical information crucial for optimal performance and service delivery. This encompasses:

  Detailed operational data from our charging stations and infrastructure installations, including usage patterns, performance metrics, and system diagnostics. This information is essential for maintaining service quality and enabling predictive maintenance capabilities.

  Vehicle-specific information when interfacing with our charging systems or components, limited to technical data necessary for proper functioning and service delivery. This may include charging preferences, vehicle compatibility data, and technical specifications.

  Location data pertaining to our installed infrastructure and equipment, which is necessary for maintenance, servicing, and optimal network management.

  ### Payment and Transaction Information

  While we do not process online payments through our website, we maintain necessary financial records of our business transactions, including:

  - Corporate banking information provided for business transactions
  - Purchase orders and invoice details
  - Payment histories and transaction records
  - GST and other tax-related documentation

  ## Use of Information

  ### Primary Business Operations

  The information we collect is primarily used to facilitate our core business operations and deliver our services effectively. We utilize this information to:

  Process and fulfill orders for our products and services, ensuring accurate delivery and implementation of our solutions. This includes managing the entire supply chain from order placement to final delivery and installation.

  Maintain and service our infrastructure, enabling proactive maintenance and timely response to service requirements. Through our technical data collection, we can optimize performance and prevent potential issues before they affect service delivery.

  Provide comprehensive technical support and maintenance services, ensuring our clients receive maximum value from our products and solutions. This includes troubleshooting, regular maintenance schedules, and technical consultations.

  ### Service Improvement and Innovation

  We leverage collected data to continuously improve our services and develop innovative solutions. This includes:

  Analyzing performance data to enhance our products and services, leading to more efficient and reliable solutions for our clients. Through careful analysis of operational metrics, we can identify areas for improvement and optimization.

  Developing and refining our AI and predictive maintenance capabilities, resulting in more reliable and efficient service delivery. This involves processing technical data to identify patterns and potential issues before they become problems.

  Conducting market analysis and research to better understand industry needs and trends, enabling us to develop more effective solutions for our clients.

  ## Information Sharing and Disclosure

  ### Business Partners and Service Providers

  We may share information with carefully selected third parties who assist us in providing our services and improving our offerings. These parties include:

  Manufacturing partners and component suppliers who are essential to our supply chain and product delivery. Such sharing is limited to information necessary for fulfilling orders and maintaining quality standards.

  Technical service providers who assist in maintaining and improving our infrastructure and services. These partners are bound by strict confidentiality obligations and data protection requirements.

  Professional service providers such as legal advisors, auditors, and consultants who require information access to provide their services effectively.

  ### Legal and Regulatory Compliance

  We may disclose information when required by law or in response to valid legal processes. This includes:

  Responding to lawful requests from government authorities or regulatory bodies, ensuring compliance with applicable laws and regulations.

  Protecting our legal rights and interests, including investigating potential violations of our terms of service or preventing fraudulent activities.

  Ensuring safety and security of our operations and services, including protecting against potential threats or illegal activities.

  ## Data Security

  ### Security Measures

  We implement comprehensive security measures to protect your information:

  Industry-standard encryption protocols for data transmission and storage, ensuring information security during all business operations.

  Robust access control mechanisms that restrict data access to authorized personnel only, maintaining strict information confidentiality.

  Regular security audits and assessments to identify and address potential vulnerabilities in our systems.

  ### Data Retention

  We retain information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. This includes:

  Maintaining business records for the duration required by applicable laws and regulations.

  Retaining technical data necessary for service improvement and maintenance of quality standards.

  Preserving transaction records as required for legal and business purposes.

  ## Your Rights and Choices

  We respect your rights regarding your information and provide mechanisms to exercise these rights:

  Access and Review: You may request access to the information we hold about your business.

  Correction: You can request corrections to any inaccurate information in our records.

  Data Portability: Where applicable, you may request transfer of your information in a structured format.

  Deletion: You may request deletion of non-essential information that we are not required to maintain by law.

  ## Updates to This Policy

  We reserve the right to update this Privacy Policy as our services evolve or to comply with legal requirements. Material changes will be communicated through appropriate channels, including:

  Direct communication to our business partners and clients about significant changes.

  Updates on our corporate website and other relevant communication channels.

  Reasonable notice period before implementing substantial changes.

  ## Contact Information

  For any questions or concerns regarding this Privacy Policy or our privacy practices, please contact us at:

  **DeltaEV Mobility Private Limited**
  Verna, Goa
  Email: info@deltaev.co.in

  ## Governing Law

  This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in Goa, India.
`;

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-white font-sans">
      {/* Header */}
      <header className="z-10 p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
          >
            DeltaEV
          </Link>
          <Link
            href="/"
            className="text-slate-900 hover:text-red-400 transition duration-300"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8 z-10">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-xl p-8">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-3xl font-bold mb-6 text-red-600 font-inter tracking-tight leading-tight -tracking-[0.03em]"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-2xl font-semibold mt-8 mb-4 text-slate-900 font-inter tracking-tight leading-tight -tracking-[0.03em]"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="mb-4 text-slate-700 font-inter tracking-tight leading-tight -tracking-[0.03em]"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc list-inside mb-4 text-slate-700 font-inter tracking-tight leading-tight -tracking-[0.03em]"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li
                  className="mb-2 font-inter tracking-tight leading-tight -tracking-[0.03em]"
                  {...props}
                />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-red-400 hover:underline font-inter tracking-tight leading-tight -tracking-[0.03em]"
                  {...props}
                />
              ),
            }}
          >
            {privacyPolicyMd}
          </ReactMarkdown>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 p-4 bg-slate-200">
        <div className="container mx-auto flex justify-center space-x-4 text-sm text-slate-600">
          <Link
            href="/privacy-policy"
            className="hover:text-red-500 transition duration-300 font-inter -tracking-[0.03em] font-semibold"
          >
            Privacy Policy
          </Link>
          <Link
            href="/tos"
            className="hover:text-red-500 transition duration-300 font-inter -tracking-[0.03em] font-semibold"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
