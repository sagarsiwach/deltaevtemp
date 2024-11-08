"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const privacyPolicyMd = `
  # Terms of Service

  **Effective Date: 8th November 2024**

  ## 1. Introduction and Acceptance

  These Terms of Service ("Terms") constitute a legally binding agreement between DeltaEV Mobility Private Limited ("DeltaEV," "we," "our," or "Company") and any entity or person ("Client," "you," or "your") that accesses or uses our products, services, or engages in any business relationship with us. By engaging with DeltaEV, purchasing our products, or utilizing our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.

  ## 2. Definitions

  Throughout these Terms, certain terms shall have the following meanings:

  "Products" refers to all hardware, components, and physical goods manufactured, supplied, or distributed by DeltaEV, including but not limited to EV charging stations, energy storage solutions, powertrains, and EV components.

  "Services" encompasses all technical, maintenance, installation, and support services provided by DeltaEV, including AI-driven predictive maintenance and analytical services.

  "Intellectual Property" includes all patents, trademarks, copyrights, trade secrets, know-how, and other proprietary rights owned by or licensed to DeltaEV.

  ## 3. Products and Services

  ### 3.1 Product Specifications and Availability

  DeltaEV provides various products and solutions in the electric vehicle and energy storage sector. All products are manufactured according to industry standards and specifications provided in the relevant product documentation. We reserve the right to modify product specifications, discontinue products, or introduce new products at our discretion, subject to existing contractual obligations.

  Our product portfolio includes:
  - Electric Vehicle Charging Infrastructure
  - Energy Storage Solutions
  - Powertrain Systems (including hydrogen-based solutions)
  - Electric Vehicle Components
  - Associated Control and Monitoring Systems

  ### 3.2 Service Delivery

  Our services are delivered in accordance with industry best practices and specific terms outlined in individual service agreements. Service delivery includes:

  Technical consultation and system design services tailored to client requirements and specifications.

  Installation and commissioning services performed by qualified personnel in compliance with relevant safety standards and regulations.

  Maintenance and support services, including preventive maintenance, emergency response, and technical support as specified in service level agreements.

  AI-driven predictive maintenance and analytical services designed to optimize system performance and prevent potential issues.

  ## 4. Commercial Terms

  ### 4.1 Pricing and Payment

  All prices for products and services are as quoted in our formal proposals or as specified in separately negotiated agreements. Prices are exclusive of applicable taxes, duties, and transportation costs unless explicitly stated otherwise.

  Payment terms shall be as follows:

  Written quotations are valid for the period specified therein.

  Payment schedules and milestones shall be as specified in individual purchase orders or contracts.

  All payments shall be made in Indian Rupees unless otherwise agreed in writing.

  ### 4.2 Delivery and Installation

  Delivery timeframes are as specified in purchase orders or contracts. Risk of loss transfers upon delivery at the agreed-upon location. Installation services, where applicable, are subject to:

  Site readiness requirements as communicated in technical documentation.

  Access to necessary facilities and utilities as specified in installation guidelines.

  Compliance with safety requirements and local regulations.

  ## 5. Warranties and Representations

  ### 5.1 Product Warranties

  DeltaEV warrants that all products will be free from defects in materials and workmanship under normal use and maintenance for the specified warranty period. This warranty is subject to:

  Proper installation and commissioning by authorized personnel.

  Regular maintenance as specified in product documentation.

  Operation within specified parameters and environmental conditions.

  The warranty specifically excludes:

  Damage caused by misuse, negligence, or unauthorized modifications.

  Normal wear and tear of components.

  Damage caused by external factors beyond our control.

  ### 5.2 Service Warranties

  We warrant that all services will be performed:

  In a professional and workmanlike manner.

  By qualified personnel with appropriate expertise and training.

  In accordance with industry standards and applicable regulations.

  ## 6. Intellectual Property Rights

  ### 6.1 Ownership and Rights

  All intellectual property rights in the products, services, and associated documentation remain the exclusive property of DeltaEV or its licensors. This includes:

  Patents, designs, and technical innovations incorporated in our products.

  Software, algorithms, and analytical tools used in our services.

  Trademarks, logos, and brand elements.

  ### 6.2 License and Usage

  Clients are granted a limited, non-exclusive license to use our products and services for their intended purpose. This license:

  Does not permit reverse engineering, modification, or reproduction of our products.

  Restricts the transfer or sublicense of any intellectual property rights.

  Requires maintaining the confidentiality of any technical information provided.

  ## 7. Liability and Indemnification

  ### 7.1 Limitation of Liability

  DeltaEV's aggregate liability under these Terms shall not exceed the amount paid by the client for the specific product or service giving rise to the claim. We shall not be liable for:

  Indirect, consequential, or incidental damages.

  Loss of profits, business opportunities, or data.

  Damages arising from force majeure events.

  ### 7.2 Indemnification

  Clients agree to indemnify and hold DeltaEV harmless from any claims, damages, or expenses arising from:

  Unauthorized modifications to our products or services.

  Violation of applicable laws or regulations.

  Breach of these Terms or any specific agreement.

  ## 8. Term and Termination

  ### 8.1 Duration

  These Terms remain in effect for the duration of your use of our products or services, or as specified in individual contracts.

  ### 8.2 Termination Rights

  Either party may terminate the agreement:

  For material breach, with 30 days written notice and opportunity to cure.

  Immediately upon bankruptcy or insolvency of the other party.

  As specified in individual contracts or purchase orders.

  ### 8.3 Post-Termination Obligations

  Upon termination:

  All outstanding payments become immediately due.

  Confidential information must be returned or destroyed.

  Ongoing warranty obligations remain in effect for the specified period.

  ## 9. Dispute Resolution

  ### 9.1 Governing Law

  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Goa, India.

  ### 9.2 Dispute Resolution Process

  All disputes shall first be attempted to be resolved through good faith negotiations between authorized representatives of both parties.

  If negotiations fail, disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.

  The arbitration shall be conducted in Goa, India, in English language.

  ## 10. General Provisions

  ### 10.1 Force Majeure

  Neither party shall be liable for any failure or delay in performance due to circumstances beyond reasonable control, including but not limited to:

  Natural disasters or acts of God.

  War, civil unrest, or terrorism.

  Government actions or regulations.

  Pandemics or public health emergencies.

  ### 10.2 Severability

  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

  ### 10.3 Assignment

  These Terms may not be assigned without the prior written consent of DeltaEV, which shall not be unreasonably withheld.

  ### 10.4 Amendments

  DeltaEV reserves the right to modify these Terms at any time, with notice to clients of material changes.

  ### 10.5 Entire Agreement

  These Terms, along with any specific agreements or purchase orders, constitute the entire agreement between the parties regarding the subject matter herein.

  ## 11. Contact Information

  For any questions or concerns regarding these Terms of Service, please contact:

  **DeltaEV Mobility Private Limited**
  Verna, Goa
  Email: info@deltaev.co.in

  By engaging with DeltaEV, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.`;

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
