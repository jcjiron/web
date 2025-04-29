import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Juan Carlos Jirón",
  description: "Privacy policy for software engineering consulting services provided by Juan Carlos Jirón.",
}

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          This Privacy Policy explains how I, Juan Carlos Jirón, collect, use, and protect your personal information
          when you use my software engineering consulting services or visit my portfolio website.
        </p>
        <p>
          I am committed to ensuring that your privacy is protected. Any information you provide will only be used in
          accordance with this privacy statement.
        </p>
      </section>

      {/* Information Collected */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information Collected</h2>
        <p className="mb-4">I may collect the following information:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Name and job title</li>
          <li>Contact information including email address and phone number</li>
          <li>Company information</li>
          <li>Project requirements and specifications</li>
          <li>Website usage data through analytics</li>
        </ul>
        <p>I collect this information to understand your needs and provide you with better service.</p>
      </section>

      {/* Use of Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Use of Information</h2>
        <p className="mb-4">I use the information collected for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide the consulting services you have requested</li>
          <li>To improve my services and website based on your feedback</li>
          <li>To communicate with you about your project</li>
          <li>To send periodic emails regarding your project or other services that may be of interest to you</li>
          <li>To maintain records of our professional relationship</li>
        </ul>
      </section>

      {/* Data Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          I am committed to ensuring that your information is secure. I have implemented suitable physical, electronic,
          and managerial procedures to safeguard and secure the information I collect to prevent unauthorized access or
          disclosure.
        </p>
        <p>All electronic communications and data transfers are encrypted using industry-standard protocols.</p>
      </section>

      {/* Third-Party Services */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
        <p className="mb-4">
          I may use third-party services to help me operate my business and this website or administer activities on my
          behalf, such as sending emails or analyzing website usage.
        </p>
        <p className="mb-4">
          These third parties have their own privacy policies and I recommend you review their policies as I cannot
          accept responsibility for their privacy practices.
        </p>
        <p className="mb-4">Third-party services I may use include:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Google Analytics for website usage statistics</li>
          <li>Email service providers for communication</li>
          <li>Cloud storage providers for secure document storage</li>
          <li>Project management tools for tracking project progress</li>
        </ul>
      </section>

      {/* User Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p className="mb-4">You have the following rights regarding your personal data:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The right to access your personal data</li>
          <li>The right to request correction of inaccurate data</li>
          <li>The right to request deletion of your data</li>
          <li>The right to restrict processing of your data</li>
          <li>The right to data portability</li>
          <li>The right to object to the processing of your data</li>
        </ul>
        <p>To exercise any of these rights, please contact me using the information provided in the Contact section.</p>
      </section>

      {/* Cookies Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Cookies Policy</h2>
        <p className="mb-4">
          This website uses cookies to improve your experience. Cookies are small files that a site or its service
          provider transfers to your computer's hard drive through your web browser that enables the site to recognize
          your browser and capture and remember certain information.
        </p>
        <p className="mb-4">
          I use cookies to understand and save your preferences for future visits and compile aggregate data about site
          traffic and site interaction so that I can offer better site experiences in the future.
        </p>
        <p className="mb-4">The types of cookies used on this website include:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Essential cookies: Necessary for the website to function properly</li>
          <li>Analytics cookies: Help me understand how visitors interact with my website</li>
          <li>Preference cookies: Allow the website to remember choices you make</li>
        </ul>
        <p>
          You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off
          all cookies through your browser settings.
        </p>
      </section>

      {/* Changes to Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
        <p>
          I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
          revision date. I encourage you to review this Privacy Policy periodically to stay informed about how I am
          protecting your information.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or my data practices, please contact me at:
        </p>
        <ul className="list-none space-y-2">
          <li>Email: jironjuarezjuan@outlook.com</li>
          <li>Phone: (+52) 55 83 67 99 08</li>
          <li>Location: Mexico City, Mexico</li>
        </ul>
      </section>

      {/* Footer */}
      <div className="border-t pt-6 mt-12 text-center">
        <p className="mb-4 text-gray-600">Last updated: March 11, 2025</p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  )
}
