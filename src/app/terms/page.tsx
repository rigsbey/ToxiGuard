export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose lg:prose-xl">
        <p className="text-lg text-gray-600 mb-8">
          Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using ToxicGuard services, you agree to be bound by these Terms. 
            If you disagree with any part, you may not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
          <p className="mb-4">
            ToxicGuard provides AI-powered risk assessment tools for freelancers and agencies 
            to evaluate client contracts and project requirements.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate information during registration</li>
            <li>Maintain confidentiality of your account</li>
            <li>Comply with all applicable laws</li>
            <li>Use services only for lawful purposes</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Payments & Subscriptions</h2>
          <div className="space-y-4">
            <p>Subscription plans are billed monthly/annually. You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pay all charges for purchased services</li>
              <li>Provide valid payment information</li>
              <li>Cancel at least 24 hours before renewal</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            All content and software on ToxicGuard are our exclusive property. 
            You receive limited, non-exclusive access for personal use only.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
          <p className="mb-4">
            We may suspend or terminate access immediately for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Breach of these Terms</li>
            <li>Unauthorized use of services</li>
            <li>Fraudulent activity</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Disclaimers</h2>
          <p className="mb-4">
            Services are provided "as is". We don't guarantee:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uninterrupted service availability</li>
            <li>Accuracy of risk assessments</li>
            <li>Results from using our services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by the laws of [Your Jurisdiction]. 
            Any disputes will be resolved in [Court/Arbitration Venue].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>
            For questions about these Terms, contact us at{' '}
            <a 
              href="mailto:toxiguard.post@gmail.com" 
              className="text-blue-600 hover:underline"
            >
              toxiguard.post@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 