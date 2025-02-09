export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose lg:prose-xl">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information (name, email, profile details)</li>
            <li>Project details and client interactions</li>
            <li>Usage data and analytics</li>
            <li>Payment processing information</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
          <div className="space-y-4">
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Detect and prevent fraudulent activity</li>
              <li>Personalize your experience</li>
              <li>Communicate important updates</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement industry-standard security measures including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>SSL/TLS encryption</li>
            <li>Regular security audits</li>
            <li>Access controls</li>
            <li>Data anonymization where possible</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
          <p>
            We use trusted third-party services including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Google Analytics for usage tracking</li>
            <li>Stripe for payment processing</li>
            <li>AWS for secure data storage</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge complaints with authorities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            For privacy-related inquiries, email us at{' '}
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