"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsAndConditionsClientPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-primary">Terms and Conditions</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            These Terms and Conditions govern your use of software engineering consulting services provided by Juan
            Carlos Jirón Juárez ("Consultant").
          </p>
          <p className="text-muted-foreground">
            By engaging the Consultant's services, you agree to be bound by these Terms and Conditions. If you do not
            agree with any part of these terms, please do not use the services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. Services</h2>
          <p className="text-muted-foreground mb-4">
            The Consultant provides software engineering consulting services, which may include but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li dangerouslySetInnerHTML={{ __html: "Web development using modern frameworks and technologies" }}></li>
            <li dangerouslySetInnerHTML={{ __html: "Mobile application development for Android platforms" }}></li>
            <li dangerouslySetInnerHTML={{ __html: "UI/UX design and implementation" }}></li>
            <li dangerouslySetInnerHTML={{ __html: "Technical consulting and advisory services" }}></li>
            <li dangerouslySetInnerHTML={{ __html: "Code review and optimization" }}></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. Engagement Process</h2>
          <p className="text-muted-foreground mb-4">The engagement process typically follows these steps:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Initial consultation to understand project requirements</li>
            <li>Proposal and quote based on project scope</li>
            <li>Agreement on deliverables, timeline, and payment terms</li>
            <li>Project execution with regular updates and feedback</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Specific details of each engagement will be outlined in a separate Statement of Work or contract.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            Upon full payment of all invoices, the client will own all rights to the deliverables created specifically
            for the client, with the following exceptions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Pre-existing intellectual property owned by the Consultant</li>
            <li>Open-source components subject to their respective licenses</li>
            <li>General programming techniques, algorithms, or methods that are not unique to the client's project</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            The Consultant reserves the right to use non-confidential aspects of the work for portfolio purposes unless
            otherwise agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">5. Payment Terms</h2>
          <p className="text-muted-foreground mb-4">Payment terms are as follows:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>A deposit of 50% of the project fee is required before work begins</li>
            <li>Remaining balance is due upon project completion or as specified in the agreement</li>
            <li>For ongoing services, monthly invoices will be issued</li>
            <li>Late payments are subject to a 1.5% monthly interest charge</li>
            <li>All fees are exclusive of taxes, which will be charged where applicable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">6. Confidentiality</h2>
          <p className="text-muted-foreground">
            The Consultant agrees to maintain the confidentiality of all proprietary information shared during the
            engagement. Similarly, clients agree to keep confidential any proprietary methods or tools disclosed by the
            Consultant.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">7. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            The Consultant's liability is limited to the amount paid for the services. In no event shall the Consultant
            be liable for any indirect, incidental, special, or consequential damages arising out of or in connection
            with the services provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">8. Termination</h2>
          <p className="text-muted-foreground">
            Either party may terminate the engagement with 14 days written notice. The client is responsible for payment
            of all services rendered up to the termination date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">9. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms and Conditions are governed by the laws of Mexico. Any disputes arising from these terms shall
            be resolved in the courts of Mexico City.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">10. Contact Information</h2>
          <p className="text-muted-foreground">
            For any questions regarding these Terms and Conditions, please contact:
          </p>
          <address className="not-italic text-muted-foreground mt-2">
            jironjuarezjuan@outlook.com
            <br />
            (+52) 55 83 67 99 08
            <br />
            Mexico City, Mexico
          </address>
        </section>

        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground mb-6">Last updated: March 11, 2025</p>
          <Link href="/">
            <Button>Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
